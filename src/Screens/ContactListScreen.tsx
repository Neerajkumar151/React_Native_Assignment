import React, { useMemo } from "react";
import { View, Text, SectionList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ThemeView from "../Components/ThemeView";
import { useTheme } from "../theme";
import { getContactListStyles } from "../Styles/ContactListStyles";
import en from "../constants/en.json";

interface Contact {
  id: string;
  name: string;
  email: string;
}

interface Section {
  title: string;
  data: Contact[];
}

const ContactListScreen = () => {
  const { colors, spacing, typography } = useTheme();
  const styles = getContactListStyles(colors, spacing, typography);
  const navigation = useNavigation();

  const sections = useMemo(() => {
    const rawContacts = en.contact.contacts as Contact[];
    
    // Group contacts by first letter of their name
    const grouped = rawContacts.reduce((acc, contact) => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(contact);
      return acc;
    }, {} as Record<string, Contact[]>);

    // Convert to SectionList format and sort alphabetically
    const sectionList: Section[] = Object.keys(grouped)
      .sort()
      .map((letter) => ({
        title: letter,
        data: grouped[letter].sort((a, b) => a.name.localeCompare(b.name)),
      }));

    return sectionList;
  }, []);

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemEmail}>{item.email}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: Section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <ThemeView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text.dark} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{en.contact.contactListTitle}</Text>
        </View>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={true}
        />
      </View>
    </ThemeView>
  );
};

export default ContactListScreen;
