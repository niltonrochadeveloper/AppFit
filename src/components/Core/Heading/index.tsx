import { Text, ViewStyle } from "react-native"


const Heading = ( { children, colorScheme = "dark", fontSize = 20, fontWeight = 'bold', style, }: { children: any, colorScheme: string, fontSize?: number, fontWeight?: string, style?: any } ) => {

    return (
        <Text style={[ style, { color: colorScheme === 'light' ? '#fff' : '#1d1617', fontSize: fontSize, fontWeight }]} >{children}</Text>
    )
}

export default Heading;