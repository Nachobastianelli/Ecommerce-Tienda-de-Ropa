import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "../services/authentication/authentication.context";

const Protected = () => {
  const { user } = useContext(AuthenticationContext);

  if (!user || user.role !== "Admin") {
    console.log("Usuario no autorizado, redirigiendo a Home");
    return <Navigate to="/" replace />;
  } else {
    console.log("Entraste loquita");
    return (
      <AuthenticationContextProvider>
        <Outlet />
      </AuthenticationContextProvider>
    );
  }
};

export default Protected;
