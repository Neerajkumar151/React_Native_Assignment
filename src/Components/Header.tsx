import React from "react";
import { StyleSheet, Text, View } from "react-native";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";

const Header = () => {
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography);

  return (
    <View style={dynamicStyles.header}>
      <Text style={dynamicStyles.text}>{en.components.header.title}</Text>
    </View>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, typography: any) => StyleSheet.create({
  header: {
    padding: spacing.xl,
    backgroundColor: colors.secondary,
    alignItems: "center",
  },
  text: {
    fontSize: typography.size.xl,
    color: colors.text.dark, // Keep white on colored header
    fontWeight: typography.weight.bold,
  },
});

export default Header;
