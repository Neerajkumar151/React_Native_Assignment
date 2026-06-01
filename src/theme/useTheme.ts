import { useColorScheme } from 'react-native';
import { lightColors, darkColors, ThemeColors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { typography } from './typography';

export const useTheme = () => {
  const scheme = useColorScheme();
  const colors: ThemeColors = scheme === 'dark' ? darkColors : lightColors;

  return {
    colors,
    spacing,
    radius,
    typography,
    isDark: scheme === 'dark',
  };
};
