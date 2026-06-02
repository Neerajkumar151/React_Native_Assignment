import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import en from "../constants/en.json";
import { getFlexLayoutStyles } from "../Styles/FlexLayoutStyles";
import { useTheme } from "../theme";

const FlexLayout = () => {
  const navigation = useNavigation();
  const { colors, spacing, typography } = useTheme();
  const dynamicStyles = getFlexLayoutStyles(colors, spacing, typography);
  const { width, height } = useWindowDimensions();

  // If width is greater than height, it's landscape
  const isLandscape = width > height;

  return (
    <SafeAreaView style={dynamicStyles.safeArea}>
      <View style={dynamicStyles.container}>
        {/* Header - Fixed Height */}
        <View style={dynamicStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={dynamicStyles.backButton}>
            <Text style={dynamicStyles.backText}>{en.flexLayout.back}</Text>
          </TouchableOpacity>
          <Text style={dynamicStyles.headerText}>{en.flexLayout.header}</Text>
          <View style={dynamicStyles.placeholder} />
        </View>

        {/* Content - flex: 1 (Fills remaining space) */}
        <View style={[dynamicStyles.content, { flexDirection: isLandscape ? "row" : "column" }]}>
          <View style={[dynamicStyles.column, { backgroundColor: colors.background.elevated }]}>
            <Text style={dynamicStyles.columnTitle}>{en.flexLayout.column1}</Text>
            <Text style={dynamicStyles.contentText}>{en.flexLayout.content1}</Text>
          </View>
          
          <View style={[dynamicStyles.column, { backgroundColor: colors.background.surface }]}>
            <Text style={dynamicStyles.columnTitle}>{en.flexLayout.column2}</Text>
            <Text style={dynamicStyles.contentText}>{en.flexLayout.content2}</Text>
          </View>
        </View>

        {/* Footer - Fixed Height */}
        <View style={dynamicStyles.footer}>
          <Text style={dynamicStyles.footerText}>{en.flexLayout.footer}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlexLayout;
