// Global imports
import { useEffect, Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Local imports
import "./App.css";

import { handleInitialData } from "./redux/actions/init";
import { AppDispatch } from "./redux/store";

import LoginPage from "./components/Login/LoginPage";
import User from "./components/User";
import Dashboard from "./components/dashboard/Dashboard";
import Nav from "./components/Nav";
import NewPoll from "./components/NewPoll";
import Leaderboard from "./components/Leaderboard/Leaderboard";

import Poll from "./components/Poll/Poll";
import { AuthContext } from "./components/Login/AuthContext";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const dispatch: AppDispatch = useDispatch();

  const userList = useSelector((state: any) => state.users);
  const isLoading = useSelector((state: any) => state.loading);

  const { authedUser, isUserAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (isLoading || !userList) {
    return <Loading />;
  }

  return (
    <Fragment>
      <header className="app-header">
        {isUserAuthenticated() && <Nav />}
        {isUserAuthenticated() && authedUser && (
          <User authedUser={authedUser} />
        )}
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
          <Route path="/login" element={<LoginPage userList={userList} />} />
          <Route path="*" element={<LoginPage userList={userList} />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
