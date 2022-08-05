import { KEY_LOCALSTORAGE_THEME } from "@src/lib/constants/theme";
import React, { createContext, Dispatch, SetStateAction } from "react";
import themeConfig from "@src/configs/themeConfig";

export type Theme = "light" | "dark";

interface ThemeProviderProps {
  initialTheme?: string;
  children: React.ReactNode;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(KEY_LOCALSTORAGE_THEME);
    if (storedPrefs === "light" || storedPrefs === "dark") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return themeConfig.defaultSkin; // light theme as the default;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem(KEY_LOCALSTORAGE_THEME, rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
