import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState, useMemo } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import ThemeView from "../Components/ThemeView";
import UserCard from "../Components/UserCard";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import AppButton from "../Components/common/AppButton";
import { getHomeStyles } from "../Styles/HomeStyles";
import { RootStackParamList } from "../Navigator/types";

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const items = en.home.items;

  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = useMemo(() => getHomeStyles(colors, spacing, typography, radius), [colors, spacing, typography, radius]);

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
              style={{ marginBottom: 10 }}
            />
            <AppButton
              title={en.home.viewCart}
              variant="secondary"
              onPress={() => navigator.navigate("ShoppingCart")}
              style={{ marginBottom: 10 }}
            />
            <AppButton
              title={en.home.viewDashboard}
              variant="primary"
              onPress={() => navigator.navigate("DashboardTabs" as never)}
            />
          </View>

          <View style={dynamicStyles.imageWrapper}>
            {!isImageLoaded && (
              <View style={dynamicStyles.imagePlaceholder}>
                <ActivityIndicator size="small" color={colors.primary} />
              </View>
            )}
            <Image
              source={require("../../assets/images/welcome.png")}
              style={[dynamicStyles.image, !isImageLoaded && { opacity: 0 }]}
              resizeMode="contain"
              onLoad={() => setIsImageLoaded(true)}
            />
          </View>

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
export default HomeScreen;
