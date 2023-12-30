import { ReactElement } from "react";
import { View, ViewStyle, } from "react-native"

import { HStackProps } from './types'

const HStack = ({ flexDirection = 'row', display = 'flex', space = 12, style, padding, justifyContent, alignItems, alignContent, paddingVertical, paddingHorizontal, children, paddingTop, paddingBottom, paddingLeft, paddingRight, margin, marginHorizontal, marginVertical, marginTop, marginBottom, marginLeft, marginRight, }: HStackProps) => {

    const styleMerged = {
        flexDirection,
        display,
        justifyContent,
        alignContent,
        alignItems,
        gap: style?.gap ? style.gap : space,
        padding,
        paddingVertical,
        paddingHorizontal,
        children,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        margin,
        marginHorizontal,
        marginVertical,
        marginTop,
        marginBottom, marginLeft,
        marginRight,
        ...style
    }

    return (
        <View style={styleMerged} >
            {children}
        </View>
    )
};

export default HStack;