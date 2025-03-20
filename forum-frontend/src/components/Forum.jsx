import { useEffect, useState } from "react";
import AnswerList from "./AnswerList";
import apiClient from "../services/api-client";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./common/Button";
import TextArea from "./common/TextArea";
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { toast } from "react-toastify";
import "./styles/Forum.css";

const Forum = () => {
  const { id } = useParams();
  const [forum, setForum] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    apiClient.get(`/questions/${id}`).then(({ data }) => {
      setForum(data);
    });
  }, [isUpdated]);

  const {
    title,
    tag,
    problem,
    imageUrl,
    experiment: code,
    answers,
    upVotesCount,
  } = forum;

  const schema = z.object({
    solution: z
      .string()
      .min(10, {
        message: "The answer must be of atleast 10 characters long...",
      })
      .max(300),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const doSubmit = async (answer) => {
    const originalForum = { ...forum };
    await apiClient
      .post(`/questions/${id}/answers`, answer)
      .then(() => {
        setIsUpdated(!isUpdated);
      })
      .catch((ex) => {
        setForum(originalForum);
        toast.error("Something went wrong!");
      });
  };

  const handleVote = async (vote) => {
    const originalForum = { ...forum };
    await apiClient
      .put(`/questions/${id}/vote`, vote)
      .then(() => {
        setIsUpdated(!isUpdated);
        toast("Thank you for your response", { autoClose: 500 });
      })
      .catch((ex) => {
        setForum(originalForum);
      });
  };

  const handleAnswerVote = async (_id, vote) => {
    const originalForum = { ...forum };
    await apiClient
      .put(`/questions/${id}/answers/${_id}/vote`, vote)
      .then(() => {
        setIsUpdated(!isUpdated);
        toast("Thank you for your response", { autoClose: 500 });
      })
      .catch((ex) => {
        setForum(originalForum);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="forum">
      <div className="header">
        <div className="votes">
          <BiSolidUpvote
            className="cursor-pointer text-green"
            onClick={() => handleVote({ vote: true })}
          />
          {upVotesCount}
          <BiSolidDownvote
            className="cursor-pointer text-red"
            onClick={() => handleVote({ vote: false })}
          />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{tag}</p>
        </div>
      </div>
      <div className="content">
        <div className="problem">{problem}</div>
        <div className="code">{code}</div>
        <div className="screenshot">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className="answers-container grid gap-8">
        <h2>
          {answers?.length > 0
            ? `Showing ${answers.length} ${
                answers.length > 1 ? "answers" : "answer"
              }`
            : "Be the first one to contribute..."}
        </h2>
        <AnswerList answers={answers} onAnswerVote={handleAnswerVote} />
      </div>
      <div className="answer-form">
        <form onSubmit={handleSubmit(doSubmit)}>
          <h1 htmlFor="">Post your answer</h1>
          <TextArea
            name="solution"
            placeholder="Contribute to the community"
            register={register}
            errors={errors}
          />
          <Button isValid={isValid} label="Post Answer" />
        </form>
      </div>
    </div>
  );
};

export default Forum;
