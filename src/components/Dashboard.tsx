import { QuestionList } from "../backend/Types";
import QeustionList from "./questions/QuestionList";

function Dashboard({
  authedUser,
  questions,
}: {
  authedUser: string;
  questions: QuestionList;
}) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="App">
        <h1>Welcome to dashboard, {authedUser}!</h1>
      </div>
      <div>
        <QeustionList title="New questions" questions={questions} />
      </div>
      <div>
        <QeustionList title="Answered questions" questions={questions} />
      </div>
    </div>
  );
}

export default Dashboard;
