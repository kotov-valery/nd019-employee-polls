// Global imports
import React, { useEffect } from "react";
import "./App.css";

// Local imports
import LoginPage from "./components/LoginPage";
import { _getUsers } from "./backend/_DATA";

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const [userList, setUserList] = React.useState(null);

  useEffect(() => {
    _getUsers().then((users) => {
      setUserList(users);
    });
  }, []);

  return (
    <div className="App">
      {userList === null ? <Loading /> : <LoginPage userList={userList} />}
    </div>
  );
}

export default App;
