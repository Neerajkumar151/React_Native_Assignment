import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import ContactScreen from "../Screens/ContactScreen";
import ContactListScreen from "../Screens/ContactListScreen";
import FlexLayout from "../Screens/FlexLayout";
import GalleryScreen from "../Screens/GalleryScreen";
import ShoppingCartScreen from "../Screens/ShoppingCartScreen";
import TabNavigator from "./TabNavigator";
import DashboardTabNavigator from "./DashboardTabNavigator";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="DashboardTabs" component={DashboardTabNavigator} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="FlexLayout" component={FlexLayout} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default Navigator;
