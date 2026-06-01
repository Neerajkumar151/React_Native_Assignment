import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";

const FlexLayout = () => {
  const navigation = useNavigation();
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography);

  return (
    <SafeAreaView style={dynamicStyles.safeArea}>
      <View style={dynamicStyles.container}>
        {/* Header - Fixed Height */}
        <View style={dynamicStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={dynamicStyles.backButton}>
            <Text style={dynamicStyles.backText}>{en.flexLayout.back}</Text>
          </TouchableOpacity>
          <Text style={dynamicStyles.headerText}>{en.flexLayout.header}</Text>
          <View style={dynamicStyles.placeholder} />
        </View>

        {/* Content - flex: 1 (Fills remaining space) */}
        <View style={dynamicStyles.content}>
          <Text style={dynamicStyles.contentText}>{en.flexLayout.content1}</Text>
          <Text style={dynamicStyles.contentText}>{en.flexLayout.content2}</Text>
        </View>

        {/* Footer - Fixed Height */}
        <View style={dynamicStyles.footer}>
          <Text style={dynamicStyles.footerText}>{en.flexLayout.footer}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlexLayout;

const getStyles = (colors: ThemeColors, spacing: any, typography: any) => StyleSheet.create({
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
    backgroundColor: colors.background.elevated, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: spacing.xl
  },
  contentText: { color: colors.text.primary, fontSize: typography.size.md, textAlign: "center", marginBottom: spacing.lg, lineHeight: 24 },

  footer: { 
    height: 80, 
    backgroundColor: colors.accents.cyan, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  footerText: { color: colors.text.dark, fontSize: typography.size.lg, fontWeight: typography.weight.bold },
});
