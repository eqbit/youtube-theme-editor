export const getSavedTheme = async (): Promise<string | undefined> => {
  const themeObject = await chrome.storage.sync.get(["theme"]);

  if (themeObject) return themeObject.theme;
};

export const saveTheme = async (theme: string) => {
  await chrome.storage.sync.set({ theme });
};
