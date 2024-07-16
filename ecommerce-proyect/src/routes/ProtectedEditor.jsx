import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const ProtectedEditor = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user || user.role !== "Editor") {
    console.log("Usuario no autorizado, redirigiendo a Home");
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default ProtectedEditor;
