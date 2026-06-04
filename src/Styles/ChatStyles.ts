import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getChatStyles = (colors: ThemeColors, spacing: Spacing, typography: Typography, radius: Radius) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.main,
    },
    header: {
      padding: spacing.lg,
      paddingTop: spacing.xxl,
      backgroundColor: colors.primary,
      alignItems: "center",
    },
    headerTitle: {
      color: colors.text.dark,
      fontSize: typography.size.xl,
      fontWeight: typography.weight.bold,
    },
    listContent: {
      padding: spacing.md,
      paddingBottom: 80,
    },
    messageWrapper: {
      marginVertical: spacing.xs,
      padding: spacing.md,
      backgroundColor: colors.background.elevated,
      borderRadius: radius.md,
      alignSelf: "flex-start",
      maxWidth: "80%",
    },
    senderWrapper: {
      backgroundColor: colors.primary,
      alignSelf: "flex-end",
    },
    messageText: {
      fontSize: typography.size.md,
      color: colors.text.primary,
    },
    senderText: {
      color: colors.text.dark,
    },
    timestamp: {
      fontSize: typography.size.xs,
      color: colors.text.muted,
      marginTop: spacing.xs,
      alignSelf: "flex-end",
    },
    senderTimestamp: {
      color: colors.text.dark,
      opacity: 0.8,
    },
    inputContainer: {
      flexDirection: "row",
      padding: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.background.surface,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.border,
      padding: spacing.md,
      marginRight: spacing.md,
      borderRadius: radius.md,
      color: colors.text.primary,
    },
    button: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.lg,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: radius.md,
    },
    buttonText: {
      color: colors.text.dark,
      fontWeight: typography.weight.bold,
    },
  });
