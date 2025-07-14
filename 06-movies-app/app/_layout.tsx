import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { nowPLayingAction } from "@/core/actions/movies/now-playing.action";

const queryClient = new QueryClient();

import "../global.css";

const RootLayout = () => {
  // nowPLayingAction();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
