import { Alert } from "react-native";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("2-Button Alert", "This is a 2 button Alert", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("3-Button Alert", "This is a 3 button Alert", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive", // this color red just shows on iOS
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ThemedView margin className="mt-2">
      <ThemedButton onPress={createTwoButtonAlert} className="mb-4">
        2-Button Alert
      </ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert} className="mb-4">
        3-Button Alert
      </ThemedButton>
    </ThemedView>
  );
};

export default AlertsScreen;
