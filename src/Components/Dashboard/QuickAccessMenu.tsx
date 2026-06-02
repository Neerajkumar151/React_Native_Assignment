import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import en from "../../constants/en.json";
import { useTheme } from "../../theme";
import { getDashboardStyles } from "../../Styles/DashboardStyles";

const QuickAccessMenu = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getDashboardStyles(colors, spacing, radius, typography);

  const quickAccessData = [
    { id: "1", title: en.dashboard.getFunded, icon: require("../../../assets/images/get_funded.svg") },
    { id: "2", title: en.dashboard.deposits, icon: require("../../../assets/images/deposits.svg") },
    { id: "3", title: en.dashboard.withdrawals, icon: require("../../../assets/images/withdrawals.svg") },
    { id: "4", title: en.dashboard.accountsTitle, icon: require("../../../assets/images/accounts.svg") },
    { id: "5", title: en.dashboard.add, icon: require("../../../assets/images/add.svg") },
  ];

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{en.dashboard.quickAccess}</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>{en.dashboard.customize}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.quickAccessRow}>
        {quickAccessData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.quickAccessItem} activeOpacity={0.7}>
            <View style={styles.quickAccessIconBox}>
              <Image 
                source={item.icon} 
                style={{ width: 24, height: 24 }} 
                contentFit="contain"
                tintColor="#FFFFFF" 
              />
            </View>
            <Text style={styles.quickAccessText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickAccessMenu;
