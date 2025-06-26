import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        {/* <Link href="/products" asChild>
          <CustomButton
            size="xl"
            className="mb-10"
            onPress={() => router.push("/products")}
          >
            Productos
          </CustomButton>
        </Link> */}

        <CustomButton
          size="xl"
          className="mb-3"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>
        <CustomButton
          size="xl"
          className="mb-3"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>
        <CustomButton
          size="xl"
          className="mb-3"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
