import { useContext } from "react";
import { themeContext } from "../../context/theme.context";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(themeContext);

  return (
    <div className="text-center p-2">
      {darkMode ? (
        <i className="h3 m-2 mx-3 active bi bi-sun" onClick={toggleTheme}></i>
      ) : (
        <i className="h3 m-2 mx-3 active bi bi-moon" onClick={toggleTheme}></i>
      )}
    </div>
  );
}

export default ThemeToggle;
