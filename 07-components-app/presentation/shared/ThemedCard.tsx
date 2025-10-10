import { Text, View } from "react-native";

interface ThemedCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemedCard = ({ className, children }: ThemedCardProps) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl py-2 px-5 shadow shadow-black/5 ${className}`}
    >
      <Text>{children}</Text>
    </View>
  );
};

export default ThemedCard;
