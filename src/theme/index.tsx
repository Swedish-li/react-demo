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

export type AppThemeType = "dark" | "light";

interface AppThemeContextType {
  theme: AppThemeType;
  toggleTheme: () => void;
}

export const AppThemeContext = React.createContext<AppThemeContextType>({
  theme: "light",
  toggleTheme: () => undefined,
});

const { Provider } = AppThemeContext;

const AppThemeProvider: FC = ({ children }) => {
  const [appTheme, setAppTheme] = useState<AppThemeType>("light");

  const theme = appTheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Provider
        value={{
          theme: appTheme,
          toggleTheme: () => {
            const newTheme = appTheme === "dark" ? "light" : "dark";
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
