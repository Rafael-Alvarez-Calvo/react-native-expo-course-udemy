import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

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

        <CustomButton
          size="xl"
          className="mb-3"
          color="tertiary"
          onPress={onToggleDrawer}
        >
          Abrir menú
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
