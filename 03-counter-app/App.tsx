import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Fab from "./components/Fab";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Fab
        label="- 1"
        onPress={() => setCounter(counter - 1)}
        onLongPress={() => setCounter(0)}
        position="left"
      />
      <Fab label="Reset" onPress={() => setCounter(0)} />
      <Fab
        label="+ 1"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        position="right"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  counter: {
    fontSize: 120,
    fontWeight: "100",
  },
});
