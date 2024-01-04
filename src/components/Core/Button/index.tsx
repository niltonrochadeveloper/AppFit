import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { ButtonProps } from "./types";
import { Button as ButtonNB, ButtonText, ButtonSpinner } from "@gluestack-ui/themed";
import { Colors } from "../../../Theme/scheme";

const Button = ({ title, onPress, disabled, isLoading, style, children }: ButtonProps) => {
  return (
    // <LinearGradient
    //       colors={Colors.light.ButtonGradientColors}
    //       style={styles.buttonContainer}
    //       start={{ x: 1, y: 0 }}
    //       end={{ x: 0, y: 1 }}
    //     >
      <ButtonNB style={styles.buttonContainer} $light-bgColor={Colors.light.primary} onPress={isLoading ? undefined : onPress} disabled={disabled || isLoading}>
        
          {isLoading ? (
            <ButtonSpinner size="small" color="#fff" />
          ) : (
            children ? (
              children
            ) : (
              <ButtonText>{title}</ButtonText>
            )
          )}
      </ButtonNB>
    // </LinearGradient>
  );
};

export default Button;
