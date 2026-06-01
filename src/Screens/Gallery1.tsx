import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ThemeView from "../Components/ThemeView";
import { Ionicons } from "@expo/vector-icons";
import useDevicePlatform from "../hooks/useDevicePlatform";
import { ScrollView } from "react-native-gesture-handler";
import en from "../constants/en.json";
import { useTheme } from "../theme";
import { ThemeColors } from "../theme/colors";
import AppInput from "../Components/common/AppInput";
import Card from "../Components/common/Card";

const Gallery1 = () => {
  const { os, isIos, isAndroid, isWeb, isMac, isWindows, version } =
    useDevicePlatform();
    
  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography, radius);

  const formFields = [
    { key: "username", placeholder: en.gallery.form.username },
    { key: "email", placeholder: en.gallery.form.email },
    { key: "password", placeholder: en.gallery.form.password, secure: true },
  ];

  return (
    <ScrollView>
      <ThemeView>
        <View style={dynamicStyles.container}>
          <Ionicons
            name="images"
            size={32}
            color={colors.primary}
            style={dynamicStyles.icon}
          />
          <Text style={dynamicStyles.title}>{en.gallery.title}</Text>
          <Text style={dynamicStyles.subtitle}>{en.gallery.subtitle}</Text>
        </View>
        
        <Card variant="flat" style={{ marginBottom: spacing.md }}>
          <Text style={dynamicStyles.infoText}>{en.gallery.info.os} {os}</Text>
          <Text style={dynamicStyles.infoText}>{en.gallery.info.isIos} {isIos ? en.gallery.info.yes : en.gallery.info.no}</Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isAndroid} {isAndroid ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>{en.gallery.info.isWeb} {isWeb ? en.gallery.info.yes : en.gallery.info.no}</Text>
          <Text style={dynamicStyles.infoText}>{en.gallery.info.isMac} {isMac ? en.gallery.info.yes : en.gallery.info.no}</Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isWindows} {isWindows ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>{en.gallery.info.version} {version}</Text>
        </Card>

        <Card variant="flat" style={{ marginBottom: spacing.md }}>
          <Text style={[dynamicStyles.title, { marginBottom: spacing.md, fontSize: typography.size.xl }]}>
            {en.gallery.form.title}
          </Text>
          {formFields.map((field) => (
            <AppInput
              key={field.key}
              placeholder={field.placeholder}
              secureTextEntry={field.secure}
            />
          ))}
        </Card>

        <Card variant="flat">
          {isAndroid ? (
            <Image
              source={require("../../assets/images/welcome.png")}
              style={dynamicStyles.image}
              resizeMode="contain"
            />
          ) : (
            <Text style={dynamicStyles.infoText}>
              {en.gallery.info.imageHidden}
            </Text>
          )}
        </Card>
      </ThemeView>
    </ScrollView>
  );
};

const getStyles = (colors: ThemeColors, spacing: any, typography: any, radius: any) => StyleSheet.create({
  container: {
    padding: spacing.lg,
    alignItems: "center",
  },
  icon: {
    marginBottom: spacing.md,
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
  infoText: {
    color: colors.text.primary,
    fontSize: typography.size.md,
    marginBottom: spacing.xs,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: radius.md,
  },
});

export default Gallery1;
