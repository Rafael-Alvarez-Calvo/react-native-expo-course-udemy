import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface ThemedButtonProps extends PressableProps {
  className?: string;
  children?: string;
}

const ThemedButton = ({ className, children, ...rest }: ThemedButtonProps) => {
  return (
    <Pressable
      {...rest}
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
