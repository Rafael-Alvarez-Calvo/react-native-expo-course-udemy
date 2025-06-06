import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface IFabProps {
  label: string;
  position?: "left" | "right";

  //Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function Fab({
  label,
  onPress,
  onLongPress,
  position,
}: IFabProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        position === "left" && styles.positionLeft,
        position === "right" && styles.positionRight,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#65658f",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: "#000", // Solo en IOs
    shadowOffset: {
      // Solo en IOs
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Solo en IOs
    elevation: 2, // Solo en Android
  },

  positionRight: {
    right: 50,
  },

  positionLeft: {
    left: 50,
  },

  buttonText: {
    color: "white",
    fontSize: 24,
  },
});
