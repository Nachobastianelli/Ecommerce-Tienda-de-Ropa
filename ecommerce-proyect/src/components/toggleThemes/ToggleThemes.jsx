// ToggleThemes.jsx
import { useContext } from "react";
import { ThemeContext } from "../../services/theme/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        theme === "light"
          ? "bg-blue-500 text-white"
          : "bg-yellow-500 text-black"
      }`}
    >
      Cambiar tema {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ToggleTheme;
