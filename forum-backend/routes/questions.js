const express = require("express");
const router = express.Router();
const answers = require("./answers");

const auth = require("../middleware/auth");
const { Question, validate, validateVote } = require("../models/question");
const { User } = require("../models/users");
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");

// Get all the questions from the database
router.get("/", async (req, res) => {
  const questions = await Question.find().sort("postedOn").populate("userId");
  res.send(questions);
});
router.get("/tags/:tag", async (req, res) => {
  const questions = await Question.find({ tag: req.params.tag });
  res.send(questions);
});

// Get the question with the given id and populate the answers from the 'answers' collections for the given question_id
router.get("/:id", async (req, res) => {
  const qnas = await Question.findById(req.params.id).populate({
    path: "answers",
    populate: {
      path: "userId",
    },
    options: { sort: "-upVotesCount" },
  });

  res.send(qnas);
});

// Post a question
router.post("/", auth, upload.single("screenshot"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const result = await cloudinary.uploader.upload(req.file.path);
  fs.unlink(req.file.path, (err) => {
    if (err) throw err;
  });

  const { title, problem, experiment, tag } = req.body;
  const question = new Question({
    userId: req.user._id,
    title: title,
    problem: problem,
    imageUrl: result.secure_url,
    experiment: experiment,
    tag: tag,
  });
  await question.save();
  res.send(question);
});

// Update a question
router.put("/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { title, problem, experiment, tag } = req.body;
  const question = await Question.findByIdAndUpdate(
    req.params.id,
    {
      title,
      problem,
      experiment,
      tag,
    },
    { new: true }
  );
  await question.save();
  res.send(question);
});

router.put("/:id/vote", auth, async (req, res) => {
  const { error } = validateVote(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { vote } = req.body;
  const question = await Question.findById(req.params.id);
  const isUpvoted = question.upVotes.get(req.user._id);
  const isDownVoted = question.downVotes.get(req.user._id);
  const user = await User.findById(question.userId);
  // Get the user which is downvoting
  const downVoteUser = await User.findById(req.user._id);

  // UP VOTE
  if (vote) {
    if (isUpvoted) {
      question.upVotes.delete(req.user._id);
      question.upVotesCount = question.upVotesCount - 1;
      user.reputationScore = user.reputationScore - 10;
    } else {
      if (isDownVoted) {
        question.downVotes.delete(req.user._id);
        downVoteUser.reputationScore = downVoteUser.reputationScore + 1;
        user.reputationScore = user.reputationScore + 12;
      } else {
        user.reputationScore = user.reputationScore + 10;
      }
      question.upVotes.set(req.user._id, true);
      question.upVotesCount = question.upVotesCount + 1;
    }
  }

  // DOWN VOTE
  else {
    // toggle functionality
    // Check if it is already downvoted if so delete
    // ensure that the reputation score is set to neutral for both the uploader and the downvoter
    if (isDownVoted) {
      question.downVotes.delete(req.user._id);
      user.reputationScore = user.reputationScore + 2;
      downVoteUser.reputationScore = downVoteUser.reputationScore + 1;
    }
    // jo user ka reputation score woh depend karta upvotes pe
    // upvote ?
    //    remove the upvote and decrease the reputation score by -10 as earlier it was + 10 (neutral)
    // downvote set
    // decrease the reputation score of downvoter
    else {
      if (isUpvoted) {
        question.upVotes.delete(req.user._id);
        user.reputationScore = user.reputationScore - 10;
      }
      user.reputationScore = user.reputationScore - 2;
      question.downVotes.set(req.user._id, true);
      downVoteUser.reputationScore = downVoteUser.reputationScore - 1;

      question.upVotesCount > 0
        ? (question.upVotesCount = question.upVotesCount - 1)
        : null;
    }
  }
  await user.save();
  await downVoteUser.save();
  await question.save();
  res.send(question);
});

// Delete a question
router.delete("/:id", auth, async (req, res) => {
  const question = await Question.findByIdAndDelete(req.params.id);
  res.send(question);
});

router.use("/:question_id/answers", answers);
module.exports = router;
