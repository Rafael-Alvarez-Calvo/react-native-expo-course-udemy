import { Text, type TextProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";

interface IThemeTextProps extends TextProps {
  children?: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption";
}

const ThemeText = ({ children, variant, ...restProps }: IThemeTextProps) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1} // Default to 1 line, can be overridden by props
      adjustsFontSizeToFit // Adjusts font size to fit the container
      {...restProps} // Spread the rest of the props to allow customization
    >
      {children}
    </Text>
  );
};

export default ThemeText;
