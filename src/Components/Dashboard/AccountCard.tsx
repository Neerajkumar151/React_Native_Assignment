import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo } from "react";
import { Text, View, StyleProp, ViewStyle, ImageStyle, ImageSourcePropType } from "react-native";
import { getDashboardStyles } from "../../Styles/DashboardStyles";
import { useTheme } from "../../theme";
import PressableCard from "../common/PressableCard";

interface AccountCardProps {
  tag?: string;
  title: string;
  subTitle: string;
  imageSource: ImageSourcePropType;
  gradientColors?: string[];
  imageStyle?: StyleProp<ImageStyle>;
  cardStyle?: StyleProp<ViewStyle>;
  titleColor?: string;
  subTitleColor?: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  tag,
  title,
  subTitle,
  imageSource,
  gradientColors,
  imageStyle,
  cardStyle,
  titleColor,
  subTitleColor,
}) => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = useMemo(() => getDashboardStyles(colors, spacing, radius, typography), [colors, spacing, radius, typography]);

  const titleParts = title.split("\\n");
  const firstPart = titleParts[0];
  const secondPart =
    titleParts.length > 1 ? titleParts.slice(1).join("\\n") : "";

  return (
    <PressableCard style={{ flex: 1, width: 'auto' as any, padding: 0, backgroundColor: 'transparent' }} variant="flat" onPress={() => {}}>
      <LinearGradient
        colors={(gradientColors as any) || [colors.background.elevated, colors.background.elevated]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.accountCard, { backgroundColor: "transparent" }, cardStyle]}
      >
        {tag ? <Text style={styles.cardTag}>{tag}</Text> : <View style={{ flex: 1 }} />}
        <View>
          <Text style={[styles.cardTitle, titleColor ? { color: titleColor } : null]}>
            <Text style={styles.cardTitleFirstPart}>{firstPart}</Text>
            {secondPart ? (
              <Text style={styles.cardTitleSecondPart}>
                {"\n"}
                {secondPart}
              </Text>
            ) : null}
          </Text>
          <Text style={[styles.cardSub, subTitleColor ? { color: subTitleColor } : null]}>{subTitle}</Text>
        </View>
        <View style={styles.cardIconContainer}>
          <Image
            source={imageSource}
            style={imageStyle || {
              width: 56.9,
              height: 56.9,
              transform: [{ rotate: "19.79deg" }],
            }}
            contentFit="contain"
          />
        </View>
      </LinearGradient>
    </PressableCard>
  );
};

export default AccountCard;
