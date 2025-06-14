import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAuthedUser } from "../redux/actions/authedUser";
import loginLogo from "../assets/loginpage-logo.png";

function LoginPage({ userList }: { userList: any }) {
  const [selectedUser, setSelectedUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      console.log(`Logged in as ${userList[selectedUser].name}`);
      navigate("/");
    } else {
      console.error("Please select a user to log in.");
    }
  };

  return (
    <div className="login-page-container">
      <h1>Employee Poll</h1>
      <img className="login-logo" src={loginLogo} alt="Login Logo" />
      <p>Select user to log in</p>
      <select
        className="login-select"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="" disabled>
          Select a user
        </option>
        {Object.keys(userList).map((user: any) => (
          <option key={userList[user].id} value={user}>
            {userList[user].name}
          </option>
        ))}
      </select>
      <button
        className="login-button"
        onClick={handleLogin}
        disabled={!selectedUser}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
