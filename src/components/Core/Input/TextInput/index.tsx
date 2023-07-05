import { TextInput as TextInputRN, View, } from "react-native";
import { styles } from "./styles";
import { TextInputProps } from "./types";



const TextInput = ({ value, style, placeholder, keyboardType = "default", onPress, secureTextEntry = false, onChangeText, placeholderTextColor = "#ada4a5", leftIcon, rightIcon, ...props }: TextInputProps) => {

    return (
        <View style={styles.container} >
            {leftIcon && leftIcon}
            <TextInputRN style={[styles.input, { ... style, }]} underlineColorAndroid="transparent" keyboardType={keyboardType} secureTextEntry={secureTextEntry} placeholder={placeholder} placeholderTextColor={placeholderTextColor} value={value} onChangeText={onChangeText} {...props} />
            {rightIcon && rightIcon}
        </View>
    )
}

export default TextInput;