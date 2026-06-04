import { Image } from "expo-image";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getDashboardStyles } from "../../Styles/DashboardStyles";
import en from "../../constants/en.json";
import { useTheme } from "../../theme";
import AccountCard from "./AccountCard";

const AccountsSection = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = useMemo(() => getDashboardStyles(colors, spacing, radius, typography), [colors, spacing, radius, typography]);

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{en.dashboard.accountsTitle}</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>
            {en.dashboard.createNewAccount}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noActiveBox}>
        <Text style={styles.noActiveTitle}>
          {en.dashboard.noActiveAccounts}
        </Text>
        <Text style={styles.noActiveSub}>
          {en.dashboard.noActiveAccountsSub}
        </Text>
      </View>

      <View style={styles.accountCardsRow}>
        <AccountCard
          tag={en.dashboard.proTraders}
          title={en.dashboard.liveAccountTitle}
          subTitle={en.dashboard.liveAccountSub}
          imageSource={require("../../../assets/images/left_image_barchart.svg")}
        />
        
        <AccountCard
          tag={en.dashboard.beginners}
          title={en.dashboard.demoTitle}
          subTitle={en.dashboard.demoSub}
          imageSource={require("../../../assets/images/dollar_symbol.svg")}
        />
      </View>
    </View>
  );
};

export default AccountsSection;
