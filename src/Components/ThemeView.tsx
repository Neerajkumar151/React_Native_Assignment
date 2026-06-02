import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getThemeViewStyles } from "../Styles/LayoutStyles";
import { useTheme } from "../theme/useTheme";

const ThemeView = ({ children, style }: any) => {
  const insets = useSafeAreaInsets();
  const { colors, radius, spacing } = useTheme();
  const dynamicStyles = getThemeViewStyles(colors, radius, spacing, insets);

  return <View style={[dynamicStyles.container, style]}>{children}</View>;
};

export default ThemeView;
