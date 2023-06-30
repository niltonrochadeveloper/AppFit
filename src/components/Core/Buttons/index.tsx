import { Pressable, Text, } from "react-native"
import { styles } from "./styles"
import { ButtonProps } from "./types";

const Button = ({ text, onPress, children }: ButtonProps) => {

    return (
        <Pressable onPress={onPress} style={styles.button}>
                {text ? '' : children ? <Text style={styles.text} >{children}</Text> : text}
        </Pressable>
    )
};

export default Button;