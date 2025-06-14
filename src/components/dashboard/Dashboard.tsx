import { useSelector } from "react-redux";
import DashboardList from "./DashboardList";
import { RootState } from "../../redux/reducers";

function Dashboard() {
  const questions = useSelector((state: RootState) => state.questions);
  const authedUser = useSelector((state: RootState) => state.authedUser);
  const user = useSelector((state: RootState) => state.users[authedUser]);

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
