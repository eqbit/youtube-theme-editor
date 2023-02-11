import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { waitForElement } from "./utils/observe";

const settingsRoot = document.createElement("div");
settingsRoot.id = "crx-root";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  settingsRoot
);

(() => {
  if (location.pathname.includes("/account")) {
    waitForElement("ytd-settings-sidebar-renderer").then((element) => {
      element?.append(settingsRoot);
    });
  }
})();
