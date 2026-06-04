import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useMemo } from "react";
import ChatScreen from "../Screens/ChatScreen";
import ContactScreen from "../Screens/ContactScreen";
import GalleryScreen from "../Screens/GalleryScreen";
import HomeScreen from "../Screens/HomeScreen";
import Training from "../Screens/Training";
import { useTheme } from "../theme";
import en from "../constants/en.json";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors, radius, typography } = useTheme();

  const tabBarStyle = useMemo(() => ({
    position: "absolute" as const,
    left: 20,
    right: 20,
    elevation: 8,
    backgroundColor: colors.background.paper,
    borderRadius: radius.round,
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: colors.text.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  }), [colors, radius]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "ContactScreen") {
            iconName = focused ? "mail" : "mail-outline";
          } else if (route.name === "GalleryScreen") {
            iconName = focused ? "images" : "images-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Training") {
            iconName = focused ? "school" : "school-outline";
          } else {
            iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size - 2} color={color} />;
        },
        tabBarStyle,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.muted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: typography.weight.medium,
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: en.tabs.home }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{ tabBarLabel: en.tabs.contact }}
      />
      <Tab.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{ tabBarLabel: en.tabs.gallery }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ tabBarLabel: en.tabs.chat }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{ tabBarLabel: en.tabs.training }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
