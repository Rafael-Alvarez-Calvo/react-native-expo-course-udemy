import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href="/(stack)/home" />
    // <SafeAreaView>
    //   <View className="mt-6 mx-2.5">
    //     <Text style={{ fontFamily: "WorkSans-Black" }} className="text-3xl ">
    //       Hola mundo native wind
    //     </Text>
    //     <Text className="text-3xl font-work-black text-primary">
    //       Hola mundo native wind
    //     </Text>
    //     <Text className="text-3xl font-work-light text-secondary-100">
    //       Hola mundo native wind
    //     </Text>

    //     <Link href="/products">Productos</Link>
    //   </View>
    // </SafeAreaView>
  );
};

export default index;
