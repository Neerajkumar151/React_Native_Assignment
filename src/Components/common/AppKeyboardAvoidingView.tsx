import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { getKeyboardAvoidingStyles } from "../../Styles/CommonComponentsStyles";

export interface AppKeyboardAvoidingViewProps extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
  isTabScreen?: boolean;
}

const AppKeyboardAvoidingView: React.FC<AppKeyboardAvoidingViewProps> = ({
  children,
  isTabScreen = false,
  style,
  ...props
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const styles = getKeyboardAvoidingStyles();

  // Safely get tab bar height if it's a tab screen
  let tabBarHeight = 0;
  try {
    if (isTabScreen) {
      tabBarHeight = useBottomTabBarHeight();
    }
  } catch (e) {
    // In case this is rendered outside a bottom tab navigator context
    tabBarHeight = 0;
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        isTabScreen && { paddingBottom: isKeyboardVisible ? 0 : tabBarHeight },
        style,
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0} // Adjust this offset globally here
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AppKeyboardAvoidingView;
