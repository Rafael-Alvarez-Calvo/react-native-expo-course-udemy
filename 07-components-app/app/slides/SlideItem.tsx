import { Image, useWindowDimensions } from "react-native";

import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Slide } from "./slidesData";

interface SlideItemsProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemsProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;
  return (
    <ThemedView
      className="flex-1 rounded p-10 justify-center bg-red-500"
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />
      <ThemedText
        type="h1"
        className="text-light-primary dark:text-dark-primary"
      >
        {title}
      </ThemedText>
      <ThemedText className="mt-10">{desc}</ThemedText>
    </ThemedView>
  );
};

export default SlideItem;
