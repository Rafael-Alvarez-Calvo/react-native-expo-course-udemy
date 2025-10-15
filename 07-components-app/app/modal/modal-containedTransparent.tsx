import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const ModalContainedTransparentScreen = () => {
  return (
    <ThemedView
      className="mt-2 flex-1 items-center justify-center"
      bgColor="#A5218260"
    >
      <ThemedText type="h1" className="text-lime-500">
        Modal Contenido Transparente
      </ThemedText>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalContainedTransparentScreen;
