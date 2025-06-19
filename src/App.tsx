// Global imports
import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Local imports
import "./App.css";
import LoginPage from "./components/LoginPage";
import { _getQuestions, _getUsers } from "./backend/_DATA";
import { QuestionList, UserList } from "./backend/Types";
import Dashboard from "./components/dashboard/Dashboard";
import Nav from "./components/Nav";
import NewPoll from "./components/NewPoll";
import User from "./components/User";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import { handleInitialData } from "./redux/actions/init";
import { AppDispatch } from "./redux/store";
import Poll from "./components/Poll/Poll";
import NotFound from "./components/NotFound";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const dispatch: AppDispatch = useDispatch();

  const userList = useSelector((state: any) => state.users);

  const authedUser = useSelector((state: any) => state.authedUser);
  const isLoading = useSelector((state: any) => state.loading);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  console.log("Logged in user:", authedUser);

  return (
    <Fragment>
      {authedUser ? (
        <>
          <header className="app-header">
            <Nav />
            <User authedUser={authedUser} />
          </header>
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<NewPoll />} />
              <Route
                path="/leaderboard"
                element={<Leaderboard userList={userList} />}
              />
              <Route path="/questions/:id" element={<Poll />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      ) : (
        <LoginPage userList={userList} />
      )}
    </Fragment>
  );
}

export default App;
