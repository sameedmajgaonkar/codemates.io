import FormatDuration from "../utils/formatDuration";
import { Link } from "react-router-dom";
import { intervalToDuration } from "date-fns";
import { BiSolidUpvote } from "react-icons/bi";
import profile from "../assets/profile.png";
import "./styles/Thread.css";

const Thread = ({ question, link }) => {
  const { _id, userId, title, problem, upVotesCount, postedOn } = question;

  const duration = intervalToDuration({
    start: postedOn,
    end: new Date(),
  });

  const { format } = new FormatDuration(duration);

  return (
    <div className="thread-container">
      <div className="thread">
        <div className="thread-body">
          <div className="user">
            <img src={profile} alt="" className="profileImage" />
            <span>
              {userId?.firstName} {userId?.lastName}
            </span>
            <span className="duration">
              {format("years") ||
                format("months") ||
                format("days") ||
                format("minutes") ||
                format("seconds")}
            </span>
          </div>

          <Link to={`${link}/${_id}`} className="title">
            {title}
          </Link>
          <p className="problem">{problem.substring(0, 100)}...</p>
        </div>
        <div className="upvotes">
          <BiSolidUpvote /> {upVotesCount}
        </div>
        {}
      </div>
    </div>
  );
};

export default Thread;
