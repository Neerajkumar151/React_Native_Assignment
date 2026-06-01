import React from 'react';
import { View, StyleSheet } from 'react-native';

type PageLayoutProps = {
  headerSlot?: React.ReactNode;
  bodySlot: React.ReactNode;
  footerSlot?: React.ReactNode;
};

const PageLayout = ({ headerSlot, bodySlot, footerSlot }: PageLayoutProps) => {
  return (
    <View style={styles.container}>
      {headerSlot && <View style={styles.headerContainer}>{headerSlot}</View>}
      <View style={styles.bodyContainer}>{bodySlot}</View>
      {footerSlot && <View style={styles.footerContainer}>{footerSlot}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },
  headerContainer: {
    zIndex: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bodyContainer: {
    flex: 1,
  },
  footerContainer: {
    paddingBottom: 20,
  }
});

export default PageLayout;
