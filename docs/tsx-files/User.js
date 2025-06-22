import { useSelector } from "react-redux";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RootState } from "../redux/store";
import { AuthContext } from "./Login/AuthContext";

function User({ authedUser }: { authedUser: string }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const users = useSelector((state: RootState) => state.users);
  const userAvatar = users[authedUser]?.avatarURL;

  const onHandleLogout = () => {
    authContext.logout();
    navigate("/login");
  };

  if (!authedUser || authedUser === "") {
    return <div>Please login...</div>;
  }

  return (
    <div className="user-info-container">
      {userAvatar && (
        <img
          className="user-avatar"
          src={userAvatar}
          alt={`${authedUser}'s avatar`}
        />
      )}
      <div className="user-info">
        <span className="logged-in-label">Logged in as:</span>
        <span className="username">{authedUser}</span>
      </div>
      <button className="logout-button" onClick={onHandleLogout}>
        Logout
      </button>
    </div>
  );
}

export default User;
