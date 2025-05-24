// Global imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Local imports
import "./App.css";
import LoginPage from "./components/LoginPage";
import { _getUsers } from "./backend/_DATA";
import { UserList } from "./backend/Types";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const [userList, setUserList] = React.useState<UserList | null>(null);

  const authedUser = useSelector((state: any) => state.authedUser);

  useEffect(() => {
    _getUsers().then((users) => {
      setUserList(users);
    });
  }, []);

  if (!userList) {
    return <Loading />;
  }

  if (authedUser && userList) {
    return (
      <div className="App">
        <h1>Welcome, {userList[authedUser].name}!</h1>
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
