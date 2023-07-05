import { Pressable, Text, } from "react-native"
import { styles } from "./styles"
import { ButtonProps } from "./types";

import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ text, onPress, children, colors, icon, }: ButtonProps) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <LinearGradient start={[1, 0]} end={[0, 0]} colors={colors} style={styles.button}>
                {icon && icon }
                {text ? '' : children ? <Text style={styles.text} >{children}</Text> : text}
            </LinearGradient>
        </Pressable>
    )
};

export default Button;