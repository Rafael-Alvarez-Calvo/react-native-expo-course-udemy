import { Stack } from "expo-router";
import React from "react";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-normal"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modal-contained"
        options={{
          presentation: "containedModal",
        }}
      />
      <Stack.Screen
        name="modal-fullScreen"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="modal-transparent"
        options={{
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="modal-containedTransparent"
        options={{
          presentation: "containedTransparentModal",
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
