import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemeView from "../Components/ThemeView";
import React from "react";
const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <ThemeView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Gallery");
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </ThemeView>
  );
};
export default Home;
