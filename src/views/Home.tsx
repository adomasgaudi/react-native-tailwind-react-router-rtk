import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

const Home = () => {
  const tw = useTailwind();
  return (
    <View>
      <Text style={tw("bg-red-400")}>bulseye</Text>
    </View>
  );
};

export default Home;
