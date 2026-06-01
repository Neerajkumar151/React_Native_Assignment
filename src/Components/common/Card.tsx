import React from 'react';
import { View, StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { ThemeColors } from '../../theme/colors';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'flat';
}

const Card: React.FC<CardProps> = ({ children, style, variant = 'elevated', ...props }) => {
  const { colors, spacing, radius } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, radius);

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: colors.background.surface,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        };
      case 'outlined':
        return {
          backgroundColor: colors.background.paper,
          borderWidth: 1,
          borderColor: colors.border,
        };
      case 'flat':
        return {
          backgroundColor: colors.background.surface,
        };
      default:
        return {};
    }
  };

  return (
    <View style={[dynamicStyles.card, getVariantStyles(), style]} {...props}>
      {children}
    </View>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, radius: any) => StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderRadius: radius.lg,
    marginVertical: spacing.sm,
    width: '100%',
  },
});

export default Card;
