import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useMemo } from "react";
import { View } from "react-native";
import DashboardScreen from "../Screens/DashboardScreen";
import FundsScreen from "../Screens/FundsScreen";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import CustomTabBarButton from "../Components/common/CustomTabBarButton";

// Placeholder screens for other tabs
const PlaceholderScreen = () => {
  const { colors } = useTheme();
  return <View style={{ flex: 1, backgroundColor: colors.background.main }} />;
};

const Tab = createBottomTabNavigator();

const DashboardTabNavigator = () => {
  const { colors, radius, typography } = useTheme();

  const tabBarStyle = useMemo(() => ({
    position: "absolute" as const,
    bottom: 10,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: colors.background.elevated,
    borderRadius: radius.xxl,
    height: 64,
    borderTopWidth: 0,
    paddingBottom: 10,
    paddingTop: 10,
  }), [colors, radius]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle,
        tabBarActiveTintColor: colors.text.primary,
        tabBarInactiveTintColor: colors.text.muted,
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="DashboardHome"
        component={DashboardScreen}
        options={{
          tabBarLabel: en.dashboard.tabHome,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={PlaceholderScreen}
        options={{
          tabBarLabel: en.dashboard.tabTools,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "globe" : "globe-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Center Action Button */}
      <Tab.Screen
        name="Action"
        component={PlaceholderScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Accounts"
        component={PlaceholderScreen}
        options={{
          tabBarLabel: en.dashboard.tabAccounts,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Funds"
        component={FundsScreen}
        options={{
          tabBarLabel: en.dashboard.tabFunds,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "swap-vertical" : "swap-vertical-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabNavigator;
