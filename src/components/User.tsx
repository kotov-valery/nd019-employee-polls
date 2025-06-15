import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { logoutUser } from "../redux/actions/authedUser";
import { useSelector } from "react-redux";

function User({ authedUser }: { authedUser: string }) {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.users);
  const userAvatar = users[authedUser]?.avatarURL;

  const onHandleLogout = () => {
    dispatch(logoutUser());
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
