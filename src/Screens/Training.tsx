import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputsSection from "../Components/Training/InputsSection";
import ButtonsSection from "../Components/Training/ButtonsSection";
import LayoutSection from "../Components/Training/LayoutSection";
import ListsSection from "../Components/Training/ListsSection";
import { getTrainingStyles } from "../Styles/TrainingStyles";
import en from "../constants/en.json";
import { useTheme } from "../theme";

const Training = ({ navigation }: { navigation: any }) => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getTrainingStyles(colors, spacing, radius, typography);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>{en.training.title}</Text>
        <InputsSection />
        <ButtonsSection />
        <LayoutSection navigation={navigation} />
        <ListsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Training;
