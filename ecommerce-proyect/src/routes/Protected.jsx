import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import NewUser from "../components/newUser/NewUser";

const Protected = () => {
  const { user } = useContext(AuthenticationContext);
  {
    if (!user || user.role !== "Admin") {
      return <Navigate to="/" replace />;
    }
  }
  return <Outlet />;
};

export default Protected;
