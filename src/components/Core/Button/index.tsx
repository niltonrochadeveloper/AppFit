import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { ButtonProps } from "./types";

const CustomButton = ({ title, onPress, disabled, isLoading, children }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={isLoading ? undefined : onPress} disabled={disabled || isLoading}>
      <View style={styles.buttonShadow}>
        <LinearGradient
          colors={['#92a3fd', '#9dceff']}
          style={styles.buttonContainer}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            children ? (
              children
            ) : (
              <Text style={styles.buttonText}>{title}</Text>
            )
          )}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
