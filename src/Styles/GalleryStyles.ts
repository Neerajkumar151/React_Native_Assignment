import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getGalleryStyles = (colors: ThemeColors, spacing: Spacing, typography: Typography, radius: Radius) =>
  StyleSheet.create({
    container: {
      padding: spacing.lg,
      alignItems: "center",
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
    infoText: {
      color: colors.text.primary,
      fontSize: typography.size.md,
      marginBottom: spacing.xs,
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: radius.md,
    },
    submitButton: {
      marginTop: spacing.md,
    },
  });
