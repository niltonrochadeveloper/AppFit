import { ReactElement } from "react";
import { ViewStyle } from "react-native";

type JustifyContent = 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end';
type AlignItems = 'center' | 'flex-start' | 'flex-end';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export interface HStackProps {
    display?: any;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    alignContent?: JustifyContent;
    flexDirection?: FlexDirection;
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