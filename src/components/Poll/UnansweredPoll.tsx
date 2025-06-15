import { Question } from "../../backend/Types";

function UnansweredPoll({
  poll,
  authorAvatar,
  onHandleVote,
}: {
  poll: Question;
  authorAvatar: string;
  onHandleVote: (answer: number) => void;
}) {
  const OPTION_ONE = 1;
  const OPTION_TWO = 2;

  return (
    <div className="poll-container">
      <h2>Poll by {poll?.author}</h2>
      <img
        className="poll-author-avatar"
        src={authorAvatar}
        alt="User Avatar"
      />
      <h3>Would you rather...</h3>
      <div className="poll-options-container">
        <div className="poll-option">
          <div className="poll-option-text">{poll.optionOne.text}</div>
          <button
            className="poll-option-button"
            onClick={() => onHandleVote(OPTION_ONE)}
          >
            Vote Option 1
          </button>
        </div>
        <div className="poll-option">
          <div className="poll-option-text">{poll.optionTwo.text}</div>
          <button
            className="poll-option-button"
            onClick={() => onHandleVote(OPTION_TWO)}
          >
            Vote Option 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnansweredPoll;
