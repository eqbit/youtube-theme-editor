import { useState } from "react";

export const useToggle = (
  initialState: boolean
): [status: boolean, toggle: () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};
