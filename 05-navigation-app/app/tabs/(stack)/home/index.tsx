import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>
        <CustomButton
          size="xl"
          className="mb-3"
          color="secondary"
          onPress={() => router.push("/tabs/(stack)/profile")}
        >
          Profile
        </CustomButton>
        <CustomButton
          size="xl"
          className="mb-3"
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          Settings
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
