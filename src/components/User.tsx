import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { logoutUser } from "../redux/actions/authedUser";

function User({ authedUser }: { authedUser: string | null }) {
  const dispatch = useDispatch<AppDispatch>();

  const onHandleLogout = () => {
    dispatch(logoutUser());
  };

  if (!authedUser) {
    return <div>Please login...</div>;
  }

  return (
    <div className="user-info-container">
      <div className="user-info">
        Logged in as: <strong>{authedUser}</strong>
      </div>
      <button className="logout-button" onClick={onHandleLogout}>
        Logout
      </button>
    </div>
  );
}

export default User;
