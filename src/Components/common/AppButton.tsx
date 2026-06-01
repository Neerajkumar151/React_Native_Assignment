import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../../theme';
import { ThemeColors } from '../../theme/colors';

export interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...props
}) => {
  const { colors, spacing, radius, typography } = useTheme();
  
  const getBackgroundColor = () => {
    if (disabled) return colors.background.elevated;
    switch (variant) {
      case 'primary': return colors.primary;
      case 'secondary': return colors.secondary;
      case 'danger': return colors.status.error;
      case 'outline': return colors.transparent;
      case 'ghost': return colors.transparent;
      default: return colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return colors.text.muted;
    switch (variant) {
      case 'outline': return colors.primary;
      case 'ghost': return colors.primary;
      case 'secondary': return colors.text.dark; // Ensuring contrast
      default: return colors.text.dark;
    }
  };

  const getBorder = () => {
    if (variant === 'outline') {
      return {
        borderWidth: 1,
        borderColor: disabled ? colors.border : colors.primary,
      };
    }
    return {};
  };

  const getPadding = () => {
    switch (size) {
      case 'sm': return { paddingVertical: spacing.sm, paddingHorizontal: spacing.md };
      case 'md': return { paddingVertical: spacing.md, paddingHorizontal: spacing.lg };
      case 'lg': return { paddingVertical: spacing.lg, paddingHorizontal: spacing.xl };
      default: return { paddingVertical: spacing.md, paddingHorizontal: spacing.lg };
    }
  };

  const dynamicStyles = getStyles(radius, typography);

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        dynamicStyles.base,
        { backgroundColor: getBackgroundColor() },
        getBorder(),
        getPadding(),
        style,
      ]}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[dynamicStyles.text, { color: getTextColor() }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const getStyles = (radius: any, typography: any) => StyleSheet.create({
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

export default AppButton;
