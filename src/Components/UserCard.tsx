import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';
import { ThemeColors } from '../theme/colors';
import Card from './common/Card';

type UserCardProps = {
  name: string;
  email: string;
};

const UserCard = ({ name, email }: UserCardProps) => {
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography);

  return (
    <Card variant="elevated" style={dynamicStyles.card}>
      <Text style={dynamicStyles.name}>{name}</Text>
      <Text style={dynamicStyles.email}>{email}</Text>
    </Card>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, typography: any) => StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  name: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  email: {
    fontSize: typography.size.sm,
    color: colors.text.muted,
  },
});

export default UserCard;
