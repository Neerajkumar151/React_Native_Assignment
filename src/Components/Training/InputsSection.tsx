import React, { useState } from "react";
import { View, Text } from "react-native";
import { z } from "zod";
import { getTrainingStyles } from "../../Styles/TrainingStyles";
import en from "../../constants/en.json";
import AppInput from "../common/AppInput";
import { useTheme } from "../../theme";

const originalSchema = z.object({
  age: z
    .string()
    .min(1, en.training.inputs.ageRequired)
    .refine(
      (value) => Number(value) >= 18 && Number(value) <= 120,
      en.training.inputs.ageInvalid
    ),
  password: z.string().min(8, en.training.inputs.passwordInvalid),
});

const InputsSection = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const { colors, spacing, radius, typography } = useTheme();
  const styles = getTrainingStyles(colors, spacing, radius, typography);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text.length > 0) {
      const result = originalSchema.shape.password.safeParse(text);
      if (!result.success) setPasswordError(result.error.issues[0].message);
      else setPasswordError("");
    } else setPasswordError("");
  };

  const handleAgeChange = (text: string) => {
    setAge(text);
    if (text.length > 0) {
      const result = originalSchema.shape.age.safeParse(text);
      if (!result.success) setAgeError(result.error.issues[0].message);
      else setAgeError("");
    } else setAgeError("");
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{en.training.inputs.title}</Text>
      <AppInput
        placeholder={en.training.inputs.passwordPlaceholder}
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
        error={passwordError}
      />
      <AppInput
        placeholder={en.training.inputs.agePlaceholder}
        keyboardType="numeric"
        value={age}
        onChangeText={handleAgeChange}
        error={ageError}
      />
    </View>
  );
};

export default InputsSection;
