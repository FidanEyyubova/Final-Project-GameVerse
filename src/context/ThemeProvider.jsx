import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsLight(storedTheme === "light");
    }
  }, [setIsLight]);

  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
