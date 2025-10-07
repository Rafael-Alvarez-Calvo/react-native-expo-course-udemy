import { useThemeColor } from "@/hooks/useThemeColor";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ThemedViewProps extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
  children?: React.ReactNode;
}

const ThemedView = ({
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
  ...props
}: ThemedViewProps) => {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();
  return (
    <View
      className={className}
      style={[
        {
          flex: 1,
          backgroundColor,
          paddingTop: safe ? safeArea.top : 0,
          paddingBottom: safe ? safeArea.bottom : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        props.style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemedView;
