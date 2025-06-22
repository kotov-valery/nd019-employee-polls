import { createContext } from "react";

const AuthContext = createContext({
  authedUser: null as string | null,
  isUserAuthenticated: (): boolean => false,
  login: (userId: string): void => {},
  logout: (): void => {},
});

export { AuthContext };
