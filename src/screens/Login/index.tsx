import { useState } from "react";
import { Image, Pressable, Text, View, StyleSheet, } from "react-native"
import Button from "../../components/Core/Buttons";



const Login = () => {

    const [ teste, setTeste ] = useState<any>(0)

    return (
        <View style={styles.container}>
            <Button onPress={() => setTeste(teste + 1)} >
                Botao
            </Button>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2d2d2d',     
    },
  });