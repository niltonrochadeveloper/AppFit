import React, { FC, useEffect, useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Modal from "../../components/Core/Modal";
import { Button } from "../../components/Core";
import { StatusBar } from "expo-status-bar";
import usePokemonApi from "../../hooks/pokemon";
import { Image } from "expo-image"
import { LoginProps } from "./types";

const Login: FC<any> = ({ navigation }: LoginProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const { data, setPokemonName, triggerGetPokemon } = usePokemonApi()

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
                        {data && data.map((item: any) => (<Image
                            style={{ width: 50, height: 50 }}
                            source={item?.sprites.front_default}
                            contentFit="cover"
                            transition={1000}
                        />))} 
                        <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
                        <Button title="Acessar" onPress={() => setModalIsOpen(true)} />
                    </View>
                </View>
            </View>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <Text>OK</Text>
            </Modal>
        </SafeAreaView>
    )
}

export default Login
