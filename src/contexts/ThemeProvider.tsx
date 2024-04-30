import React, { createContext, useContext, useState } from "react";
import { LightTheme } from "./themes/light";
import { DarkTheme } from "./themes/dark";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemesContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const profileTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<"light" | "dark">(profileTheme as "light" | "dark" ?? "light");
  
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      localStorage.setItem("theme", prevTheme === "light" ? "dark" : "light");
      return (prevTheme === "light" ? "dark" : "light")
    });
  };

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      {theme === "light" && <LightTheme/>}
      {theme === "dark" && <DarkTheme/>}
      {children}
    </ThemesContext.Provider>
  );
};

export const useThemes = () => {
  const context = useContext(ThemesContext);
  if (!context) {
    throw new Error("useThemes deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
