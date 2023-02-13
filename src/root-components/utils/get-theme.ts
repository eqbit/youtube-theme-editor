import darkThemeStyles from "../theme-styles/dark-theme-styles.css?inline";

export const getThemeCssByName = (theme: string) => {
  console.log("theme here is", theme);
  switch (theme) {
    case "dark-theme":
      return darkThemeStyles;
    default:
      return "";
  }
};
