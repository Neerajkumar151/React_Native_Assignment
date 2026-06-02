import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import en from "../constants/en.json";
import { getContentStyles } from "../Styles/LayoutStyles";
import { useTheme } from "../theme";
import AppButton from "./common/AppButton";

type ContentProps = {
  title: string;
};

const Content = ({ title }: ContentProps) => {
  const [count, setCount] = useState(0);
  
  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getContentStyles(colors, spacing, typography, radius);

  const listItems = en.components.content.fruits;

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>{title}</Text>

      <View style={dynamicStyles.counterSection}>
        <Text style={dynamicStyles.countText}>
          {en.components.content.count} {count} -{" "}
          <Text style={dynamicStyles.highlight}>
            {count % 2 === 0 ? en.components.content.even : en.components.content.odd}
          </Text>
        </Text>
        <View style={dynamicStyles.buttonRow}>
          <AppButton
            title="-"
            size="sm"
            onPress={() => setCount(count - 1)}
          />
          <AppButton
            title="+"
            size="sm"
            onPress={() => setCount(count + 1)}
          />
        </View>
      </View>

      <ScrollView
        style={dynamicStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {listItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={dynamicStyles.listItem}
            activeOpacity={0.7}
          >
            <Text style={dynamicStyles.listText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Content;
