import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Import the RootState type

function Poll() {
  const { id } = useParams<{ id: string }>(); // Extract the 'id' parameter from the URL

  const questions = useSelector((state: RootState) => state.questions);
  const poll = id && questions ? questions[id] : null; // Get the poll by id from the Redux store

  return (
    <div className="poll-container">
      <h2>Poll by {poll?.author}</h2>
      <h3>Would you rather...</h3>
      {poll ? (
        <div className="poll-options-container">
          <div className="poll-option">
            <div className="poll-option-text">{poll.optionOne.text}</div>
            <button className="poll-option-button">Vote Option 1</button>
          </div>
          <div className="poll-option">
            <div className="poll-option-text">{poll.optionTwo.text}</div>
            <button className="poll-option-button">Vote Option 2</button>
          </div>
        </div>
      ) : (
        <p>Poll not found.</p>
      )}
    </div>
  );
}

export default Poll;
