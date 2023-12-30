import { useState } from "react";
import { Dimensions } from "react-native";
import { View, KeyboardAvoidingView, StatusBar, } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Heading, VStack, Button, RadioInput, RadioButton } from "../../components/Core";
import HStack from "../../components/Core/HStack";
import Icon from "../../components/Core/Icon";
import { styles } from './styles'

import { Entypo, Feather, FontAwesome, MaterialCommunityIcons, Ionicons, } from '@expo/vector-icons'
import { CadastroProps } from "./types";
import { TouchableOpacity } from "react-native";


const Cadastro = ({ navigation }: CadastroProps) => {

    const [ username, setUsername ] = useState<any>('')
    const [ password, setPassword ] = useState<any>('')
    const [ terms, setTerms ] = useState<any>('')

    const [ showPassword, setShowPassword ] = useState<any>('')

    const handleOptionPress = () => {
        setTerms(!terms);
    };

     
    return (
        <KeyboardAvoidingView style={styles.container}>
            <VStack style={styles.content}>
                <VStack space={16} alignItems="center" style={styles.card}>
                    <Heading colorScheme="dark" fontSize={16} fontWeight="normal" >
                        <Text>Olá, vamos começar!</Text>
                    </Heading>
                    <Heading colorScheme="dark" fontWeight={'bold'} >
                        <Text fontSize="lg" fontWeight='black'>Crie sua Conta no AppFit</Text>
                    </Heading>
                    <TextInput placeholder="Nome Completo" keyboardType="default" leftIcon={<Icon as={Feather} name={'user'} />} onChangeText={setUsername} />
                    <TextInput placeholder="Apelido (opcional)" keyboardType="default" leftIcon={<Icon as={Feather} name={'user'} />} onChangeText={setUsername} />
                    <TextInput placeholder="E-mail" keyboardType="email-address" leftIcon={<Icon as={Feather} name={'mail'} />} onChangeText={setUsername} />
                    <TextInput placeholder="Senha" secureTextEntry={showPassword ? false : true} keyboardType="visible-password" leftIcon={<Icon as={Feather} name="lock" />} rightIcon={<Icon as={Feather} name={showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)} />} onChangeText={setPassword} />
                    <VStack space={40}>                            
                        <RadioInput onOptionPress={() => setTerms(!terms)} >
                            <RadioButton value={'option1'} label="Para continuar você precisa aceitar o nossos termos de uso e políticas de privacidade." />
                        </RadioInput>
                    </VStack>
                </VStack>
            </VStack>
            <VStack space={16} style={{ width: '100%' }}>
                <Button title="Registrar" onPress={() => navigation.navigate('Login')} />
                <HStack alignItems="center" justifyContent="space-between">
                    <View style={{ height: .5, width: '45%', backgroundColor: 'black' }} />
                    <Text>ou</Text>
                    <View style={{ height: .5, width: '45%', backgroundColor: 'black' }} />
                </HStack>
                <HStack space={0} justifyContent="center">
                    <Text>Já possui uma conta? </Text><TouchableOpacity><Text color="primary" >Logar</Text></TouchableOpacity>
                </HStack>
            </VStack>
        </KeyboardAvoidingView>
    )
}

export default Cadastro;

