const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const _ = require("lodash");
const auth = require("../middleware/auth");

const { User, validate } = require("../models/users");
const { Question } = require("../models/question");
const { Answer } = require("../models/answer");

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password -_id");
  res.send(user);
});

router.get("/me/questions", auth, async (req, res) => {
  const questions = await Question.find({ userId: req.user._id }).sort(
    "-upVotesCount"
  );
  res.send(questions);
});

router.get("/me/answers", auth, async (req, res) => {
  const answers = await Answer.find({ userId: req.user._id }).sort(
    "-upVotesCount"
  );
  res.send(answers);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { firstName, lastName, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).send("User already registered");

  user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(
      _.pick(user, ["_id", "firstName", "lastName", "email", "reputationScore"])
    );
});

module.exports = router;
