import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getShoppingCartStyles = (
  colors: ThemeColors,
  spacing: Spacing,
  typography: Typography,
  radius: Radius
) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background.main,
    },
    container: {
      flex: 1,
      padding: spacing.lg,
    },
    title: {
      fontSize: typography.size.xxl,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
      marginBottom: spacing.lg,
    },
    listContent: {
      paddingBottom: spacing.xl,
    },
    card: {
      marginBottom: spacing.md,
      padding: spacing.lg,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    itemName: {
      fontSize: typography.size.lg,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
      flex: 1,
    },
    itemPrice: {
      fontSize: typography.size.lg,
      fontWeight: typography.weight.medium,
      color: colors.primary,
    },
    cardFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemQuantity: {
      fontSize: typography.size.md,
      color: colors.text.secondary,
    },
    emptyText: {
      fontSize: typography.size.lg,
      color: colors.text.muted,
      textAlign: "center",
      marginTop: spacing.xxl,
      fontStyle: "italic",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.lg,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: spacing.md,
    },
    totalText: {
      fontSize: typography.size.xl,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
    },
    totalAmount: {
      fontSize: typography.size.xxl,
      fontWeight: typography.weight.bold,
      color: colors.primary,
    },
    checkoutContainer: {
      paddingBottom: spacing.md,
    },
  });
