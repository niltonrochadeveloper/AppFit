import { Text as TextRNE } from "@rneui/themed";
import { Color, Colors, FontSize, FontSizes, FontWeight, FontWeights } from '../../../Theme/'
import { TextProps } from './types'
import { TextStyle } from "react-native";



const Text = ({ text, color = 'default', fontSize = 'sm', fontWeight = 'regular', style, children, textAlign }: TextProps) => {

    const styleMerged = {
        color: Colors[color as Color],
        fontSize: FontSizes[fontSize as FontSize],
        fontWeight: FontWeights[fontWeight] as TextStyle['fontWeight'],
        textAlign,
        ...style
    }

    return (
        <TextRNE style={styleMerged}  >{text ? text : children}</TextRNE>
    )
}

export default Text;