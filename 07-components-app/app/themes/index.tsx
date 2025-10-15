import { useState } from "react";

import { useThemeChangerCtxt } from "@/presentation/context/ThemeChangerCtxt";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";

// Revisar documentación de expo para store data https://docs.expo.dev/develop/user-interface/store-data/

const ThemesScreen = () => {
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { currentTheme, isSystemTheme, toggleTheme, toggleSystemTheme } =
    useThemeChangerCtxt();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const handleDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();

    setDarkModeSettings({
      ...darkModeSettings,
      darkMode: value,
      systemMode: false,
    });
  };

  const handleSystemMode = (value: boolean) => {
    // setColorScheme(value ? "light" : "dark");

    if (value) {
      toggleSystemTheme();
    }

    setDarkModeSettings({
      ...darkModeSettings,
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="my-5">
        <ThemedSwitch
          text="Dark Mode"
          value={darkModeSettings.darkMode}
          onValueChange={handleDarkMode}
        />
      </ThemedCard>
      <ThemedCard className="mb-5">
        <ThemedSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={handleSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
