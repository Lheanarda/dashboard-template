// eslint-disable-next-line import/extensions
import { Theme } from "./../lib/contexts/ThemeContext";

interface ThemeConfig {
  defaultSkin: Theme;
  defaultFullscreen: boolean;
}

const themeConfig: ThemeConfig = {
  defaultSkin: "light", //light | dark
  defaultFullscreen: true,
};

export default themeConfig;
