import { useNavigate } from "react-router-dom";

import { Question } from "../../backend/Types";

function DashboardItem({
  questionId,
  question,
}: {
  questionId: string;
  question: Question;
}) {
  const navigate = useNavigate();

  const formattedDate = new Date(question.timestamp).toLocaleString();
  const handleShow = () => {
    navigate(`/questions/${question.id}`);
  };

  return (
    <li key={questionId} className="dashboard-item">
      <div className="dashboard-item-header">
        <div className="dashboard-item-author">{question.author}</div>
        <div className="dashboard-item-timestamp">{formattedDate}</div>
      </div>
      <hr className="dashboard-item-divider" />
      <button className="dashboard-item-button" onClick={handleShow}>
        Show
      </button>
    </li>
  );
}

export default DashboardItem;
