import { useLocation, Navigate } from "react-router";
import { useContext } from "react";

import { AuthContext } from "./AuthContext";

function Protected({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null {
  const { isUserAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isUserAuthenticated()) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
}

export default Protected;
