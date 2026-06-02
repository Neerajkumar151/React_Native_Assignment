import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getDashboardStyles } from "../../Styles/DashboardStyles";
import { useTheme } from "../../theme";

interface AccountCardProps {
  tag?: string;
  title: string;
  subTitle: string;
  imageSource: any;
  gradientColors?: string[];
  imageStyle?: any;
  cardStyle?: any;
  titleColor?: string;
  subTitleColor?: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  tag,
  title,
  subTitle,
  imageSource,
  gradientColors = ["#20112E", "#674588"],
  imageStyle,
  cardStyle,
  titleColor,
  subTitleColor,
}) => {
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getDashboardStyles(colors, spacing, radius, typography);

  const titleParts = title.split("\\n");
  const firstPart = titleParts[0];
  const secondPart =
    titleParts.length > 1 ? titleParts.slice(1).join("\\n") : "";

  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}>
      <LinearGradient
        colors={gradientColors as any}
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
    </TouchableOpacity>
  );
};

export default AccountCard;
