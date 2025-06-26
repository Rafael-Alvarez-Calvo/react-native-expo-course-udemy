import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product: IProduct | undefined = products.find((p) => p.id === id);

  useLayoutEffect(() => {
    if (product) {
      navigation.setOptions({
        headerTitle: () => (
          <Text
            style={{
              fontSize: 18,
              lineHeight: 28,
              fontFamily: "WorkSans-Black",
            }}
          >
            {product.title}
          </Text>
        ),
      });
    }
  }, [navigation, product]);

  if (!product) {
    return <Redirect href="/products" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="text-xl font-work-black">{product.title}</Text>
      <Text className="text-gray-600 mt-2 font-work-medium">
        {product.description}
      </Text>
      <Text className="text-green-500 mt-2 text-xl font-work-black">
        ${product.price.toFixed(2)}
      </Text>
    </View>
  );
};
export default ProductScreen;
