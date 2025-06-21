import { useLocation, Navigate } from "react-router";
import { useContext } from "react";

import { AuthContext } from "./AuthContext";

function Protected({
  children,
  notFound = false,
}: {
  children: React.ReactNode;
  notFound?: boolean;
}): JSX.Element | null {
  const { isUserAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();

  if (notFound) {
    logout();
    return <Navigate to="/login" replace state={{ path: "/404" }} />;
  }

  if (!isUserAuthenticated()) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
}

export default Protected;
