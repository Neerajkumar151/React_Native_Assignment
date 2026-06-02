import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import en from '../constants/en.json';
import { getPlatformMessageStyles } from '../Styles/MiscComponentsStyles';
import { useTheme } from '../theme';

const PlatformMessage = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const dynamicStyles = getPlatformMessageStyles(colors, spacing, radius, typography);

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

export default PlatformMessage;
