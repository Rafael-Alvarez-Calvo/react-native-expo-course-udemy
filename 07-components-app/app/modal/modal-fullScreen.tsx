import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";

const ModalFullScreenModal = () => {
  return (
    <ThemedView
      className="mt-2 flex-1 items-center justify-center"
      bgColor="#A52182"
    >
      <ThemedText type="h1" className="text-light-success mb-4">
        Hola soy otro modal
      </ThemedText>

      <ThemedButton onPress={() => router.dismiss()} className="mb-3">
        Cerrar Modal
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalFullScreenModal;
