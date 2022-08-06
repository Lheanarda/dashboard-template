import themeConfig from "@src/configs/themeConfig";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { KEY_IS_FULLSCREEN } from "../constants/constant";

export interface FullscreenContextType {
  isFullscreen: boolean;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
}

interface FullscreenProviderProps {
  children: React.ReactNode;
}

export const FullscreenContext = createContext<FullscreenContextType | null>(
  null
);

const getInitialPreference = () => {
  const screenPrefs = window.localStorage.getItem(KEY_IS_FULLSCREEN);
  if (screenPrefs === "true") return true;
  else if (screenPrefs === "false") return false;

  return themeConfig.defaultFullscreen;
};

export const FullscreenProvider: React.FC<FullscreenProviderProps> = ({
  children,
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(
    getInitialPreference()
  );

  useEffect(() => {
    localStorage.setItem(KEY_IS_FULLSCREEN, isFullscreen.toString());
  }, [isFullscreen]);

  return (
    <FullscreenContext.Provider value={{ isFullscreen, setIsFullscreen }}>
      {children}
    </FullscreenContext.Provider>
  );
};
