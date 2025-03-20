import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { MdVerified } from "react-icons/md";

const AnswerList = ({ answers, onAnswerVote }) => {
  return (
    <div className="answers-list grid gap-5">
      {answers?.map(({ _id, solution, userId, upVotesCount }) => (
        <div
          className="answer bg-secondary p-3 rounded-md flex justify-between items-center gap-2 "
          key={_id}
        >
          <div className="answer-body flex gap-4 items-center">
            <div className="grid gap-2 text-xl">
              <BiSolidUpvote
                className="text-green cursor-pointer"
                onClick={() => onAnswerVote(_id, { vote: true })}
              />
              <BiSolidDownvote
                className="text-red cursor-pointer"
                onClick={() => onAnswerVote(_id, { vote: false })}
              />
            </div>
            <div className="solution">
              <p className=" text-white">{solution} </p>
            </div>
          </div>
          <div className="answer-details grid">
            <div className="vote-count flex items-center justify-end text-green text-xl gap-1">
              <BiSolidUpvote />
              <p>{upVotesCount}</p>
            </div>
            <div className="user-details text-blue font-semibold text-xs flex items-center gap-1">
              <span className="font-semibold">
                <MdVerified />
              </span>
              <p>{userId.firstName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
