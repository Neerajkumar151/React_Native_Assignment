import React, { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountCard from "../Components/Dashboard/AccountCard";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import { getDashboardStyles } from "../Styles/DashboardStyles";
import { useTheme } from "../theme";
import en from "../constants/en.json";

const FundsScreen = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = useMemo(() => getDashboardStyles(colors, spacing, radius, typography), [colors, spacing, radius, typography]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader />

        <Text
          style={{
            color: colors.text.primary,
            fontSize: 22,
            fontWeight: "600",
            marginBottom: spacing.xl,
            marginTop: spacing.md,
          }}
        >
          {en.funds.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: spacing.md,
            marginBottom: spacing.md,
          }}
        >
          <AccountCard
            title={en.funds.deposit}
            subTitle={en.funds.depositSub}
            imageSource={require("../../assets/images/top-left1.svg")}
            gradientColors={[colors.background.elevated, colors.background.elevated]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor={colors.text.primary}
            subTitleColor={colors.text.secondary}
          />
          <AccountCard
            title={en.funds.withdraw}
            subTitle={en.funds.withdrawSub}
            imageSource={require("../../assets/images/top-right3.svg")}
            gradientColors={[colors.background.elevated, colors.background.elevated]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor={colors.text.primary}
            subTitleColor={colors.text.secondary}
          />
        </View>

        <View style={{ flexDirection: "row", gap: spacing.md }}>
          <AccountCard
            title={en.funds.transfer}
            subTitle={en.funds.transferSub}
            imageSource={require("../../assets/images/bottom-left2.svg")}
            gradientColors={[colors.background.elevated, colors.background.elevated]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor={colors.text.primary}
            subTitleColor={colors.text.secondary}
          />
          <AccountCard
            title={en.funds.transactions}
            subTitle={en.funds.transactionsSub}
            imageSource={require("../../assets/images/bottom-right4.svg")}
            gradientColors={[colors.background.elevated, colors.background.elevated]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor={colors.text.primary}
            subTitleColor={colors.text.secondary}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FundsScreen;
