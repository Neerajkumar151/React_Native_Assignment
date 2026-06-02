import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getDynamicListStyles = (colors: ThemeColors, spacing: any, typography: any, radius: any) => StyleSheet.create({
  container: {
    backgroundColor: colors.background.surface,
    padding: spacing.lg,
    borderRadius: radius.lg,
    marginVertical: spacing.md,
    marginHorizontal: spacing.lg,
    flex: 1, 
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    marginBottom: spacing.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background.elevated,
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
  },
  taskText: {
    color: colors.text.primary,
    fontSize: typography.size.md,
    flex: 1,
  },
  emptyText: {
    color: colors.text.muted,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: spacing.xl,
  }
});

export const getPlatformMessageStyles = (colors: ThemeColors, spacing: any, radius: any, typography: any) => StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  text: {
    color: colors.text.dark, // Keep white on colored background
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  }
});

export const getUserCardStyles = (colors: ThemeColors, spacing: any, typography: any) => StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  name: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  email: {
    fontSize: typography.size.sm,
    color: colors.text.muted,
  },
});
