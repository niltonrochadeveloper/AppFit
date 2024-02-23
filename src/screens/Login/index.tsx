import React, { FC, useEffect, useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Feather } from '@expo/vector-icons'
import Modal from "../../components/Core/Modal";
import { Button, TextInput, VStack } from "../../components/Core";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image"
import { LoginProps } from "./types";
import Icon from "../../components/Core/Icon";
import { auth, signInWithEmailAndPassword } from "../../../firebase.config";

const Login: FC<any> = ({ navigation }: LoginProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleSignIn = async () => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            const user = auth.currentUser
            console.log('user logged', user)
        }).catch((error) => {
            console.log('user error logged', error)

        })
    }

    return (
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
            <StatusBar />
            <View style={{ flex: 1, padding: 16, }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Aplicativo Fitness</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => console.log('Botão 1')} style={{ alignSelf: 'center' }}>
                            <Text>Meu Primeiro Acesso</Text>
                        </TouchableOpacity>
                        <Button title="Cadastrar" onPress={() => navigation.navigate('Onboarding')} />
                        <Button title="Acessar" onPress={() => setModalIsOpen(true)} />
                    </View>
                </View>
            </View>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <VStack space={16}>
                    <TextInput placeholder="E-mail" keyboardType="email-address" leftIcon={<Icon as={Feather} name={'mail'} />} onChangeText={setEmail} />
                    <TextInput placeholder="Senha" secureTextEntry={showPassword ? false : true} keyboardType="visible-password" leftIcon={<Icon as={Feather} name="lock" />} rightIcon={<Icon as={Feather} name={showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)} />} onChangeText={setPassword} />
                    <Button title="Registrar" onPress={handleSignIn} />
                </VStack>
            </Modal>
        </SafeAreaView>
    )
}

export default Login
