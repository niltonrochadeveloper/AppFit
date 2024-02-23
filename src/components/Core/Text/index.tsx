import { Text as TextRNG } from "@gluestack-ui/themed";
import { TextProps } from './types'
import { TextStyle } from "react-native";
import { lightTheme } from "../../../Theme/lightTheme";
import { useBaseThemes } from "../../../Theme";

const Text = ({ text, color = 'default', fontSize = 'sm', fontWeight = 'regular', style, children, textAlign }: TextProps) => {

    const { Colors, FontSizes, FontWeights } = useBaseThemes()

    const styleMerged = {
        color: Colors[color] as TextStyle['color'],
        fontSize: FontSizes[fontSize] as TextStyle['fontSize'],
        fontWeight: FontWeights[fontWeight] as TextStyle['fontWeight'],
        textAlign,
        ...style
    }

    return (
        <TextRNG style={styleMerged}  >{text ? text : children}</TextRNG>
    )
}

export default Text;