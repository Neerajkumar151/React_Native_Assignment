import {
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import ThemeView from "../Components/ThemeView";
import { Ionicons } from "@expo/vector-icons";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";
import AppButton from "../Components/common/AppButton";

const Contact1 = () => {
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography);

  return (
    <ThemeView>
      <View style={dynamicStyles.container}>
        <Ionicons
          name="chatbubbles"
          size={32}
          color={colors.primary}
          style={dynamicStyles.icon}
        />
        <Text style={dynamicStyles.title}>{en.contact.title}</Text>
        <Text style={dynamicStyles.subtitle}>{en.contact.subtitle}</Text>

        <AppButton
          title={en.contact.submitButton}
          onPress={() =>
            Alert.alert(en.contact.alertTitle, en.contact.alertMessage)
          }
          style={dynamicStyles.platformButton}
        />
      </View>
    </ThemeView>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, typography: any) => StyleSheet.create({
  container: {
    padding: spacing.lg,
    alignItems: "center",
  },
  icon: {
    marginBottom: spacing.md,
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
  platformButton: {
    marginTop: spacing.xxl,
  },
});

export default Contact1;
