import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "./AuthContext";
import { setAuthedUser, logoutUser } from "../../redux/actions/authedUser";
import { AppDispatch, RootState } from "../../redux/store";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const authedUser = useSelector((state: RootState) => state.authedUser);

  const isUserAuthenticated = () => {
    return authedUser !== null && authedUser !== undefined && authedUser !== "";
  };

  const login = (userId: string) => {
    if (userId) {
      dispatch(setAuthedUser(userId));
    } else {
      console.error("User ID is required for login.");
    }
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <AuthContext.Provider
      value={{
        authedUser,
        isUserAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
