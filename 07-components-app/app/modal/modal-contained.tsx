import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const ModalContainedModalScreen = () => {
  return (
    <ThemedView
      className="mt-2 flex-1 items-center justify-center"
      bgColor="#A52182"
    >
      <ThemedText>ModalScreen</ThemedText>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalContainedModalScreen;
