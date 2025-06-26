import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link } from "expo-router";

const ProductScreen = () => {
  return (
    <View className="flex flex-1 px-5 mt-3">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={`/(stack)/products/${item.id}`}
            className="p-4 border-b border-gray-200 bg-blue-200 rounded-xl mb-4"
          >
            <View>
              <Text className="text-xl font-work-black">{item.title}</Text>
              <Text className="text-gray-600 mt-2 font-work-medium">
                {item.description}
              </Text>
              <Text className="text-green-500 mt-2 text-xl font-work-black">
                ${item.price.toFixed(2)}
              </Text>
            </View>
          </Link>
        )}
      />
    </View>
  );
};

export default ProductScreen;
