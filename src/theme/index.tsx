import React, { FC, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const darkTheme: DefaultTheme = {
  primary: {
    color: "#ba8fff",
    backgroundColor: "#282c35",
  },
};

const lightTheme: DefaultTheme = {
  primary: {
    color: "#764abc",
    backgroundColor: "#fff",
  },
};

const DARK = "dark";
const LIGHT = "light";

export type AppThemeType = typeof DARK | typeof LIGHT;

interface AppThemeContextType {
  theme: AppThemeType;
  toggleTheme: () => void;
}

export const AppThemeContext = React.createContext<AppThemeContextType>({
  theme: LIGHT,
  toggleTheme: () => undefined,
});

const { Provider } = AppThemeContext;

const isAppTheme = (t: string | null): t is AppThemeType =>
  t === DARK || t === LIGHT;

const LOCAL_STORE_KEY = "app.theme";

const getDefaultTheme = (): AppThemeType => {
  const localTheme = localStorage.getItem(LOCAL_STORE_KEY);
  if (isAppTheme(localTheme)) {
    return localTheme;
  }
  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  return userPrefersLight ? LIGHT : DARK;
};

const AppThemeProvider: FC = ({ children }) => {
  const [appTheme, setAppTheme] = useState<AppThemeType>(getDefaultTheme());

  const theme = appTheme === DARK ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Provider
        value={{
          theme: appTheme,
          toggleTheme: () => {
            const newTheme = appTheme === DARK ? LIGHT : DARK;
            localStorage.setItem(LOCAL_STORE_KEY, newTheme);
            setAppTheme(newTheme);
          },
        }}
      >
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default AppThemeProvider;
