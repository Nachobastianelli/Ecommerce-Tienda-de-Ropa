import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const ProtectedUser = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    console.log("No inicio sesion, redirigiendo a Home");
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default ProtectedUser;
