import { createContext } from "react";

const AuthContext = createContext({
  isUserAuthenticated: (): boolean => false,
  loginUser: (userId: string): void => {},
  logoutUser: (): void => {},
});

export { AuthContext };
