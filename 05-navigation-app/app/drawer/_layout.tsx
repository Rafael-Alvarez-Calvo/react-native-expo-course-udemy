import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer} // Optional: Custom drawer content
      screenOptions={{
        drawerItemStyle: {
          borderRadius: 16, // Optional: Add rounded corners to drawer items
          marginBottom: 8, // Optional: Add margin between drawer items
        },
        overlayColor: "rgba(0, 0, 0, 0.4)", // Optional: Set a semi-transparent overlay color
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false, // Hide the header shadow
        sceneStyle: {
          backgroundColor: "#fff", // Set the background color for the drawer content
        },
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
