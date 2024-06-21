import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthenticationContextProvider } from "./services/authentication/authentication.context.jsx";
import { ThemeContextProvider } from "./services/theme/theme.context.jsx";
import { CartProvider } from "./services/cartContext/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
