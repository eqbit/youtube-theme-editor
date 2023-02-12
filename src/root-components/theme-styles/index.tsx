import styles from "./styles.css";
import { useEffect } from "react";

const ThemeStyles = () => {
  useEffect(() => {
    const html = document.querySelector("html");

    if (!html) return;

    html.classList.add("tdl-theme");
    html.setAttribute("tdl-theme", "");
  }, []);

  return <style>{styles}</style>;
};

export default ThemeStyles;
