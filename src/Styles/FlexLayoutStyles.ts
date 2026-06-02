import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getFlexLayoutStyles = (colors: ThemeColors, spacing: any, typography: any) => StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background.paper },
  container: { flex: 1 },
  
  header: { 
    height: 80, 
    backgroundColor: colors.accents.purple, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: spacing.xl
  },
  backButton: { padding: spacing.md },
  backText: { color: colors.text.dark, fontWeight: typography.weight.bold, fontSize: typography.size.md },
  headerText: { color: colors.text.dark, fontSize: typography.size.xl, fontWeight: typography.weight.bold },
  placeholder: { width: 50 },

  content: { 
    flex: 1, 
  },
  column: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnTitle: {
    color: colors.primary,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    marginBottom: spacing.md,
  },
  contentText: { 
    color: colors.text.primary, 
    fontSize: typography.size.md, 
    textAlign: "center", 
    lineHeight: 24 
  },

  footer: { 
    height: 80, 
    backgroundColor: colors.accents.cyan, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  footerText: { color: colors.text.dark, fontSize: typography.size.lg, fontWeight: typography.weight.bold },
});
