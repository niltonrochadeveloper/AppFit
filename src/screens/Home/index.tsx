import React from 'react'
import { View, Text } from "react-native"
import SafeAreaOnScrollView from "../../components/Core/SafeAreaView/SafeAreaOnScrollView"
import { handleHome } from '../../services'

export default function HomeScreen() {

  const [ data, setData ] = React.useState<any>('')

  React.useEffect(() => {
    handleHome('Barbell')
  }, [])
  

    const user = {
      nome: 'Nilton Rocha',
      idade: 33,
      altura: 182,
      peso: '80,5',
    }
  
    return (
      <SafeAreaOnScrollView>
        <View style={{  }}>
            <Text>Olá, ,</Text>
          </View>
      </SafeAreaOnScrollView>
    )
  }