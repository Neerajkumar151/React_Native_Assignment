import { View, Text } from "react-native";
import React from "react";
import en from "../constants/en.json";

const Contact = () => {
  return (
    <View>
      <Text>{en.contact.title}</Text>
    </View>
  );
};

export default Contact;
