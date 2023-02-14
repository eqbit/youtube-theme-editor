import darkThemeStyles from "../theme-styles/dark-theme-styles.css?inline";
import { Theme } from "@/enums/themes";

export const getThemeCssByName = (theme: Theme) => {
  console.log("theme here is", theme);
  switch (theme) {
    case Theme.darkTheme:
      return darkThemeStyles;
    default:
      return "";
  }
};
