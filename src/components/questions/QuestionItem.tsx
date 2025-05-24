import { Question } from "../../backend/Types";

function QuestionItem({
  questionId,
  question,
}: {
  questionId: string;
  question: Question;
}) {
  return (
    <li key={questionId}>
      <h2>
        {question.optionOne.text} or {question.optionTwo.text}
      </h2>
      <p>Asked by: {question.author}</p>
      <p>Votes for Option One: {question.optionOne.votes.length}</p>
      <p>Votes for Option Two: {question.optionTwo.votes.length}</p>
      <p>Timestamp: {new Date(question.timestamp).toLocaleString()}</p>
    </li>
  );
}

export default QuestionItem;
