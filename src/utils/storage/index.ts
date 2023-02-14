import { Theme } from "@/enums/themes";

export const getSavedTheme = async (): Promise<Theme | undefined> => {
  const themeObject = await chrome.storage.sync.get(["theme"]);

  if (themeObject) return themeObject.theme;
};

export const saveTheme = async (theme: Theme) => {
  await chrome.storage.sync.set({ theme });
};
