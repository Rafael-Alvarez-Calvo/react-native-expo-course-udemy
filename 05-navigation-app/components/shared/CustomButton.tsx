import { Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface ICustomButtonProps extends PressableProps {
  children: string;
  onPress?: () => void;
  color?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = ({
  children,
  color = "primary",
  size = "md",
  variant = "contained",
  className = "",
  onPress,
}: ICustomButtonProps) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  const textSize = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  };

  if (variant === "text-only") {
    return (
      <Pressable className="p-3" onPress={onPress}>
        <Text
          className={`text-center font-work-medium ${textColor[color]} ${textSize[size]} ${className}`}
        >
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`p-3 rounded-md active:opacity-90 ${btnColor[color]} ${className}`}
      onPress={onPress}
    >
      <Text
        className={`text-center text-white font-work-medium ${textSize[size]}`}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
