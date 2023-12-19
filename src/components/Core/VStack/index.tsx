import { ReactElement } from "react";
import { View, ViewStyle, } from "react-native"

import { VStackProps} from './types'


const VStack = ( { flexDirection = 'column', display = 'flex', gap = 12, style, padding, paddingVertical, paddingHorizontal, children, paddingTop, paddingBottom, paddingLeft, paddingRight, margin, marginHorizontal, marginVertical, marginTop, marginBottom, marginLeft, marginRight, }: VStackProps) => {

    return (
        <View style={{ ...style, display, gap, flexDirection, width: '100%', padding, paddingHorizontal, paddingVertical, paddingTop, paddingBottom, paddingLeft, paddingRight, margin, marginHorizontal, marginVertical, marginTop, marginBottom, marginLeft, marginRight, }} >
            {children}
        </View>
    )
};

export default VStack;