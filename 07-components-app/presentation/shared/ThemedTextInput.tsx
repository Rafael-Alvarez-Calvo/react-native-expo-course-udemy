import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface ThemedTextInputProps extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: ThemedTextInputProps) => {
  return (
    <TextInput
      className={`bg-white dark:bg-black/10 text-light-primary placeholder:text-light-primary dark:text-light-secondary dark:placeholder:text-light-secondary rounded-lg mb-4 p-4 shadow shadow-black/5 ${className}`}
      //   placeholderTextColor={"text-white dark:text-light-secondary"}
      {...rest}
    />
  );
};

export default ThemedTextInput;
