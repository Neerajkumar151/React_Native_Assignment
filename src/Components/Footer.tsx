import React from "react";
import { View, Text, StyleSheet } from "react-native";
import en from "../constants/en.json";
import { getFooterStyles } from "../Styles/LayoutStyles";
import { useTheme } from "../theme";

const Footer = () => {
  const { colors, spacing } = useTheme();
  const dynamicStyles = getFooterStyles(colors, spacing);

  return (
    <View style={dynamicStyles.footer}>
      <Text style={dynamicStyles.text}>{en.components.footer.title}</Text>
    </View>
  );
};

export default Footer;
