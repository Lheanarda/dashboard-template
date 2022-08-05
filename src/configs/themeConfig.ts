// eslint-disable-next-line import/extensions
import { Theme } from "./../lib/contexts/ThemeContext";

interface ThemeConfig {
  defaultSkin: Theme;
}

const themeConfig: ThemeConfig = {
  defaultSkin: "light", //light | dark
};

export default themeConfig;
