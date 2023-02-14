import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSavedTheme, saveTheme } from "@/utils/storage";
import { getThemeCssByName } from "@/root-components/utils/get-theme";
import { setTheme, useThemeState } from "@/store/slices/theme";
import { useOnInitialize } from "@/hooks";
import { Theme } from "@/enums/themes";

const ThemeStyles = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeState();
  const [themeCss, setThemeCss] = useState<string>();

  useOnInitialize();

  useEffect(() => {
    getSavedTheme().then((savedTheme) => {
      if (!savedTheme) savedTheme = Theme.default;
      dispatch(setTheme(savedTheme));
    });
  }, []);

  useEffect(() => {
    const themeCss = getThemeCssByName(theme);
    setThemeCss(themeCss);
    saveTheme(theme);
  }, [theme]);

  return <>{themeCss}</>;
};

export default ThemeStyles;
