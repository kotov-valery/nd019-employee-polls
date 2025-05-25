import { Question } from "../../backend/Types";

function DashboardItem({
  questionId,
  question,
}: {
  questionId: string;
  question: Question;
}) {
  const formattedDate = new Date(question.timestamp).toLocaleString();

  return (
    <li key={questionId} className="dashboard-item">
      <div className="dashboard-item-header">
        <div className="dashboard-item-author">{question.author}</div>
        <div className="dashboard-item-timestamp">{formattedDate}</div>
      </div>
      <hr className="dashboard-item-divider" />
      <button className="dashboard-item-button">Show</button>
    </li>
  );
}

export default DashboardItem;
