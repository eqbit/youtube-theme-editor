import React from "react";
import css from "./index.module.scss";
import { Theme } from "@/enums/themes";
import { setTheme } from "@/store/slices/theme";
import { useDispatch } from "react-redux";

const themes = [
  {
    id: Theme.default,
    name: "Default",
    src: "https://i.ytimg.com/vi/3jTjBt0Enyw/hqdefault.jpg",
  },
  {
    id: Theme.darkTheme,
    name: "Dark theme",
    src: "https://i.ytimg.com/vi/JbPnI80KhTo/maxresdefault.jpg",
  },
];

export const ThemeList = () => {
  const dispatch = useDispatch();

  const updateTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className={css.root}>
      <div className={css.grid}>
        {themes.map(({ id, name, src }) => (
          <button
            className={css.gridItem}
            key={id}
            onClick={() => updateTheme(id)}
          >
            <h3>{name}</h3>
            <div className={css.gridItemImg}>
              <img src={src} alt="" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
