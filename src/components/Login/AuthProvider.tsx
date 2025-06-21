import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "./AuthContext";
import { setAuthedUser } from "../../redux/actions/authedUser";
import { AppDispatch, RootState } from "../../redux/store";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const authedUser = useSelector((state: RootState) => state.authedUser);

  const isUserAuthenticated = () => {
    return authedUser !== null && authedUser !== undefined && authedUser !== "";
  };

  const loginUser = (userId: string) => {
    if (userId) {
      dispatch(setAuthedUser(userId));
    } else {
      console.error("User ID is required for login.");
    }
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
