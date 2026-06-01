import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';
import PlatformMessage from '../Components/PlatformMessage';
import DynamicList from '../Components/DynamicList';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

const TasksScreen = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#0F0F1A' : '#F2F2F7' }]}>
      <Header />
      <PlatformMessage />
      <DynamicList />
      {/* <Content title="My Dynamic Content Dashboard" /> */}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default TasksScreen;
