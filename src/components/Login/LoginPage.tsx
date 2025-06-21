import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { UserList } from "../../backend/Types";

import loginLogo from "../../assets/loginpage-logo.png";
import { AuthContext } from "./AuthContext";

function LoginPage({ userList }: { userList: UserList }) {
  const [selectedUser, setSelectedUser] = useState("");

  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event: any) => {
    event.preventDefault();
    if (selectedUser) {
      authContext.login(selectedUser);
      navigate(location.state?.path || "/");
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
