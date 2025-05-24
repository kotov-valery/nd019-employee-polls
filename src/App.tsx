// Global imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Local imports
import "./App.css";
import LoginPage from "./components/LoginPage";
import { _getQuestions, _getUsers } from "./backend/_DATA";
import { QuestionList, UserList } from "./backend/Types";
import Dashboard from "./components/Dashboard";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const [userList, setUserList] = React.useState<UserList | null>(null);
  const [questions, setQuestions] = React.useState<QuestionList | null>(null);

  const authedUser = useSelector((state: any) => state.authedUser);

  useEffect(() => {
    _getUsers().then((users) => {
      setUserList(users);
    });
    _getQuestions().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  if (!userList) {
    return <Loading />;
  }

  if (authedUser && userList) {
    const userName = userList[authedUser]?.name;
    if (!questions) {
      return <Loading />;
    }
    return (
      <div className="App">
        <Dashboard authedUser={userName} questions={questions} />
      </div>
    );
  }

  return (
    <div className="App">
      <LoginPage userList={userList} />
    </div>
  );
}

export default App;
