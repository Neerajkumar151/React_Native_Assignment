import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getTrainingStyles = (
  colors: ThemeColors,
  spacing: Spacing,
  radius: Radius,
  typography: Typography,
) =>
  StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: colors.background.main },
    scrollContent: { padding: spacing.xl, paddingBottom: 100 },
    mainTitle: {
      fontSize: 28,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.xxxl,
    },
    section: {
      marginBottom: spacing.xxxl,
      backgroundColor: colors.background.paper,
      padding: spacing.lg,
      borderRadius: radius.md,
    },
    sectionTitle: {
      fontSize: typography.size.lg,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
      marginBottom: spacing.lg,
    },
    subTitle: {
      color: colors.text.muted,
      marginBottom: spacing.xs,
      marginTop: spacing.md,
    },
    normalText: {
      color: colors.text.primary,
      fontSize: typography.size.md,
      marginVertical: 2,
    },
    whiteText: { color: colors.text.dark, fontWeight: typography.weight.bold },

    // For conditional styling example
    baseText: {
      fontSize: typography.size.md,
      textAlign: "center",
      padding: spacing.lg,
      borderRadius: radius.md,
      borderWidth: 1,
    },
    inactiveStyle: {
      color: colors.text.placeholder,
      borderColor: colors.border,
      backgroundColor: colors.transparent,
    },
    activeStyle: {
      color: colors.text.dark,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
    },

    // Layouts
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: spacing.md,
    },
    box: {
      width: 60,
      height: 60,
      borderRadius: radius.md,
      justifyContent: "center",
      alignItems: "center",
    },
    columnContainer: { flexDirection: "column", gap: spacing.md },
    boxColumn: { width: "100%", height: 40, borderRadius: radius.md },
    twoColumnGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    gridItem: {
      width: "48%",
      height: 60,
      backgroundColor: colors.status.errorDark,
      marginBottom: spacing.md,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: radius.md,
    },
    galleryImage: {
      width: 120,
      height: 120,
      borderRadius: radius.md,
      marginRight: spacing.lg,
    },
    listItem: {
      padding: spacing.lg,
      backgroundColor: colors.background.elevated,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    listItemText: {
      color: colors.text.primary,
      fontWeight: typography.weight.bold,
    },
    sectionHeader: {
      backgroundColor: colors.primary,
      padding: spacing.md,
      color: colors.text.dark,
      fontWeight: typography.weight.bold,
      fontSize: typography.size.md,
      marginTop: spacing.md,
    },
    alignCenterCol: {
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: colors.background.elevated,
      padding: spacing.md,
      borderRadius: radius.md,
      gap: spacing.md,
    },
    responsiveGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.md },
    responsiveImage: {
      height: 100,
      backgroundColor: colors.accents.cyan,
      borderRadius: radius.md,
    },
    tinyText: { color: colors.text.placeholder, fontSize: typography.size.xs },
  });
