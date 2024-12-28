import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <themeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default { themeContext, ThemeModeProvider };
