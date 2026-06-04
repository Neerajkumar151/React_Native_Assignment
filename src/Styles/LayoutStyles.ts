import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getHeaderStyles = (colors: ThemeColors, spacing: Spacing, typography: Typography) => StyleSheet.create({
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

export const getFooterStyles = (colors: ThemeColors, spacing: Spacing) => StyleSheet.create({
  footer: {
    padding: spacing.lg,
    paddingBottom: 90,
    backgroundColor: colors.background.dark,
    alignItems: "center",
  },
  text: { color: colors.text.muted },
});

export const getThemeViewStyles = (colors: ThemeColors, radius: Radius, spacing: Spacing, insets: any) => StyleSheet.create({
  container: {
    backgroundColor: colors.background.surface,
    marginTop: insets.top,
    marginHorizontal: spacing.md,
    marginBottom: insets.bottom,
    borderRadius: radius.md,
    padding: spacing.md,
  },
});

export const getPageLayoutStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.main,
  },
  headerContainer: {
    zIndex: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bodyContainer: {
    flex: 1,
  },
  footerContainer: {
    paddingBottom: 20,
  }
});

export const getContentStyles = (colors: ThemeColors, spacing: Spacing, typography: Typography, radius: Radius) => StyleSheet.create({
  container: { 
    flex: 1, 
    padding: spacing.lg,
    backgroundColor: colors.background.surface,
  },
  title: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    marginBottom: spacing.xl,
    textAlign: "center",
    color: colors.text.primary,
  },
  counterSection: {
    alignItems: "center",
    marginBottom: spacing.xl,
    padding: spacing.xl,
    borderRadius: radius.lg,
    backgroundColor: colors.background.elevated,
  },
  countText: { 
    fontSize: typography.size.lg, 
    marginBottom: spacing.lg,
    color: colors.text.primary,
  },
  highlight: { color: colors.primary, fontWeight: typography.weight.bold },
  buttonRow: { flexDirection: "row", gap: spacing.xl },
  scrollView: { flex: 1, marginTop: spacing.sm },
  listItem: {
    padding: spacing.lg,
    marginBottom: spacing.sm,
    borderRadius: radius.md,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.paper,
  },
  listText: { 
    fontSize: typography.size.md, 
    fontWeight: typography.weight.medium,
    color: colors.text.primary,
  },
});
