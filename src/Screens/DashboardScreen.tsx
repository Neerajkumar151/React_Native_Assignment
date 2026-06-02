import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDashboardStyles } from "../Styles/DashboardStyles";
import { useTheme } from "../theme";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import WalletCardCarousel from "../Components/Dashboard/WalletCardCarousel";
import QuickAccessMenu from "../Components/Dashboard/QuickAccessMenu";
import AccountsSection from "../Components/Dashboard/AccountsSection";

const DashboardScreen = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getDashboardStyles(colors, spacing, radius, typography);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader />
        <WalletCardCarousel />
        <QuickAccessMenu />
        <AccountsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
