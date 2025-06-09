import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { handleVoteQuestion } from "../redux/actions/questions";

function Poll() {
  const OPTION_ONE = 1;
  const OPTION_TWO = 2;

  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams<{ id: string }>();

  const questions = useSelector((state: RootState) => state.questions);
  const poll = id && questions ? questions[id] : null;

  const users = useSelector((state: RootState) => state.users);
  const authedUser = useSelector((state: RootState) => state.authedUser);

  const currentUser = users[authedUser];
  const unanswered = id ? currentUser.answers[id] === undefined : false;

  const onHandleVote = (option: number) => {
    if (id) {
      dispatch(
        handleVoteQuestion(
          id,
          option === OPTION_ONE ? "optionOne" : "optionTwo"
        )
      );
    }
  };

  if (poll && unanswered) {
    return (
      <div className="poll-container">
        <h2>Poll by {poll?.author}</h2>
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
  } else if (id && poll && !unanswered) {
    const isOptionOneVoted = currentUser.answers[id] === "optionOne";
    const votedForThisOptionText = "You voted for this option";
    return (
      <div className="poll-container">
        <h2>Poll by {poll?.author}</h2>
        <h3>Would you rather...</h3>
        <div className="poll-options-container">
          <div className="poll-option-voted">
            <div className="poll-option-text">{poll.optionOne.text}</div>
            <button
              className="poll-option-button"
              disabled
              hidden={!isOptionOneVoted}
            >
              {isOptionOneVoted ? votedForThisOptionText : "Vote Option 1"}
            </button>
          </div>
          <div className="poll-option-voted">
            <div className="poll-option-text">{poll.optionTwo.text}</div>
            <button
              className="poll-option-button"
              disabled
              hidden={isOptionOneVoted}
            >
              {!isOptionOneVoted ? votedForThisOptionText : "Vote Option 2"}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="poll-container">
        <p>Poll not found.</p>
      </div>
    );
  }
}

export default Poll;
