import { useThemeColor } from "@/hooks/useThemeColor";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const InfiniteScrollScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView margin>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <ThemedText type="h2" className="text-center mb-4">
            Infinite Scroll Screen
          </ThemedText>
        )}
        ListFooterComponent={() => (
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemsProps {
  number: number;
}

const ListItem = ({ number }: ListItemsProps) => {
  return (
    <FadeInImage
      url={`https://picsum.photos/id/${number}/500/400`}
      style={{
        width: "100%",
        height: 400,
        marginBottom: 12,
        borderColor: "purple",
        borderWidth: 4,
        borderRadius: 8,
      }}
    />
  );
};
