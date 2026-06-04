import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getHomeStyles = (colors: ThemeColors, spacing: Spacing, typography: Typography, radius: Radius) => StyleSheet.create({
  container: {
    padding: spacing.sm,
    alignItems: "center",
  },
  icon: {
    marginBottom: spacing.sm,
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
  imageWrapper: {
    marginTop: spacing.xl,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholder: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: radius.xl,
    backgroundColor: colors.background.paper,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: radius.xl,
  },
  cardContainer: {
    width: "100%",
    marginTop: spacing.xl,
  },
  counterContainer: {
    marginTop: spacing.xl,
    alignItems: "center",
  },
  counterText: {
    color: colors.text.primary,
    fontSize: typography.size.lg,
    marginBottom: spacing.sm,
  },
  listContainer: {
    marginTop: spacing.xxl,
    width: "100%",
    paddingHorizontal: spacing.xl,
  },
  emptyText: {
    color: colors.status.error,
    fontSize: typography.size.md,
    textAlign: "center",
    fontStyle: "italic",
  },
  listItem: {
    color: colors.text.primary,
    fontSize: typography.size.md,
    marginVertical: spacing.xs,
  },
  button: {
    marginTop: spacing.xl,
  },
});
