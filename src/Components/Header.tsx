import React from "react";
import { StyleSheet, Text, View } from "react-native";
import en from "../constants/en.json";
import { getHeaderStyles } from "../Styles/LayoutStyles";
import { useTheme } from "../theme";

const Header = () => {
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getHeaderStyles(colors, spacing, typography);

  return (
    <View style={dynamicStyles.header}>
      <Text style={dynamicStyles.text}>{en.components.header.title}</Text>
    </View>
  );
};

export default Header;
