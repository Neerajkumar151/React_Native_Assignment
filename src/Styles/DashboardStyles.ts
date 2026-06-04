import { Spacing } from "../theme/spacing";
import { Radius } from "../theme/radius";
import { Typography } from "../theme/typography";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getDashboardStyles = (
  colors: ThemeColors,
  spacing: Spacing,
  radius: Radius,
  typography: Typography,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.main,
    },
    scrollContent: {
      padding: spacing.xl,
      paddingBottom: 120, // Extra padding for the floating tab bar
    },

    // Header
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.xl,
      marginTop: spacing.md,
    },
    profileSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
    },
    avatarPlaceholder: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.background.elevated,
      borderWidth: 1,
      borderColor: colors.border,
    },
    profileInfo: {},
    nameRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    nameText: {
      fontSize: typography.size.lg,
      fontWeight: typography.weight.bold,
      color: colors.text.primary,
    },
    badge: {
      backgroundColor: colors.status.warningDark,
      paddingHorizontal: spacing.sm,
      paddingVertical: 2,
      borderRadius: radius.sm,
    },
    badgeText: {
      color: colors.status.warning,
      fontSize: typography.size.xs,
      fontWeight: typography.weight.medium,
    },
    idRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
      marginTop: 2,
    },
    idTextPrefix: {
      color: colors.text.muted,
      fontSize: typography.size.sm,
    },
    idTextValue: {
      color: colors.text.primary,
      fontSize: typography.size.sm,
    },
    settingsBtn: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.background.elevated,
      justifyContent: "center",
      alignItems: "center",
    },

    // Wallet Card
    walletCard: {
      backgroundColor: colors.accents.purple,
      borderRadius: radius.xl,
      padding: spacing.xl,
      marginBottom: spacing.md,
      shadowColor: colors.accents.purple,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 10,
    },
    walletHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    walletIdText: {
      color: colors.text.secondary,
      fontSize: typography.size.sm,
    },
    currencyDropdown: {
      flexDirection: "row",
      alignItems: "center",
    },
    currencyText: {
      color: colors.text.secondary,
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
    },
    balanceRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      marginBottom: spacing.xl,
    },
    balanceText: {
      color: colors.text.primary,
      fontSize: 48,
      fontWeight: typography.weight.bold,
    },
    walletFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    statsCol: {},
    last24Text: {
      color: colors.text.secondary,
      fontSize: typography.size.sm,
      marginBottom: 4,
    },
    growthRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    growthText: {
      color: colors.status.success,
      fontSize: typography.size.md,
      fontWeight: typography.weight.bold,
    },
    withdrawBtn: {
      backgroundColor: colors.background.dark,
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.md,
      borderRadius: 20, // Pill shape
    },
    withdrawText: {
      color: colors.text.secondary,
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
    },

    // Pagination Dots
    paginationRow: {
      flexDirection: "row",
      justifyContent: "center",
      gap: spacing.sm,
      marginBottom: spacing.xl,
    },
    dotActive: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.text.primary,
    },
    dotInactive: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.text.muted,
    },

    // Sections
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.lg,
      marginTop: spacing.md,
    },
    sectionTitle: {
      color: colors.text.primary,
      fontSize: 22,
      fontWeight: typography.weight.medium,
    },
    sectionLink: {
      color: colors.primary,
      fontSize: typography.size.sm,
    },

    // Quick Access
    quickAccessRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: spacing.xl,
    },
    quickAccessItem: {
      alignItems: "center",
      gap: spacing.sm,
    },
    quickAccessIconBox: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.background.elevated,
      justifyContent: "center",
      alignItems: "center",
    },
    quickAccessText: {
      color: colors.text.secondary,
      fontSize: 11,
      textAlign: "center",
    },

    // Accounts
    noActiveBox: {
      borderWidth: 1,
      borderColor: colors.border,
      borderStyle: "dashed",
      borderRadius: radius.md,
      padding: spacing.xl,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: spacing.lg,
    },
    noActiveTitle: {
      color: colors.text.primary,
      fontSize: typography.size.md,
      fontWeight: typography.weight.medium,
      marginBottom: 4,
    },
    noActiveSub: {
      color: colors.text.muted,
      fontSize: typography.size.sm,
    },
    accountCardsRow: {
      flexDirection: "row",
      gap: spacing.md,
      marginBottom: spacing.xl,
    },
    accountCard: {
      flex: 1,
      backgroundColor: colors.background.elevated,
      borderRadius: 15,
      padding: spacing.md,
      paddingTop: spacing.lg,
      minHeight: 117,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    cardTag: {
      color: colors.text.muted,
      fontSize: 11,
      fontWeight: "500",
      marginBottom: 6,
      zIndex: 2,
    },
    cardTitle: {
      color: colors.text.primary,
      fontSize: 18,
      lineHeight: 20,
      marginBottom: 6,
      maxWidth: "80%",
      zIndex: 2,
    },
    cardTitleFirstPart: {
      fontWeight: "400",
    },
    cardTitleSecondPart: {
      fontWeight: "700",
    },
    cardSub: {
      color: colors.text.secondary,
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 12,
      zIndex: 2,
    },
    cardIconContainer: {
      position: "absolute",
      right: 10,
      top: -5,
      zIndex: 1,
    },
  });
