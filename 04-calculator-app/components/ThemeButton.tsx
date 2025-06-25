import React from "react";
import { Text, Pressable, PressableProps } from "react-native";
import * as Haptics from "expo-haptics";

import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

interface IThemeButtonProps extends PressableProps {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean; // Optional prop for double size
  onPress?: () => void;
}

const ThemeButton = ({
  label,
  color = Colors.darkGray,
  doubleSize = false,
  blackText,
  onPress,
}: IThemeButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80, // Wider button for '0'
      })}
      onPress={() => {
        Haptics.selectionAsync(); // Provide haptic feedback on press
        onPress && onPress(); // Call the onPress function if provided
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default ThemeButton;
