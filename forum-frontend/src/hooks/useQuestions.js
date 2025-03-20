import { useState, useEffect } from "react";
import HttpService from "../services/httpService";

const useQuestions = () => {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    HttpService("questions")
      .getAll()
      .then(({ data }) => setQuestionList(data));
  }, []);
  return questionList;
};

export default useQuestions;
