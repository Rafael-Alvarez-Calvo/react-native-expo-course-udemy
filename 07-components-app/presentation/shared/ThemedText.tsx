import { Text, TextProps } from "react-native";

export interface ThemedTextProps extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "h3" | "bold" | "semi-bold" | "link";
}

const ThemedText = ({ className, type, ...rest }: ThemedTextProps) => {
  return (
    <Text
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "h3" ? "text-lg" : undefined,
        type === "bold" ? "font-bold" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "text-blue-500 underline" : undefined,
        className,
      ].join(" ")}
      {...rest}
    />
  );
};

export default ThemedText;
