import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';
import { getUserCardStyles } from '../Styles/MiscComponentsStyles';
import Card from './common/Card';

type UserCardProps = {
  name: string;
  email: string;
};

const UserCard = ({ name, email }: UserCardProps) => {
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getUserCardStyles(colors, spacing, typography);

  return (
    <Card variant="elevated" style={dynamicStyles.card}>
      <Text style={dynamicStyles.name}>{name}</Text>
      <Text style={dynamicStyles.email}>{email}</Text>
    </Card>
  );
};

export default UserCard;
