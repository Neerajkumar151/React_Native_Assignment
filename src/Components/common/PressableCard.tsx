import React, { useMemo } from 'react';
import { Pressable, StyleSheet, PressableProps, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from '../../theme';
import { getCardStyles } from '../../Styles/CommonComponentsStyles';

export interface PressableCardProps extends Omit<PressableProps, 'style'> {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | ((state: { pressed: boolean; hovered?: boolean; focused?: boolean }) => StyleProp<ViewStyle>);
  variant?: 'elevated' | 'outlined' | 'flat';
}

const PressableCard: React.FC<PressableCardProps> = ({ children, style, variant = 'elevated', ...props }) => {
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
    <Pressable
      style={({ pressed, hovered, focused }: any) => [
        dynamicStyles.card,
        getVariantStyles(),
        typeof style === 'function' ? style({ pressed, hovered, focused }) : style,
        pressed && { backgroundColor: colors.primary + '40' }, // increased opacity for better visibility
        hovered && !pressed && { backgroundColor: colors.background.elevated },
        focused && { borderColor: colors.primary, borderWidth: 2 },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default PressableCard;
