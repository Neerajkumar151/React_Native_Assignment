import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import DashboardScreen from "../Screens/DashboardScreen";
import FundsScreen from "../Screens/FundsScreen";
import en from "../constants/en.json";

// Placeholder screens for other tabs
const PlaceholderScreen = () => (
  <View style={{ flex: 1, backgroundColor: "#0F0F1A" }} />
);

const Tab = createBottomTabNavigator();

// Custom Center Button component
const CustomTabBarButton = ({ onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    }}
    onPress={onPress}
    activeOpacity={1}
  >
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 42,
        backgroundColor: "#803FE2",
        borderWidth: 5,
        borderColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name="chart-bar" color="#FFFFFF" size={30} />
    </View>
  </TouchableOpacity>
);

const DashboardTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#000000",
          borderRadius: 30,
          height: 64,
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#6B7280", // Gray
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
