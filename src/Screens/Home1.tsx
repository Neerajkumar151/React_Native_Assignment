import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ThemeView from "../Components/ThemeView";
import UserCard from "../Components/UserCard";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";
import AppButton from "../Components/common/AppButton";

const Home1 = () => {
  const [count, setCount] = useState(0);
  const items = en.home.items;

  const navigator = useNavigation<any>();
  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography, radius);

  return (
    <ThemeView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={dynamicStyles.container}>
          <Ionicons
            name="sparkles"
            size={32}
            color={colors.primary}
            style={dynamicStyles.icon}
          />
          <Text style={dynamicStyles.title}>
            {Platform.OS === "android"
              ? en.home.welcome.android
              : Platform.OS === "ios"
                ? en.home.welcome.ios
                : en.home.welcome.web}
          </Text>
          <Text style={dynamicStyles.subtitle}>
            {en.home.subtitle}
          </Text>

          <View style={dynamicStyles.cardContainer}>
            <UserCard
              name="Neeraj Kumar"
              email="thakurneerajkumar17@gmail.com"
            />
            <UserCard name="Krishna Awasthi" email="krishna@codriva.com" />
          </View>

          <View style={dynamicStyles.counterContainer}>
            <Text style={dynamicStyles.counterText}>{en.home.counterText} {count}</Text>
            <AppButton
              title={en.home.incrementButton}
              onPress={() => setCount(count + 1)}
            />
          </View>

          <Image
            source={require("../../assets/images/welcome.png")}
            style={dynamicStyles.image}
            resizeMode="contain"
          />

          <AppButton
            title={en.home.trainingButton}
            onPress={() => navigator.navigate("Training")}
            style={dynamicStyles.button}
          />

          <View style={dynamicStyles.listContainer}>
            {items.length === 0 ? (
              <Text style={dynamicStyles.emptyText}>{en.home.noItems}</Text>
            ) : (
              items.map((item, index) => (
                <Text key={index} style={dynamicStyles.listItem}>
                  • {item}
                </Text>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </ThemeView>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, typography: any, radius: any) => StyleSheet.create({
  container: {
    padding: spacing.sm,
    alignItems: "center",
  },
  icon: {
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    textAlign: "center",
  },
  subtitle: {
    fontSize: typography.size.sm,
    color: colors.text.secondary,
    marginTop: spacing.sm,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: spacing.xl,
    borderRadius: radius.xl,
  },
  cardContainer: {
    width: "100%",
    marginTop: spacing.xl,
  },
  counterContainer: {
    marginTop: spacing.xl,
    alignItems: "center",
  },
  counterText: {
    color: colors.text.primary,
    fontSize: typography.size.lg,
    marginBottom: spacing.sm,
  },
  listContainer: {
    marginTop: spacing.xxl,
    width: "100%",
    paddingHorizontal: spacing.xl,
  },
  emptyText: {
    color: colors.status.error,
    fontSize: typography.size.md,
    textAlign: "center",
    fontStyle: "italic",
  },
  listItem: {
    color: colors.text.primary,
    fontSize: typography.size.md,
    marginVertical: spacing.xs,
  },
  button: {
    marginTop: spacing.xl,
  },
});

export default Home1;
