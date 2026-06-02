import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getContactStyles = (colors: ThemeColors, spacing: any, typography: any) =>
  StyleSheet.create({
    container: {
      padding: spacing.lg,
      alignItems: "center",
      flex: 1,
    },
    icon: {
      marginBottom: spacing.md,
    },
    title: {
      fontSize: typography.size.xxl,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
      textAlign: "center",
    },
    subtitle: {
      fontSize: typography.size.sm,
      color: colors.text.secondary,
      marginTop: spacing.sm,
      textAlign: "center",
    },
    platformButton: {
      marginTop: spacing.xxl,
    },
    listButton: {
      marginTop: spacing.md,
    },
  });
