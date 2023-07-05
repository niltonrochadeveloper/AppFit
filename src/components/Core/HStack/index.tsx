import { ReactElement } from "react";
import { View, ViewStyle, } from "react-native"


type justifyContent = 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'
type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

const HStack = ({ display = 'flex', gap = 12, flexDirection = 'row', style, children }: { display?: any, justifyContent?: justifyContent, flexDirection?: flexDirection, gap?: any, style?: ViewStyle, children: ReactElement | ReactElement[],}) => {

    return (
        <View style={[style, { display, gap, flexDirection, }]} >
            {children}
        </View>
    )
};

export default HStack;