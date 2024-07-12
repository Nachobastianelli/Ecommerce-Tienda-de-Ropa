import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const Protected = () => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    console.log("Usuario no autenticado, redirigiendo a Home");
    return <Navigate to="/" replace />;
  }

  if (user.role !== "Admin") {
    console.log("Usuario no autorizado, redirigiendo a Home");
    return <Navigate to="/" replace />;
  }

  console.log("Entraste papu");
  return <Outlet />;
};

export default Protected;
