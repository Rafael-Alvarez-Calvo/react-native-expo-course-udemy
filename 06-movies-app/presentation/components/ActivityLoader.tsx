import { View, ActivityIndicator } from "react-native";
import React from "react";

const ActivityLoader = () => {
  return (
    <View className="justify-center items-center flex-1">
      <ActivityIndicator color="purple" size={60} />
    </View>
  );
};

export default ActivityLoader;
