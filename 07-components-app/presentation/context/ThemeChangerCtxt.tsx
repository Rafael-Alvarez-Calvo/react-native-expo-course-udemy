import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeChangerCtxtType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;

  toggleTheme: () => void;
  toggleSystemTheme: () => void;
}

const ThemeChangerCtxt = createContext({} as ThemeChangerCtxtType);

export const useThemeChangerCtxt = () => {
  const themeChanger = useContext(ThemeChangerCtxt);
  return themeChanger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  const currentTheme = isSystemTheme
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";

  useEffect(() => {
    AsyncStorage.getItem("selected-theme").then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme === "dark");
      setIsSystemTheme(theme === "system");
      setColorScheme(theme as "light" | "dark" | "system");
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerCtxt.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSystemTheme,
          toggleTheme: async () => {
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsDarkMode(!isDarkMode);
            setIsSystemTheme(false);

            await AsyncStorage.setItem(
              "selected-theme",
              isDarkMode ? "light" : "dark"
            );
          },
          toggleSystemTheme: async () => {
            setColorScheme("system");
            setIsSystemTheme(!isSystemTheme);

            await AsyncStorage.setItem("selected-theme", "system");
          },
        }}
      >
        {children}
      </ThemeChangerCtxt.Provider>
    </ThemeProvider>
  );
};
