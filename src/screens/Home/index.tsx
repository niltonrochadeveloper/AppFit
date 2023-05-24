import { View, Text } from "react-native"
import SafeAreaOnScrollView from "../../components/Core/SafeAreaView/SafeAreaOnScrollView"


export default function HomeScreen() {

    const user = {
      nome: 'Nilton Rocha',
      idade: 33,
      altura: 182,
      peso: '80,5',
    }
  
    return (
      <SafeAreaOnScrollView>
        <View style={{  }}>
            <Text>Olá, {user.nome},</Text>
          </View>
      </SafeAreaOnScrollView>
    )
  }