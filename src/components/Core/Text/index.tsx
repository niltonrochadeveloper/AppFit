import { Text as TextRN, ViewStyle } from "react-native"


const Text = ({ text, color, style, children }: { text?: string, color?: string, style?: ViewStyle, children?: any, }) => {

    return (
        <TextRN style={[{ ...style, color, }]}  >{text ? text : children}</TextRN>
    )
}

export default Text;