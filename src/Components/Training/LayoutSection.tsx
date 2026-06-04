import React, { useMemo } from "react";
import { View, Text, Dimensions } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { getTrainingStyles } from "../../Styles/TrainingStyles";
import en from "../../constants/en.json";
import AppButton from "../common/AppButton";
import { useTheme } from "../../theme";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LayoutSection = () => {
  const navigation = useNavigation<any>();
  const { colors, spacing, radius, typography } = useTheme();
  const styles = useMemo(() => getTrainingStyles(colors, spacing, radius, typography), [colors, spacing, radius, typography]);

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.layout.flexboxTitle}</Text>
        <Text style={styles.subTitle}>{en.training.layout.rowLayout}</Text>
        <View style={styles.rowContainer}>
          <View style={[styles.box, { backgroundColor: colors.status.errorDark }]} />
          <View style={[styles.box, { backgroundColor: colors.status.successDark }]} />
          <View style={[styles.box, { backgroundColor: colors.status.infoLight }]} />
        </View>
        <Text style={styles.subTitle}>{en.training.layout.colLayout}</Text>
        <View style={styles.columnContainer}>
          <View style={[styles.boxColumn, { backgroundColor: colors.accents.purple }]} />
          <View style={[styles.boxColumn, { backgroundColor: colors.status.warningDark }]} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.layout.screenTitle}</Text>
        <Text style={styles.normalText}>{en.training.layout.width} {Math.round(width)}</Text>
        <Text style={styles.normalText}>
          {en.training.layout.height} {Math.round(height)}
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: colors.primary,
            marginTop: 10,
          }}
        >
          {en.training.layout.percentText}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.layout.hcfTitle}</Text>
        <Text style={styles.normalText}>
          {en.training.layout.hcfDesc}
        </Text>
        <AppButton
          title={en.training.layout.viewFull}
          onPress={() => navigation.navigate("FlexLayout")}
          style={{ marginTop: 15 }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.layout.gridTitle}</Text>
        <View style={styles.twoColumnGrid}>
          <View style={styles.gridItem}>
            <Text style={styles.whiteText}>A</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.whiteText}>B</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.whiteText}>C</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.whiteText}>D</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.layout.alignTitle}</Text>
        <View style={styles.alignCenterCol}>
          <View style={[styles.box, { width: 100, backgroundColor: colors.primary }]}>
            <Text style={styles.whiteText}>{en.training.layout.top}</Text>
          </View>
          <View style={[styles.box, { width: 150, backgroundColor: colors.primary }]}>
            <Text style={styles.whiteText}>{en.training.layout.middle}</Text>
          </View>
          <View style={[styles.box, { width: 80, backgroundColor: colors.primary }]}>
            <Text style={styles.whiteText}>{en.training.layout.bottom}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.layout.responsiveTitle}</Text>
        <View style={styles.responsiveGrid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <View
              key={i}
              style={[styles.responsiveImage, { width: (width - 80) / 3 }]}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default LayoutSection;
