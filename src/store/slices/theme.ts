import { Theme } from "@/enums/themes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "@/hooks/redux";

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: Theme.default,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload: theme }: PayloadAction<Theme>) => {
      return {
        ...state,
        theme,
      };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const useThemeState = () => useSelector((state) => state.theme);
export default themeSlice.reducer;
