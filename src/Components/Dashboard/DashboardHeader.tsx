import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import en from "../../constants/en.json";
import { useTheme } from "../../theme";
import { getDashboardStyles } from "../../Styles/DashboardStyles";

const DashboardHeader = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getDashboardStyles(colors, spacing, radius, typography);

  return (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <Image 
          source={require("../../../assets/images/avatar_url.svg")} 
          style={styles.avatarPlaceholder} 
          contentFit="cover"
        />
        <View style={styles.profileInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>Zee</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{en.dashboard.unverified}</Text>
            </View>
          </View>
          <View style={styles.idRow}>
            <Text style={styles.idTextPrefix}>
              ID: <Text style={styles.idTextValue}>A232121u</Text>
            </Text>
            <Image
              source={require("../../../assets/images/copy.svg")}
              style={{ width: 12, height: 12 }}
              contentFit="contain"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.settingsBtn}>
        <Ionicons name="settings-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardHeader;
