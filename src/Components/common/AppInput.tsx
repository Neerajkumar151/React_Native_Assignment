import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../theme";
import { getAppInputStyles } from "../../Styles/CommonComponentsStyles";

export interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

const AppInput = React.forwardRef<TextInput, AppInputProps>(
  ({ label, error, containerStyle, style, ...props }, ref) => {
    const { colors, spacing, radius, typography } = useTheme();
    const dynamicStyles = getAppInputStyles(colors, spacing, radius, typography);

    return (
      <View style={[dynamicStyles.container, containerStyle]}>
        {label && <Text style={dynamicStyles.label}>{label}</Text>}
        <TextInput
          ref={ref}
          style={[
            dynamicStyles.input,
            error ? dynamicStyles.inputError : null,
            style,
          ]}
          placeholderTextColor={colors.text.placeholder}
          {...props}
        />
        {error ? <Text style={dynamicStyles.errorText}>{error}</Text> : null}
      </View>
    );
  },
);

AppInput.displayName = "AppInput";

export default AppInput;
