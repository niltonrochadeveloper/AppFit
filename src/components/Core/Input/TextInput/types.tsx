import { FC, ReactElement } from "react";
import { KeyboardTypeOptions, ViewStyle } from "react-native";


export interface TextInputProps {
    value?: any;
    style?: ViewStyle;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    placeholderTextColor?: string;
    leftIcon?: ReactElement;
    secureTextEntry?: boolean;
    rightIcon?: ReactElement;
    onChangeText: any;
    onPress?: any;
} 