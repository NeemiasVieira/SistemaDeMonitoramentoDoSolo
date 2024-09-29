import React, { createContext, useContext, useMemo, useState } from "react";
import { LightTheme } from "./themes/light";
import { DarkTheme } from "./themes/dark";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
  isLightTheme: boolean;
  isDarkTheme: boolean;
}

const ThemesContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
  isLightTheme: true,
  isDarkTheme: false,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const profileTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<"light" | "dark">((profileTheme as "light" | "dark") ?? "light");

  const isLightTheme = useMemo(() => {
    return theme === "light";
  }, [theme]);

  const isDarkTheme = useMemo(() => {
    return theme === "dark";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      localStorage.setItem("theme", prevTheme === "light" ? "dark" : "light");
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme, isLightTheme, isDarkTheme }}>
      {theme === "light" && <LightTheme />}
      {theme === "dark" && <DarkTheme />}
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
