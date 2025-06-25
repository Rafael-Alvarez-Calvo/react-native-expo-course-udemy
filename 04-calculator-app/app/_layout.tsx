import { View, Text, Platform } from "react-native";

import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "@/styles/global-styles";

// import * as NavigationBar from "expo-navigation-bar";

// const isAndroid = Platform.OS === "android";

// if (isAndroid) {
//   NavigationBar.setBackgroundColorAsync("#000000"); // Set the navigation bar color
// }

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null; // or a loading indicator
  }

  return (
    <View style={globalStyles.background}>
      <StatusBar style="light" />
      <Slot />
    </View>
  );
};

export default RootLayout;
