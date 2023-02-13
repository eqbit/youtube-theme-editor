import { useEffect, useState } from "react";
import { getSavedTheme } from "@/utils/storage";
import { getThemeCssByName } from "@/root-components/utils/get-theme";

const ThemeStyles = () => {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    getSavedTheme().then((theme) => {
      if (!theme) return;

      const themeCss = getThemeCssByName(theme);
      setTheme(themeCss);
    });
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");

    if (!html) return;

    html.classList.add("tdl-theme");
    html.setAttribute("tdl-theme", "");
  }, []);

  return <>{theme}</>;
};

export default ThemeStyles;
