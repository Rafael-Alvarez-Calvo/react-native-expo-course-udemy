import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
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
          animation: "fade_from_bottom",
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
