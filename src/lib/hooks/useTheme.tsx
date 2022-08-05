import { MoonIcon } from "@heroicons/react/outline";
import {
  CLASS_TEXT_DARK_THEME,
  CLASS_TEXT_LIGHT_THEME,
} from "@src/lib/constants/theme";
import {
  Theme,
  ThemeContext,
  ThemeContextType,
} from "@src/lib/contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";

interface ThemeProps {
  text: string;
  setAppTheme: () => void;
  theme: Theme;
}

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  const [appTheme, setAppTheme] = useState<ThemeProps>({
    text: "text-green-900",
    setAppTheme: () => setTheme("dark"),
    theme: "light",
  });

  useEffect(() => {
    if (theme === "dark")
      setAppTheme({
        text: CLASS_TEXT_DARK_THEME,
        setAppTheme: () => setTheme("light"),
        theme: "dark",
      });
    if (theme === "light") {
      setAppTheme({
        text: CLASS_TEXT_LIGHT_THEME,
        setAppTheme: () => setTheme("dark"),
        theme: "light",
      });
    }
  }, [setTheme, theme]);

  return appTheme;
};

export default useTheme;
