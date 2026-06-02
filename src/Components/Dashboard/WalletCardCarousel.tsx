import React, { useRef, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Dimensions, ViewToken } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import en from "../../constants/en.json";
import { useTheme } from "../../theme";
import { getDashboardStyles } from "../../Styles/DashboardStyles";

const { width } = Dimensions.get("window");

const WalletCardCarousel = () => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getDashboardStyles(colors, spacing, radius, typography);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  // We have 3 placeholder cards for the carousel
  const carouselData = [
    { id: "1", balance: "$00.0", growth: "+0.00 (+0%)" },
    { id: "2", balance: "$150.0", growth: "+5.00 (+3%)" },
    { id: "3", balance: "$2,400.0", growth: "+120.00 (+5%)" },
  ];

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ width: width - (spacing.xl * 2), marginRight: spacing.md }}>
      <LinearGradient
        colors={["#9070D1", "#803FE2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.walletCard, { width: "100%", marginBottom: 0, backgroundColor: "transparent" }]}
      >
        <View style={styles.walletHeader}>
          <Text style={styles.walletIdText}>{en.dashboard.walletId}</Text>
          <View style={styles.currencyDropdown}>
            <Text style={styles.currencyText}>{en.dashboard.currency}</Text>
          </View>
        </View>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceText}>
            {isBalanceVisible ? item.balance : "****"}
          </Text>
          <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
            <Ionicons 
              name={isBalanceVisible ? "eye-outline" : "eye-off-outline"} 
              size={20} 
              color="rgba(255,255,255,0.7)" 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.walletFooter}>
          <View style={styles.statsCol}>
            <Text style={styles.last24Text}>{en.dashboard.last24}</Text>
            <View style={styles.growthRow}>
              <Ionicons name="trending-up" size={16} color="#44EC60" />
              <Text style={styles.growthText}>{item.growth}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.withdrawBtn}>
            <Text style={styles.withdrawText}>{en.dashboard.withdraw}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width - (spacing.xl * 2) + spacing.md} // Width + margin
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{ paddingBottom: spacing.md }}
      />
      
      {/* Pagination Dots */}
      <View style={styles.paginationRow}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotInactive,
              { backgroundColor: index === activeIndex ? "#FFFFFF" : "#4B5563" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default WalletCardCarousel;
