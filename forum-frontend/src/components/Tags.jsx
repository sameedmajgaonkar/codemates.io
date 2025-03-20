import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import Thread from "./Thread";
import TagList from "./common/TagList";
const Tags = () => {
  const [tag, setTag] = useState("");
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    const endpoint = tag ? `/questions/tags/${tag}` : "/questions/";
    apiClient.get(endpoint).then((res) => setQuestionList(res.data));
  }, [tag]);
  const handleClick = (tag) => {
    setTag(tag);
  };
  return (
    <div className="self-start w-full">
      <TagList onTagClick={handleClick} selectedTag={tag} />
      <div className="thread-list">
        {questionList.map((question) => (
          <Thread key={question._id} question={question} link="/questions" />
        ))}
      </div>
    </div>
  );
};

export default Tags;
