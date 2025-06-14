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

  const totalAnswers = poll
    ? poll.optionOne.votes.length + poll.optionTwo.votes.length
    : 0;
  const optionOneVotes = poll ? poll.optionOne.votes.length : 0;
  const optionTwoVotes = poll ? poll.optionTwo.votes.length : 0;

  const onHandleVote = (option: number) => {
    if (!id) return;

    const uid = authedUser;
    const qid = id;
    dispatch(
      handleVoteQuestion(
        uid,
        qid,
        option === OPTION_ONE ? "optionOne" : "optionTwo"
      )
    );
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
    return (
      <div className="poll-container">
        <h2>Poll by {poll?.author}</h2>
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
              {((optionOneVotes / totalAnswers) * 100).toFixed(2)}% voted for
              this option, namely {optionOneVotes} people
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
              {((optionTwoVotes / totalAnswers) * 100).toFixed(2)}% voted for
              this option, namely {optionTwoVotes} people
            </div>
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
