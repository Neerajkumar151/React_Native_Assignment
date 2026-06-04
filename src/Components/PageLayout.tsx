import React, { useMemo } from 'react';
import { View } from 'react-native';
import { getPageLayoutStyles } from '../Styles/LayoutStyles';
import { useTheme } from '../theme';

type PageLayoutProps = {
  headerSlot?: React.ReactNode;
  bodySlot: React.ReactNode;
  footerSlot?: React.ReactNode;
};

const PageLayout = ({ headerSlot, bodySlot, footerSlot }: PageLayoutProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => getPageLayoutStyles(colors), [colors]);
  
  return (
    <View style={styles.container}>
      {headerSlot && <View style={styles.headerContainer}>{headerSlot}</View>}
      <View style={styles.bodyContainer}>{bodySlot}</View>
      {footerSlot && <View style={styles.footerContainer}>{footerSlot}</View>}
    </View>
  );
};

export default PageLayout;
