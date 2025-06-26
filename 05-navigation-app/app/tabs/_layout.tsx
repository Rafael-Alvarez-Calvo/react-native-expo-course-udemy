import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          // borderTopWidth: 0,
          // elevation: 0,
          // shadowColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="menu-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
