import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";
import AppButton from "./common/AppButton";

type ContentProps = {
  title: string;
};

const Content = ({ title }: ContentProps) => {
  const [count, setCount] = useState(0);
  
  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography, radius);

  const listItems = en.components.content.fruits;

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>{title}</Text>

      <View style={dynamicStyles.counterSection}>
        <Text style={dynamicStyles.countText}>
          {en.components.content.count} {count} -{" "}
          <Text style={dynamicStyles.highlight}>
            {count % 2 === 0 ? en.components.content.even : en.components.content.odd}
          </Text>
        </Text>
        <View style={dynamicStyles.buttonRow}>
          <AppButton
            title="-"
            size="sm"
            onPress={() => setCount(count - 1)}
          />
          <AppButton
            title="+"
            size="sm"
            onPress={() => setCount(count + 1)}
          />
        </View>
      </View>

      <ScrollView
        style={dynamicStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {listItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={dynamicStyles.listItem}
            activeOpacity={0.7}
          >
            <Text style={dynamicStyles.listText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, typography: any, radius: any) => StyleSheet.create({
  container: { 
    flex: 1, 
    padding: spacing.lg,
    backgroundColor: colors.background.surface,
  },
  title: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    marginBottom: spacing.xl,
    textAlign: "center",
    color: colors.text.primary,
  },
  counterSection: {
    alignItems: "center",
    marginBottom: spacing.xl,
    padding: spacing.xl,
    borderRadius: radius.lg,
    backgroundColor: colors.background.elevated,
  },
  countText: { 
    fontSize: typography.size.lg, 
    marginBottom: spacing.lg,
    color: colors.text.primary,
  },
  highlight: { color: colors.primary, fontWeight: typography.weight.bold },
  buttonRow: { flexDirection: "row", gap: spacing.xl },
  scrollView: { flex: 1, marginTop: spacing.sm },
  listItem: {
    padding: spacing.lg,
    marginBottom: spacing.sm,
    borderRadius: radius.md,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.paper,
  },
  listText: { 
    fontSize: typography.size.md, 
    fontWeight: typography.weight.medium,
    color: colors.text.primary,
  },
});

export default Content;
