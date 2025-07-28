import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

import "../global.css";

const RootLayout = () => {
  // nowPLayingAction();

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#000",
            },
            animation: "fade_from_bottom",
            animationDuration: 300,
            statusBarStyle: "light",
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
