import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import useThemeColor from "@src/lib/hooks/useTheme";
import React from "react";

const ToggleTheme: React.FC = ({}) => {
  const appTheme = useThemeColor();

  const RenderedIcon: React.FC<{ className: string }> = ({ className }) => {
    if (appTheme.theme === "light") return <MoonIcon className={className} />;
    return <SunIcon className={className} />;
  };

  return (
    <button onClick={appTheme.setAppTheme}>
      <RenderedIcon className={`${appTheme.text} w-8 h-8`} />
    </button>
  );
};
export default ToggleTheme;
