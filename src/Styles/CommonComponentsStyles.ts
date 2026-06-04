import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getAppButtonStyles = (radius: Radius, typography: Typography) => StyleSheet.create({
  base: {
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
    textAlign: 'center',
  },
});

export const getAppInputStyles = (colors: ThemeColors, spacing: Spacing, radius: Radius, typography: Typography) => StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    width: "100%",
  },
  label: {
    marginBottom: spacing.xs,
    fontSize: typography.size.sm,
    color: colors.text.secondary,
    fontWeight: typography.weight.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    backgroundColor: colors.background.surface,
    color: colors.text.primary,
    fontSize: typography.size.md,
  },
  inputError: {
    borderColor: colors.status.error,
    backgroundColor: colors.status.errorLight + '10', // 10% opacity light red
  },
  errorText: {
    color: colors.status.error,
    fontSize: typography.size.sm,
    marginTop: spacing.xs,
  },
});

export const getCardStyles = (colors: ThemeColors, spacing: Spacing, radius: Radius) => StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderRadius: radius.lg,
    marginVertical: spacing.sm,
    width: '100%',
  },
});

export const getKeyboardAvoidingStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
});
