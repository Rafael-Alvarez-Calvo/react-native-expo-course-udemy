import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";

const ModalNormalScreen = () => {
  return (
    <ThemedView
      className="mt-2 flex-1 items-center justify-center"
      bgColor="#A52182"
    >
      <ThemedText type="h1" className="text-light-success mb-4">
        Hola soy un modal normal
      </ThemedText>

      <ThemedButton
        onPress={() => router.push("/modal/modal-fullScreen")}
        className="mb-3"
      >
        Abrir otro modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>Cerrar Modal</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalNormalScreen;
