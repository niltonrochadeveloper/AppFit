import { LinearGradientProps } from "expo-linear-gradient";

export interface ButtonProps { 
    text?: string; 
    onPress?: () => void,
    children?: any,
    colors?: any,
    icon?: React.ReactElement,
}