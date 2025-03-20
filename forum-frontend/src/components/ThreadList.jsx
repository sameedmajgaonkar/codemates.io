import _ from "lodash";
import Thread from "./Thread";
import useQuestions from "../hooks/useQuestions";

const ThreadList = ({ filter }) => {
  const questionList = useQuestions();
  const questions = filter
    ? _.orderBy(questionList, [filter], ["desc"])
    : questionList;

  return (
    <div className="thread-list">
      {questions.map((question) => (
        <Thread key={question._id} question={question} link={`/questions`} />
      ))}
    </div>
  );
};

export default ThreadList;
