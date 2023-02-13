import darkThemeStyles from "./dark-theme-styles.css";
import { useEffect, useState } from "react";

const ThemeStyles = () => {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    setTheme(darkThemeStyles);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");

    if (!html) return;

    html.classList.add("tdl-theme");
    html.setAttribute("tdl-theme", "");
  }, []);

  return <style>{theme}</style>;
};

export default ThemeStyles;
