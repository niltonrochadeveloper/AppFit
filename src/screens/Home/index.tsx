import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Pressable, Button, Alert, } from 'react-native';
import SafeAreaOnScrollView from "../../components/Core/SafeAreaView/SafeAreaOnScrollView"


//styles
import { styles } from './styles';


const Home = ({navigation}: any) => {


    const user = {
      nome: 'Nilton Rocha',
      idade: 33,
      altura: 182,
      peso: '80,5',
    }  



    return (
      <SafeAreaOnScrollView >

      <View style={{ padding: 15, }}>
        <Text style={{ color: '#fff', marginVertical: 15, }}>{user.nome}</Text>
        <View style={{ backgroundColor: '#373737', height: 120, marginBottom: 15, borderRadius: 8, padding: 15, }}>
          <Text style={{ color: '#fff', }}>Timer</Text>
        </View>
        <Pressable style={styles.buttonBlue} onPress={() => Alert.alert('Button with adjusted color pressed')} >
          <Text style={{ textAlign: 'center', padding: 12,  }}>Acessar</Text>
        </Pressable>

      </View>
       
      
      </SafeAreaOnScrollView>
    )
  }


  export default Home;

  // #373737 preto
  // #6270e2 azul botão