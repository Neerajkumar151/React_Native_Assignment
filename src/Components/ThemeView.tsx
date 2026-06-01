import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeColors } from "../theme/colors";
import { useTheme } from "../theme/useTheme";

const ThemeView = ({ children, style }: any) => {
  const insets = useSafeAreaInsets();
  const { colors, radius, spacing } = useTheme();
  const dynamicStyles = getStyles(colors, radius, spacing, insets);

  return <View style={[dynamicStyles.container, style]}>{children}</View>;
};

const getStyles = (
  colors: ThemeColors,
  radius: any,
  spacing: any,
  insets: any,
) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background.surface,
      marginTop: insets.top,
      marginHorizontal: spacing.md,
      marginBottom: insets.bottom,
      borderRadius: radius.md,
      padding: spacing.md,
    },
  });

export default ThemeView;
