import { ReactElement } from "react";
import { View, ViewStyle, } from "react-native"

import { VStackProps } from './types'


const VStack = ( { flexDirection = 'column', display = 'flex', space = 12, justifyContent, alignItems, alignContent, style, padding, paddingVertical, paddingHorizontal, children, paddingTop, paddingBottom, paddingLeft, paddingRight, margin, marginHorizontal, marginVertical, marginTop, marginBottom, marginLeft, marginRight, }: VStackProps) => {

    const styleMerged = {
        flexDirection,
        display,
        gap: style?.gap ? style.gap : space,
        padding,
        justifyContent,
        alignItems,
        alignContent,
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

export default VStack;