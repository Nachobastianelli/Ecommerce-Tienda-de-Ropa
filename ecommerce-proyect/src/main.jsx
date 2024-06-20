import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthenticationContextProvider } from "./services/authentication/authentication.context.jsx";
import { ThemeContextProvider } from "./services/theme/theme.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
