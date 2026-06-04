import React, { useMemo } from 'react';
import { View, StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { getCardStyles } from '../../Styles/CommonComponentsStyles';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'flat';
}

const Card: React.FC<CardProps> = ({ children, style, variant = 'elevated', ...props }) => {
  const { colors, radius, spacing } = useTheme();
  const dynamicStyles = useMemo(() => getCardStyles(colors, spacing, radius), [colors, spacing, radius]);

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

export default Card;
