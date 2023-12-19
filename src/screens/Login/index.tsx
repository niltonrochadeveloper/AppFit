import React, { FC, useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Modal from "../../components/Core/Modal";
import { Button } from "../../components/Core";
import { StatusBar } from "expo-status-bar";

const Login: FC<any> = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    return (
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
            <StatusBar />      
            <View style={{ flex: 1, padding: 16, }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>AppFit</Text>
                </View>                
                <View>
                    <View style={{ flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => console.log('Botão 1')} style={{ alignSelf: 'center' }}>
                            <Text>Meu Primeiro Acesso</Text>
                        </TouchableOpacity>            
                        <TouchableOpacity onPress={() => setModalIsOpen(true)}>
                            <Button title="Acessar" onPress={() => setModalIsOpen(true)} />
                        </TouchableOpacity>
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
