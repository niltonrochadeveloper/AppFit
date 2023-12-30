import { TextProps as TextPropsRNE } from "@rneui/themed";
import { Color, Colors, FontSize, FontSizes, FontWeight, FontWeights } from '../../../Theme/'
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TextProps extends TextPropsRNE {
    text?: string
    color?: Color
    fontSize?: FontSize
    fontWeight?: FontWeight | undefined
    children: ReactNode
    textAlign?: 'left' | 'center' | 'right'
    style?: TextStyle
}