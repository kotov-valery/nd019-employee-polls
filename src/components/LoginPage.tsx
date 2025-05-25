import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAuthedUser } from "../redux/actions/authedUser";

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
    <div>
      <h1>Login Page</h1>
      <p>Select user to log in</p>
      <select
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
      <button onClick={handleLogin} disabled={!selectedUser}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
