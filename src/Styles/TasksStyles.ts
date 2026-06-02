import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

export const getTasksStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.main,
  }
});
