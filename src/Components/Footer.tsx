import React from "react";
import { View, Text, StyleSheet } from "react-native";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";

const Footer = () => {
  const { colors, spacing } = useTheme();
  const dynamicStyles = getStyles(colors, spacing);

  return (
    <View style={dynamicStyles.footer}>
      <Text style={dynamicStyles.text}>{en.components.footer.title}</Text>
    </View>
  );
};

const getStyles = (colors: ThemeColors, spacing: any) => StyleSheet.create({
  footer: {
    padding: spacing.lg,
    paddingBottom: 90,
    backgroundColor: colors.background.dark,
    alignItems: "center",
  },
  text: { color: colors.text.muted },
});

export default Footer;
