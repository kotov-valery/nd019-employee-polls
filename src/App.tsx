// Global imports
import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Local imports
import "./App.css";
import LoginPage from "./components/LoginPage";
import { _getQuestions, _getUsers } from "./backend/_DATA";
import { QuestionList, UserList } from "./backend/Types";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import NewPoll from "./components/NewPoll";
import User from "./components/User";
import Leaderboard from "./components/Leaderboard";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const [userList, setUserList] = React.useState<UserList | null>(null);
  const [questions, setQuestions] = React.useState<QuestionList | null>(null);

  const authedUser = useSelector((state: any) => state.authedUser);

  const loading = userList === null || questions === null;
  const userName = userList !== null ? userList[authedUser]?.name : "";

  useEffect(() => {
    _getUsers().then((users) => {
      setUserList(users);
    });
    _getQuestions().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  return (
    <Fragment>
      {loading ? <Loading /> : null}
      <div className="container">
        <Nav />
        <User authedUser={authedUser} />
        {loading === true ? null : (
          <Routes>
            <Route
              path="/"
              element={
                !authedUser ? (
                  <LoginPage userList={userList} />
                ) : (
                  <Dashboard authedUser={userName} questions={questions} />
                )
              }
            />
            <Route path="/new" element={<NewPoll />} />
            <Route
              path="/leaderboard"
              element={<Leaderboard userList={userList} />}
            />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

export default App;
