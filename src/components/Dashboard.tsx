import { QuestionList } from "../backend/Types";
import Qeustions from "./questions/QuestionList";

function Dashboard({
  authedUser,
  questions,
}: {
  authedUser: string;
  questions: QuestionList | null;
}) {
  if (!authedUser || !questions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="App">
        <h1>Welcome to dashboard, {authedUser}!</h1>
      </div>
      <div>
        <Qeustions title="New questions" questions={questions} />
      </div>
      <div>
        <Qeustions title="Answered questions" questions={questions} />
      </div>
    </div>
  );
}

export default Dashboard;
