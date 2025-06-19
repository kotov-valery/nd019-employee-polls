import { useSelector } from "react-redux";
import DashboardList from "./DashboardList";
import { RootState } from "../../redux/reducers";
import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("unanswered");

  const questions = useSelector((state: RootState) => state.questions);
  const authedUser = useSelector((state: RootState) => state.authedUser);
  const user = useSelector((state: RootState) => state.users[authedUser]);

  const answeredQuestions = Object.keys(user.answers)
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredQuestions = Object.keys(questions)
    .filter((id) => !user.answers[id])
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <div className="dashboard-tabs">
        <button
          className={`dashboard-tab ${
            activeTab === "unanswered" ? "active" : ""
          }`}
          onClick={() => setActiveTab("unanswered")}
        >
          Unanswered Questions
        </button>
        <button
          className={`dashboard-tab ${
            activeTab === "answered" ? "active" : ""
          }`}
          onClick={() => setActiveTab("answered")}
        >
          Answered Questions
        </button>
      </div>
      <div className="dashboard-content">
        {activeTab === "unanswered" && (
          <DashboardList
            title="Unanswered Questions"
            questions={unansweredQuestions}
          />
        )}
        {activeTab === "answered" && (
          <DashboardList
            title="Answered Questions"
            questions={answeredQuestions}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
