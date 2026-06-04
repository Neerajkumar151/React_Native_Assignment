import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../theme";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

export interface CustomTabBarButtonProps extends BottomTabBarButtonProps {}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ onPress }) => {
  const { colors, radius } = useTheme();

  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: colors.text.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}
      onPress={onPress}
      activeOpacity={1}
    >
      <View
        style={{
          width: 65,
          height: 65,
          borderRadius: radius.circle,
          backgroundColor: colors.primary,
          borderWidth: 5,
          borderColor: colors.background.surface,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="chart-bar" color={colors.text.dark} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;
