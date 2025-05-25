import type { User, QuestionList } from "../../backend/Types";
import DashboardList from "./DashboardList";

function Dashboard({
  user,
  questions,
}: {
  user: User;
  questions: QuestionList | null;
}) {
  if (!user || !questions) {
    return <div>Loading...</div>;
  }

  const answeredQuestions = Object.keys(user.answers).map(
    (id) => questions[id]
  );

  const unansweredQuestions = Object.keys(questions)
    .filter((id) => !user.answers[id])
    .map((id) => questions[id]);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <div className="dashoard-cards">
        <div className="dashboard-card">
          <DashboardList
            title="New questions"
            questions={unansweredQuestions}
          />
        </div>
        <div className="dashboard-card">
          <DashboardList
            title="Answered questions"
            questions={answeredQuestions}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
