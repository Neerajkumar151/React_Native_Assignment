import { Alert, Image, Text, View, TextInput } from "react-native";
import React, { useReducer, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import ThemeView from "../Components/ThemeView";
import AppButton from "../Components/common/AppButton";
import AppInput from "../Components/common/AppInput";
import AppKeyboardAvoidingView from "../Components/common/AppKeyboardAvoidingView";
import Card from "../Components/common/Card";
import { getGalleryStyles } from "../Styles/GalleryStyles";
import en from "../constants/en.json";
import useDevicePlatform from "../hooks/useDevicePlatform";
import { useTheme } from "../theme";

type FormState = {
  username: string;
  email: string;
  password: string;
  errors: {
    username?: string;
    email?: string;
    password?: string;
  };
};

type FormAction =
  | { type: "SET_FIELD"; field: keyof Omit<FormState, "errors">; value: string }
  | { type: "SET_ERRORS"; errors: Partial<FormState["errors"]> }
  | { type: "RESET_FORM" };

const initialState: FormState = {
  username: "",
  email: "",
  password: "",
  errors: {},
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined }, // clear error on type
      };
    case "SET_ERRORS":
      return { ...state, errors: { ...state.errors, ...action.errors } };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const Gallery1 = () => {
  const { os, isIos, isAndroid, isWeb, isMac, isWindows, version } =
    useDevicePlatform();

  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getGalleryStyles(colors, spacing, typography, radius);

  const [formState, dispatch] = useReducer(formReducer, initialState);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const validateForm = () => {
    let isValid = true;
    const errors: Partial<FormState["errors"]> = {};

    if (formState.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formState.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!isValid) {
      dispatch({ type: "SET_ERRORS", errors });
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Success", "Form submitted successfully!");
      dispatch({ type: "RESET_FORM" });
    }
  };

  return (
    <AppKeyboardAvoidingView isTabScreen={true}>
      <ScrollView>
        <ThemeView>
        <View style={dynamicStyles.container}>
          <Ionicons
            name="images"
            size={32}
            color={colors.primary}
            style={dynamicStyles.icon}
          />
          <Text style={dynamicStyles.title}>{en.gallery.title}</Text>
          <Text style={dynamicStyles.subtitle}>{en.gallery.subtitle}</Text>
        </View>

        <Card variant="flat" style={{ marginBottom: spacing.md }}>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.os} {os}
          </Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isIos}{" "}
            {isIos ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isAndroid}{" "}
            {isAndroid ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isWeb}{" "}
            {isWeb ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isMac}{" "}
            {isMac ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.isWindows}{" "}
            {isWindows ? en.gallery.info.yes : en.gallery.info.no}
          </Text>
          <Text style={dynamicStyles.infoText}>
            {en.gallery.info.version} {version}
          </Text>
        </Card>

        <Card variant="flat" style={{ marginBottom: spacing.md }}>
          <Text
            style={[
              dynamicStyles.title,
              { marginBottom: spacing.md, fontSize: typography.size.xl },
            ]}
          >
            {en.gallery.form.title}
          </Text>
          <AppInput
            placeholder={en.gallery.form.username}
            value={formState.username}
            onChangeText={(text) =>
              dispatch({ type: "SET_FIELD", field: "username", value: text })
            }
            error={formState.errors.username}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
            blurOnSubmit={false}
          />
          <AppInput
            ref={emailRef}
            placeholder={en.gallery.form.email}
            value={formState.email}
            onChangeText={(text) =>
              dispatch({ type: "SET_FIELD", field: "email", value: text })
            }
            error={formState.errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />
          <AppInput
            ref={passwordRef}
            placeholder={en.gallery.form.password}
            value={formState.password}
            onChangeText={(text) =>
              dispatch({ type: "SET_FIELD", field: "password", value: text })
            }
            error={formState.errors.password}
            secureTextEntry
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />
          <AppButton
            title="Submit Form"
            onPress={handleSubmit}
            style={dynamicStyles.submitButton}
          />
          <AppButton
            title="Reset Form"
            onPress={() => dispatch({ type: "RESET_FORM" })}
            variant="outline"
            style={{ marginTop: spacing.sm }}
          />
        </Card>

        <Card variant="flat">
          {isAndroid ? (
            <Image
              source={require("../../assets/images/welcome.png")}
              style={dynamicStyles.image}
              resizeMode="contain"
            />
          ) : (
            <Text style={dynamicStyles.infoText}>
              {en.gallery.info.imageHidden}
            </Text>
          )}
        </Card>
        </ThemeView>
      </ScrollView>
    </AppKeyboardAvoidingView>
  );
};

export default Gallery1;
