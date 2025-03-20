import React, { useEffect, useState } from "react";
import badge from "../assets/badge.png";
import question from "../assets/question.png";
import answer from "../assets/answer.png";
import "../components/styles/Card.css";
import { Link } from "react-router-dom";
import apiClient from "../services/api-client";
import { RiSwordFill } from "react-icons/ri";
const Profile = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    apiClient
      .get("users/me/questions")
      .then(({ data }) => setTotalQuestions(data.length));
    apiClient
      .get("users/me/answers")
      .then(({ data }) => setTotalAnswers(data.length));
    apiClient
      .get("users/me/")
      .then(({ data }) => setScore(data.reputationScore));
  }, []);
  return (
    <div className="card_container flex flex-col gap-2 md:flex-row justify-center h-[180vh] md:h-full w-full md:gap-8 text-center">
      <div className="card">
        <div className="front">
          <img src={question} alt="" />
          <h3 className="card-heading">YOUR QUESTIONS</h3>
        </div>
        <div className="back">
          <Link to="/me/questions" className="card-heading">
            {totalQuestions} Questions Uploaded
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="front">
          <img src={badge} alt="" />
          <h3 className="card-heading">REPUTATION SCORE</h3>
        </div>
        <div className="back">
          <span className="bg-gradient-to-r from-green to-orange font-semibold text-7xl text-transparent bg-clip-text">
            <RiSwordFill className="text-orange_bright" />
            {score}
          </span>
        </div>
      </div>
      <div className="card">
        <div className="front">
          <img src={answer} alt="" />
          <h3 className="card-heading">YOUR ANSWERS</h3>
        </div>
        <div className="back">
          <span className="card-heading">
            {" "}
            {totalAnswers} Answers Contributed
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
