import React from "react";
import css from "./index.module.scss";

export const Popup = () => {
  return (
    <div className={css.root}>© TD Lab LLC 2022-{new Date().getFullYear()}</div>
  );
};
