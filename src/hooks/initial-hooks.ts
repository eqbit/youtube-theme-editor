import { useEffect } from "react";

export const useOnInitialize = () => {
  useEffect(() => {
    const html = document.querySelector("html");

    if (!html) return;

    html.classList.add("tdl-theme");
    html.setAttribute("tdl-theme", "");
  }, []);
};
