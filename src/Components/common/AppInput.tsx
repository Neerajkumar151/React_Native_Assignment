import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { ThemeColors } from '../../theme/colors';

export interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  containerStyle,
  style,
  ...props
}) => {
  const { colors, spacing, radius, typography } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, radius, typography);

  return (
    <View style={[dynamicStyles.container, containerStyle]}>
      {label && <Text style={dynamicStyles.label}>{label}</Text>}
      <TextInput
        style={[
          dynamicStyles.input,
          error ? dynamicStyles.inputError : null,
          style,
        ]}
        placeholderTextColor={colors.text.placeholder}
        {...props}
      />
      {error ? <Text style={dynamicStyles.errorText}>{error}</Text> : null}
    </View>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, radius: any, typography: any) => StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    width: '100%',
  },
  label: {
    color: colors.text.secondary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.background.elevated,
    color: colors.text.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: typography.size.md,
  },
  inputError: {
    borderColor: colors.status.error,
    backgroundColor: colors.status.error + '1A', // 10% opacity
  },
  errorText: {
    color: colors.status.error,
    fontSize: typography.size.xs,
    marginTop: spacing.xs,
  },
});

export default AppInput;
