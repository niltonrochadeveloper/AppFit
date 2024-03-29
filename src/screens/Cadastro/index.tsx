import { useState } from "react";
import { Dimensions } from "react-native";
import { View, KeyboardAvoidingView, StatusBar, } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Heading, VStack, Button, RadioInput, RadioButton } from "../../components/Core";
import HStack from "../../components/Core/HStack";
import Icon from "../../components/Core/Icon";
import { styles } from './styles'


import { Entypo, Feather, FontAwesome, MaterialCommunityIcons, Ionicons, } from '@expo/vector-icons'
import { useForm } from "react-hook-form";

const Cadastro = () => {

    const [ username, setUsername ] = useState<any>('')
    const [ password, setPassword ] = useState<any>('')
    const [ terms, setTerms ] = useState<any>('')

    const { register } = useForm()

    const [ showPassword, setShowPassword ] = useState<any>('')

    const handleOptionPress = () => {
        setTerms(!terms);
    };

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <KeyboardAvoidingView style={styles.container}>
                    <Heading colorScheme="dark" fontSize={16} fontWeight="normal" >
                        <Text>Olá amigo,</Text>
                    </Heading>
                    <Heading colorScheme="dark" fontWeight={'bold'} >
                        <Text>Criar uma Conta</Text>
                    </Heading>
                    <VStack>
                        <Text color="#fff" >Bem Vindo Novamente</Text>
                        <TextInput {...register('name')} placeholder="Nome Completo" keyboardType="email-address" leftIcon={<Icon as={Feather} name={'user'} />} onChangeText={setUsername} />
                        <TextInput {...register('alias')} placeholder="Apelido (opcional)" keyboardType="email-address" leftIcon={<Icon as={Feather} name={'user'} />} onChangeText={setUsername} />
                        <TextInput {...register('email')} placeholder="E-mail" keyboardType="email-address" leftIcon={<Icon as={Feather} name={'mail'} />} onChangeText={setUsername} />
                        <TextInput {...register('password')} placeholder="Senha" secureTextEntry={showPassword ? false : true} leftIcon={<Icon as={Feather} name="lock" />} rightIcon={<Icon as={Feather} name={showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)} />} onChangeText={setPassword} />
                        
                    </VStack>
                    <View style={{ flex: 1 }} />
                    <Button onPress={() => {}} ><Text>Registrar</Text></Button>
                </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default Cadastro;