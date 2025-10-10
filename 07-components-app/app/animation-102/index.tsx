import { Animated } from "react-native";

import useAnimation from "@/hooks/useAnimation";
import ThemedView from "@/presentation/shared/ThemedView";

const Animation102Screen = () => {
  const { pan, draggable } = useAnimation();

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-primary dark:bg-dark-secondary rounded-xl mb-5"
        style={[pan.getLayout(), { width: 150, height: 150 }]}
        {...draggable.panHandlers}
      />
    </ThemedView>
  );
};
export default Animation102Screen;
