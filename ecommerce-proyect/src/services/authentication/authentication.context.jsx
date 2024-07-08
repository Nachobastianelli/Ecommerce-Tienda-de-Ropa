import { useState, createContext } from "react";

export const AuthenticationContext = createContext(); //creamos el context

const userValue = JSON.parse(localStorage.getItem("user"));

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleLogin = (email, imageUrl, role) => {
    const userData = { email, imageUrl, role };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
