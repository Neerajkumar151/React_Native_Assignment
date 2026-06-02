import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ThemeView from "../Components/ThemeView";
import AppButton from "../Components/common/AppButton";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { getContactStyles } from "../Styles/ContactStyles";

const Contact1 = () => {
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getContactStyles(colors, spacing, typography);
  const navigation = useNavigation<any>();

  return (
    <ThemeView style={{ flex: 1 }}>
      <View style={dynamicStyles.container}>
        <Ionicons
          name="chatbubbles"
          size={32}
          color={colors.primary}
          style={dynamicStyles.icon}
        />
        <Text style={dynamicStyles.title}>{en.contact.title}</Text>
        <Text style={dynamicStyles.subtitle}>{en.contact.subtitle}</Text>

        <AppButton
          title={en.contact.submitButton}
          onPress={() =>
            Alert.alert(en.contact.alertTitle, en.contact.alertMessage)
          }
          style={dynamicStyles.platformButton}
        />

        <AppButton
          title={en.contact.contactListButton}
          onPress={() => navigation.navigate("ContactList")}
          style={dynamicStyles.listButton}
        />
      </View>
    </ThemeView>
  );
};

export default Contact1;
