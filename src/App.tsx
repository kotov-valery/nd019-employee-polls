// Global imports
import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

// Local imports
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { _getQuestions, _getUsers } from "./backend/_DATA";
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
  const location = useLocation();

  const userList = useSelector((state: any) => state.users);
  const authedUser = useSelector((state: any) => state.authedUser);
  const isLoading = useSelector((state: any) => state.loading);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <header className="app-header">
        {authedUser && <Nav />}
        {authedUser && <User authedUser={authedUser} />}
      </header>
      <div className="container">
        <Routes>
          <Route
            path="/login"
            element={
              authedUser ? (
                <Navigate to={location.state?.from || "/"} replace />
              ) : (
                <LoginPage userList={userList} />
              )
            }
          />
          <Route
            path="/"
            element={
              authedUser ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/add"
            element={
              authedUser ? <NewPoll /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/leaderboard"
            element={
              authedUser ? (
                <Leaderboard userList={userList} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/questions/:id"
            element={authedUser ? <Poll /> : <Navigate to="/login" replace />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
