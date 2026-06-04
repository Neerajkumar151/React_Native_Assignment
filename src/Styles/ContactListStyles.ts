import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getContactListStyles = (colors: ThemeColors, spacing: Spacing, typography: Typography) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.main,
    },
    header: {
      padding: spacing.md,
      paddingTop: spacing.xxl,
      backgroundColor: colors.primary,
      alignItems: "center",
      flexDirection: "row",
    },
    backButton: {
      marginRight: spacing.md,
    },
    headerTitle: {
      color: colors.text.dark,
      fontSize: typography.size.xl,
      fontWeight: typography.weight.bold,
    },
    sectionHeader: {
      backgroundColor: colors.background.paper,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    sectionHeaderText: {
      fontSize: typography.size.md,
      fontWeight: typography.weight.bold,
      color: colors.primary,
    },
    itemContainer: {
      padding: spacing.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
      backgroundColor: colors.background.main,
    },
    itemName: {
      fontSize: typography.size.md,
      color: colors.text.primary,
      fontWeight: typography.weight.medium,
    },
    itemEmail: {
      fontSize: typography.size.sm,
      color: colors.text.secondary,
      marginTop: 2,
    },
  });
