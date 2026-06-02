import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';
import PlatformMessage from '../Components/PlatformMessage';
import DynamicList from '../Components/DynamicList';
import AppKeyboardAvoidingView from '../Components/common/AppKeyboardAvoidingView';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import { useTheme } from '../theme';
import { getTasksStyles } from '../Styles/TasksStyles';

const TasksScreen = () => {
  const { colors } = useTheme();
  const styles = getTasksStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <AppKeyboardAvoidingView style={{ flex: 1 }} isTabScreen={false}>
        <Header />
        <PlatformMessage />
        <DynamicList />
        {/* <Content title="My Dynamic Content Dashboard" /> */}
        <Footer />
      </AppKeyboardAvoidingView>
    </SafeAreaView>
  );
};



export default TasksScreen;
