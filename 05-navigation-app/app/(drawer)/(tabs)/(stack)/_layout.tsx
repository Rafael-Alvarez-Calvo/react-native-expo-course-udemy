import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      // return navigation.dispatch(StackActions.pop(1)); // Go back to the previous screen
      router.back(); // Go back to the previous screen using expo-router
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            size={28}
            className="mr-5 pt-1"
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          headerTitleStyle: {
            fontFamily: "WorkSans-Black",
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products",
          animation: "fade",
          headerTitleStyle: {
            fontFamily: "WorkSans-Black",
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile",
          animation: "fade",
          headerTitleStyle: {
            fontFamily: "WorkSans-Black",
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings",
          animation: "fade",
          headerTitleStyle: {
            fontFamily: "WorkSans-Black",
            fontSize: 24,
          },
        }}
      />
    </Stack>
  );
};

export default StackLayout;
