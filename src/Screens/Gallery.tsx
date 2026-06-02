import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ThemeView from "../Components/ThemeView";
import en from "../constants/en.json";

const Gallery = () => {
  const navigation = useNavigation();
  return (
    <ThemeView>
      <Text>{en.gallery.title}</Text>
      <Button
        title="Gallery"
        onPress={() => {
          navigation.goBack() as any;
        }}
      />
    </ThemeView>
  );
};
export default Gallery;
