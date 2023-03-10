import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import Settings from "./root-components/settings";
import ThemeStyles from "@/root-components/theme-styles";
import { waitForElement } from "./utils/observe";
import { store } from "@/store";

const settingsRoot = document.createElement("div");
settingsRoot.id = "tdl-settings-root";

const stylesRoot = document.createElement("style");
stylesRoot.id = "tdl-styles-root";
document.head.append(stylesRoot);

ReactDOM.render(
  <Provider store={store}>
    <Settings />
  </Provider>,
  settingsRoot
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeStyles />
  </Provider>,
  stylesRoot
);

(() => {
  if (location.pathname.includes("/account")) {
    waitForElement("ytd-settings-sidebar-renderer").then((element) => {
      element?.append(settingsRoot);
    });
  }
})();
