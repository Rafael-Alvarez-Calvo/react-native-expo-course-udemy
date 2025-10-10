import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Platform, Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";

interface ThemedSwitchProps {
  text?: string;
  className?: string;
  value: boolean;

  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({
  text,
  className,
  value,
  onValueChange,
}: ThemedSwitchProps) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      className={`flex flex-row items-center justify-between w-full active:opacity-80 ${className}`}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        className={className}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
        ios_backgroundColor={value ? "green" : "red"}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
