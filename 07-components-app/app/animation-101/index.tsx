import { Animated, Easing } from "react-native";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import useAnimation from "@/hooks/useAnimation";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    transformYFromTop,
    transformYFromBottom,
  } = useAnimation();

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl mb-5"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />
      <ThemedButton
        className="mb-5"
        onPress={() => {
          fadeIn({ duration: 500 });
          transformYFromTop({ duration: 500, easing: Easing.elastic(2) });
        }}
      >
        Fade In
      </ThemedButton>
      <ThemedButton
        className="mb-5"
        onPress={() => {
          fadeOut({ duration: 500 });
          transformYFromBottom({
            toValue: -100,
            duration: 500,
            easing: Easing.out(Easing.elastic(2)),
          });
        }}
      >
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
