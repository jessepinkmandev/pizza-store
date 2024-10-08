import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const { user }: any = UserAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoutes;
