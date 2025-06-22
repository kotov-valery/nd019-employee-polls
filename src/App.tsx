// Global imports
import { useEffect, Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Local imports
import "./App.css";

import { handleInitialData } from "./redux/actions/init";
import { AppDispatch, RootState } from "./redux/store";
import { AuthContext } from "./components/Login/AuthContext";

import LoginPage from "./components/Login/LoginPage";
import User from "./components/User";
import Dashboard from "./components/dashboard/Dashboard";
import Nav from "./components/Nav";
import NewPoll from "./components/NewPoll";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Poll from "./components/Poll/Poll";
import Protected from "./components/Login/Protected";
import NotFound from "./components/NotFound";
import LoadingBar from "./components/LoadingBar";

function App() {
  const dispatch: AppDispatch = useDispatch();

  const userList = useSelector((state: RootState) => state.users);
  const isLoading = useSelector((state: RootState) => state.loading);

  const { authedUser, isUserAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (isLoading || !userList) {
    return <LoadingBar isLoading={isLoading} />;
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
          <Route
            path="/"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/add"
            element={
              <Protected>
                <NewPoll />
              </Protected>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <Protected>
                <Leaderboard userList={userList} />
              </Protected>
            }
          />
          <Route
            path="/questions/:id"
            element={
              <Protected>
                <Poll />
              </Protected>
            }
          />
          <Route path="/login" element={<LoginPage userList={userList} />} />
          <Route
            path="/404"
            element={
              <Protected>
                <NotFound />
              </Protected>
            }
          />
          <Route
            path="*"
            element={
              <Protected notFound={true}>
                <NotFound />
              </Protected>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
