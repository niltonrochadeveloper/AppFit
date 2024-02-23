import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { VStack, Text, TextInput, Button, Icon, HStack } from '../../components/Core';
import { RootState } from '../../store';
import { Feather } from '@expo/vector-icons'
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setIsSign } from '../../store/Auth';

const Welcome = () => {

    const validation = {
        username: {
            defaultValue: ''
        },
        password: {
            defaultValue: ''
        }
    }

    const { isSign } = useSelector((state: RootState) => state.auth)
    const methods = useForm<any>()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const navigation: any = useNavigation()

    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<any> = (data: any) => {
        dispatch(
            setIsSign()
        )
    }



    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 32, paddingTop: 32, paddingBottom: Platform.OS === 'android' ? 32 : 16, backgroundColor: '#fff' }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={{ justifyContent: 'space-between', flex: 1 }} >
                    <View style={{ alignItems: 'center', gap: 12 }}>
                        <Text>Olá,</Text>
                        <Text style={{ fontSize: 24, paddingTop: 4, paddingBottom: 16, fontWeight: '800' }} >Seja Bem-Vindo</Text>
                        <TextInput {...methods.register('username')} placeholder="E-mail" keyboardType="email-address" leftIcon={<Icon as={Feather} name={'mail'} />} />
                        <TextInput {...methods.register('password')} placeholder="Senha" secureTextEntry={!showPassword} keyboardType="visible-password" leftIcon={<Icon as={Feather} name="lock" />} rightIcon={<Icon as={Feather} name={showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)} />} />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, textDecorationLine: 'underline', fontWeight: '500' }}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingVertical: 16 }}>
                    <Button title="Entrar" onPress={methods.handleSubmit(onSubmit)} />
                </View>
            </KeyboardAvoidingView>
            <View style={{ gap: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                    <View style={{ height: 1, backgroundColor: '#929292', flex: 1 }}></View>
                    <Text>ou</Text>
                    <View style={{ height: 1, backgroundColor: '#929292', flex: 1 }}></View>
                </View>
                <View style={{ paddingVertical: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', gap: 2, }}>
                        <Text style={{ fontSize: 12 }}>Ainda não tem uma conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
                            <Text style={{ fontSize: 12, fontWeight: '500' }}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Welcome;
