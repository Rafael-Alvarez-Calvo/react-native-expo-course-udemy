import { useRef } from "react";
import { Animated, Easing, PanResponder } from "react-native";

const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const fadeIn = ({
    initialPosition = 0,
    toValue = 1,
    duration = 300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition); // Start at the view
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      easing,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition); // Start at the view
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      easing,
      useNativeDriver: true,
    }).start(callback);
    // }).start(() => animatedTop.setValue(-100)); // Reset position after fade out
    // }).start(() => animatedTop.resetAnimation()); // Reset position after fade out
  };

  const transformYFromTop = ({
    initialPosition = -100,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
  }) => {
    animatedTop.setValue(initialPosition); // Start above the view

    Animated.timing(animatedTop, {
      toValue,
      duration,
      easing, // Bounce effect
      useNativeDriver: true,
    }).start();
  };

  const transformYFromBottom = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
  }) => {
    animatedTop.setValue(initialPosition); // Start at the view
    Animated.timing(animatedTop, {
      toValue,
      duration,
      easing, // Bounce effect when going up
      useNativeDriver: true,
    }).start();
  };

  const draggable = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  return {
    animatedOpacity,
    animatedTop,
    pan,

    // Methods
    fadeIn,
    fadeOut,
    transformYFromTop,
    transformYFromBottom,
    draggable,
  };
};

export default useAnimation;
