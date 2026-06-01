import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Contact from "../Screens/Contact";
import FlexLayout from "../Screens/FlexLayout";
import Gallery from "../Screens/Gallery";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="FlexLayout" component={FlexLayout} />
      </Stack.Navigator>
    </View>
  );
};

export default Navigator;
