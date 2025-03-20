import { useEffect, useState } from "react";
import Thread from "./Thread";
import apiClient from "../services/api-client";

const MyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    apiClient.get("users/me/questions").then(({ data }) => setQuestions(data));
  }, []);
  return (
    <>
      <div className="thread-list">
        <h3 className="text-3xl text-grey border-b-2 py-2">My Questions</h3>
        {questions.map((question) => (
          <Thread
            key={question._id}
            question={question}
            link={"/me/question"}
          />
        ))}
      </div>
    </>
  );
};

export default MyQuestions;
