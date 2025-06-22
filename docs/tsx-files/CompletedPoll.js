import { Question } from "../../backend/Types";

function CompletedPoll({
  poll,
  authorAvatar,
  isOptionOneVoted,
  optionOneVotes,
  optionTwoVotes,
  totalAnswers,
}: {
  poll: Question;
  authorAvatar: string;
  isOptionOneVoted: boolean;
  optionOneVotes: number;
  optionTwoVotes: number;
  totalAnswers: number;
}) {
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
        <div
          className={
            "poll-option-voted " +
            (isOptionOneVoted ? "user-selected-option" : "")
          }
        >
          <div className="poll-option-text">{poll.optionOne.text}</div>
          <div className="poll-option-results">
            {((optionOneVotes / totalAnswers) * 100).toFixed(2)}% voted for this
            option, namely {optionOneVotes} people
          </div>
        </div>
        <div
          className={
            "poll-option-voted " +
            (!isOptionOneVoted ? "user-selected-option" : "")
          }
        >
          <div className="poll-option-text">{poll.optionTwo.text}</div>
          <div className="poll-option-results">
            {((optionTwoVotes / totalAnswers) * 100).toFixed(2)}% voted for this
            option, namely {optionTwoVotes} people
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPoll;
