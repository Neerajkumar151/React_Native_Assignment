import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getDashboardStyles = (
  colors: ThemeColors,
  spacing: any,
  radius: any,
  typography: any,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0F0F1A", // Enforce dark background based on Figma design
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
      color: "#FFFFFF",
    },
    badge: {
      backgroundColor: "#1F1400", // Darkish yellow/brown background for badge
      paddingHorizontal: spacing.sm,
      paddingVertical: 2,
      borderRadius: radius.sm,
    },
    badgeText: {
      color: "#F7DA62", // Amber/yellow color
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
      color: "#9CA3AF", // Gray
      fontSize: typography.size.sm,
    },
    idTextValue: {
      color: "#FFFFFF",
      fontSize: typography.size.sm,
    },
    settingsBtn: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#1F1F2E",
      justifyContent: "center",
      alignItems: "center",
    },

    // Wallet Card
    walletCard: {
      backgroundColor: "#8b5bdfff", // Base purple color, real implementation should use a gradient component
      borderRadius: radius.xl,
      padding: spacing.xl,
      marginBottom: spacing.md,
      // Add glowing shadow
      shadowColor: "#7C3AED",
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
      color: "#FFFFFFD9",
      fontSize: typography.size.sm,
    },
    currencyDropdown: {
      flexDirection: "row",
      alignItems: "center",
    },
    currencyText: {
      color: "#FFFFFFD9",
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
      color: "#FFFFFF",
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
      color: "rgba(255, 255, 255, 0.7)",
      fontSize: typography.size.sm,
      marginBottom: 4,
    },
    growthRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    growthText: {
      color: "#44EC60", // Emerald green
      fontSize: typography.size.md,
      fontWeight: typography.weight.bold,
    },
    withdrawBtn: {
      backgroundColor: "#000000",
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.md,
      borderRadius: 20, // Pill shape
    },
    withdrawText: {
      color: "#FFFFFFD9",
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
      backgroundColor: "#FFFFFF",
    },
    dotInactive: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "#4B5563",
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
      color: "#FFFFFF",
      fontSize: 22,
      fontWeight: typography.weight.medium,
    },
    sectionLink: {
      color: "#9070D1", // Lighter purple
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
      backgroundColor: "#1A1A24",
      justifyContent: "center",
      alignItems: "center",
    },
    quickAccessText: {
      color: "#E5E7EB",
      fontSize: 11,
      textAlign: "center",
    },

    // Accounts
    noActiveBox: {
      borderWidth: 1,
      borderColor: "#374151", // Gray border
      borderStyle: "dashed",
      borderRadius: radius.md,
      padding: spacing.xl,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: spacing.lg,
    },
    noActiveTitle: {
      color: "#FFFFFF",
      fontSize: typography.size.md,
      fontWeight: typography.weight.medium,
      marginBottom: 4,
    },
    noActiveSub: {
      color: "#9CA3AF",
      fontSize: typography.size.sm,
    },
    accountCardsRow: {
      flexDirection: "row",
      gap: spacing.md,
      marginBottom: spacing.xl,
    },
    accountCard: {
      flex: 1,
      backgroundColor: "#1A1A24",
      borderRadius: 15,
      padding: spacing.md,
      paddingTop: spacing.lg,
      minHeight: 117,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    cardTag: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 11,
      fontWeight: "500",
      marginBottom: 6,
      zIndex: 2,
    },
    cardTitle: {
      color: "#EAE0FF",
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
      color: "rgba(255, 255, 255, 0.65)",
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
