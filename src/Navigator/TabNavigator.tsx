import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Contact1 from "../Screens/Contact1";
import Gallery1 from "../Screens/Gallery1";
import Home1 from "../Screens/Home1";
import ChatScreen from "../Screens/ChatScreen";
import Training from "../Screens/Training";
import { useTheme } from "../theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors, radius, typography } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home1") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Contact1") {
            iconName = focused ? "mail" : "mail-outline";
          } else if (route.name === "Gallery1") {
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
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          elevation: 8,
          backgroundColor: colors.background.paper, 
          borderRadius: radius.round,
          height: 62,
          borderTopWidth: 0,
          paddingBottom: 5,
          paddingTop: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
        },
        tabBarActiveTintColor: colors.primary, 
        tabBarInactiveTintColor: colors.text.muted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: typography.weight.medium as any,
          marginTop: 2,
        },
      })}
    >
      <Tab.Screen
        name="Home1"
        component={Home1}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Contact1"
        component={Contact1}
        options={{ tabBarLabel: "Contact" }}
      />
      <Tab.Screen
        name="Gallery1"
        component={Gallery1}
        options={{ tabBarLabel: "Gallery" }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ tabBarLabel: "Chat" }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{ tabBarLabel: "Training" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
