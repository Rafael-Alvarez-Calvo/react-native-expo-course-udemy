import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";

import useAnimation from "@/hooks/useAnimation";
import { useThemeColor } from "@/hooks/useThemeColor";

interface FadeInImageProps {
  url: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ url, style }: FadeInImageProps) => {
  const primaryColor = useThemeColor({}, "primary");
  const [isLoading, setIsLoading] = useState(true);

  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          size={50}
          color={primaryColor}
        />
      )}

      {/* En ios las imagenes aparecen de golpe asi que de esta manera le ponemos un fade in */}
      <Animated.Image
        source={{ uri: url }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
};

export default FadeInImage;
