import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { ButtonProps } from "./types";
import { Button as ButtonNB, useColorModeValue, useColorMode } from "native-base";
import { Colors } from "../../../Theme/scheme";

const Button = ({ title, onPress, disabled, isLoading, style, children }: ButtonProps) => {
  const {colorMode, setColorMode} = useColorMode()

  const getGradientColors = () => {
    return useColorModeValue(Colors.light.ButtonGradientColors, Colors.dark.ButtonGradientColors);
  };
  return (
    <LinearGradient
          colors={getGradientColors()}
          style={styles.buttonContainer}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
      <ButtonNB style={styles.buttonContainer} onPress={isLoading ? undefined : () => setColorMode(colorMode === 'light' ? 'dark' : 'light')} disabled={disabled || isLoading}>
        
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            children ? (
              children
            ) : (
              <Text style={styles.buttonText}>{title}</Text>
            )
          )}
      </ButtonNB>
    </LinearGradient>
  );
};

export default Button;
