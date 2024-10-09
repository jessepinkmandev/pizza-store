import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const RedirectRoute = ({ children }: { children: any }) => {
  const { user }: any = UserAuth();

  if (user) {
    return <Navigate to="/pizza-store/menu" />;
  }
  return children;
};

export default RedirectRoute;
