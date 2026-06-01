import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import en from '../constants/en.json';
import { useTheme } from '../theme';
import { ThemeColors } from '../theme/colors';

const PlatformMessage = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, radius, typography);

  const message = Platform.select({
    ios: en.components.platformMessage.ios,
    android: en.components.platformMessage.android,
    default: en.components.platformMessage.web,
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.text}>{message}</Text>
    </View>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, radius: any, typography: any) => StyleSheet.create({
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

export default PlatformMessage;
