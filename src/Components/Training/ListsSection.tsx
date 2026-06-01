import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, SectionList } from "react-native";
import { getTrainingStyles } from "../../Styles/TrainingStyles";
import en from "../../constants/en.json";
import AppButton from "../common/AppButton";
import { useTheme } from "../../theme";

const FLAT_LIST_DATA = Array.from({ length: 10 }, (_, i) => ({
  id: String(i),
  title: `${en.training.lists.item} ${i + 1}`,
}));

const SECTION_DATA = [
  { title: en.training.lists.citrus, data: [en.training.lists.orange, en.training.lists.lemon, en.training.lists.grapefruit] },
  { title: en.training.lists.berries, data: [en.training.lists.strawberry, en.training.lists.blueberry, en.training.lists.raspberry] },
];

const HUNDRED_ITEMS = Array.from({ length: 100 }, (_, i) => i);

const ListsSection = () => {
  const [flatListData, setFlatListData] = useState(FLAT_LIST_DATA);
  const { colors, spacing, radius, typography } = useTheme();
  const styles = getTrainingStyles(colors, spacing, radius, typography);

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.lists.galleryTitle}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.galleryImage, { backgroundColor: colors.status.errorDark }]} />
          <View style={[styles.galleryImage, { backgroundColor: colors.status.successDark }]} />
          <View style={[styles.galleryImage, { backgroundColor: colors.status.infoLight }]} />
          <View style={[styles.galleryImage, { backgroundColor: colors.status.warning }]} />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.lists.flatListTitle}</Text>
        <FlatList
          data={flatListData}
          keyExtractor={(item) => item.id}
          initialNumToRender={5}
          extraData={flatListData}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.title}</Text>
            </View>
          )}
        />
        <AppButton
          title={en.training.lists.addDynamic}
          onPress={() =>
            setFlatListData([
              { id: String(Date.now()), title: en.training.lists.newItem },
              ...flatListData,
            ])
          }
          style={{ marginTop: 10 }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.lists.sectionTitle}</Text>
        <SectionList
          sections={SECTION_DATA}
          keyExtractor={(item, index) => item + index}
          scrollEnabled={false}
          getItemLayout={(data, index) => ({
            length: 40,
            offset: 40 * index,
            index,
          })}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          ListFooterComponent={() => (
            <Text style={{ color: colors.text.muted, textAlign: "center", marginTop: 10 }}>
              {en.training.lists.footer}
            </Text>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.lists.perfTitle}</Text>
        <Text style={{ color: colors.text.muted, marginBottom: 10, fontSize: 13 }}>
          {en.training.lists.perfDesc}
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {HUNDRED_ITEMS.map((item) => (
            <Text key={item} style={styles.tinyText}>
              {item}{" "}
            </Text>
          ))}
        </View>
      </View>
    </>
  );
};

export default ListsSection;
