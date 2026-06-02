import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountCard from "../Components/Dashboard/AccountCard";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import { getDashboardStyles } from "../Styles/DashboardStyles";
import { useTheme } from "../theme";

const FundsScreen = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getDashboardStyles(colors, spacing, radius, typography);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader />

        <Text
          style={{
            color: "#FFFFFFE5",
            fontSize: 22,
            fontWeight: "600",
            marginBottom: spacing.xl,
            marginTop: spacing.md,
          }}
        >
          Funds Overview
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: spacing.md,
            marginBottom: spacing.md,
          }}
        >
          <AccountCard
            title="Deposit"
            subTitle="Min Deposit is $10."
            imageSource={require("../../assets/images/top-left1.svg")}
            gradientColors={["#1A1A24", "#1A1A24"]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor="#FFFFFFE5"
            subTitleColor="#FFFFFF80"
          />
          <AccountCard
            title="Withdraw"
            subTitle="Max withdrawal is $1M."
            imageSource={require("../../assets/images/top-right3.svg")}
            gradientColors={["#1A1A24", "#1A1A24"]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor="#FFFFFFE5"
            subTitleColor="#FFFFFF80"
          />
        </View>

        <View style={{ flexDirection: "row", gap: spacing.md }}>
          <AccountCard
            title="Transfer"
            subTitle="Funds Limit: Unlimited"
            imageSource={require("../../assets/images/bottom-left2.svg")}
            gradientColors={["#1A1A24", "#1A1A24"]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor="#FFFFFFE5"
            subTitleColor="#FFFFFF80"
          />
          <AccountCard
            title="Transactions"
            subTitle="Recent Transactions"
            imageSource={require("../../assets/images/bottom-right4.svg")}
            gradientColors={["#1A1A24", "#1A1A24"]}
            imageStyle={{ width: 111, height: 111, top: 10 }}
            cardStyle={{ minHeight: 180 }}
            titleColor="#FFFFFFE5"
            subTitleColor="#FFFFFF80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FundsScreen;
