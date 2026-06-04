import React, { useMemo, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Pressable } from "react-native";
import { getTrainingStyles } from "../../Styles/TrainingStyles";
import en from "../../constants/en.json";
import AppButton from "../common/AppButton";
import PressableCard from "../common/PressableCard";
import { useTheme } from "../../theme";

const ButtonsSection = () => {
  const [buttonText, setButtonText] = useState(en.training.buttons.clickMe);
  const [counter, setCounter] = useState(0);
  const [isStyleActive, setIsStyleActive] = useState(false);

  const { colors, spacing, radius, typography } = useTheme();
  const styles = useMemo(() => getTrainingStyles(colors, spacing, radius, typography), [colors, spacing, radius, typography]);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const handlePressIn = () =>
    Animated.spring(scaleAnim, { toValue: 0.8, useNativeDriver: true }).start();
  const handlePressOut = () =>
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.buttons.title}</Text>
        <AppButton
          title={buttonText}
          onPress={() => setButtonText(en.training.buttons.clicked)}
          style={{ marginBottom: 10 }}
        />
        <AppButton
          title={en.training.buttons.highlight}
          variant="secondary"
          onPress={() => {}}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.buttons.pressableTitle}</Text>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1, width: '100%' },
          ]}
        >
          {({ pressed }) => (
            <AppButton
              title={pressed ? en.training.buttons.pressablePressed : en.training.buttons.pressableDefault}
              variant="outline"
              onPress={() => {}}
            />
          )}
        </Pressable>
      </View>

      <PressableCard style={styles.section} onPress={() => {}}>
        <Text style={styles.sectionTitle}>{en.training.buttons.counterTitle}</Text>
        <AppButton
          title={`${en.training.buttons.addOne} ${counter})`}
          variant="danger"
          onPress={() => setCounter(counter + 1)}
        />
      </PressableCard>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.buttons.conditionalTitle}</Text>
        <TouchableOpacity onPress={() => setIsStyleActive(!isStyleActive)}>
          <Text
            style={[
              styles.baseText,
              isStyleActive ? styles.activeStyle : styles.inactiveStyle,
            ]}
          >
            {en.training.buttons.tapChange}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.buttons.shadowTitle}</Text>
        <AppButton
          title={en.training.buttons.shadowButton}
          variant="primary"
          style={{ shadowColor: colors.text.primary, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 10, borderRadius: 25 }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{en.training.buttons.animatedTitle}</Text>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <AppButton title={en.training.buttons.holdZoom} onPress={() => {}} />
          </Pressable>
        </Animated.View>
      </View>
    </>
  );
};

export default ButtonsSection;
