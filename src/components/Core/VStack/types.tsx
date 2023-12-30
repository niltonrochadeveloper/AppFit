import { ReactElement } from "react";
import { ViewStyle } from "react-native";

type JustifyContent = 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type AlignItems = 'center' | 'flex-start' | 'flex-end';

export interface VStackProps {
    display?: any;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    flexDirection?: FlexDirection;
    alignContent?: JustifyContent;
    space?: number;
    style?: ViewStyle;
    padding?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    margin?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    children: ReactElement | ReactElement[];
}