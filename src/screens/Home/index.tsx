import { View, Text, Pressable, Button, Alert, } from 'react-native';

const Home = () => {

  const user = {
    nome: 'Nilton Rocha',
    idade: 33,
    altura: 182,
    peso: '80,5',
  }  

  return (
    <View style={{ padding: 15, }}>
      <Text style={{ color: '#fff', marginVertical: 15, }}>{user.nome}</Text>
      <View style={{ backgroundColor: '#373737', height: 120, marginBottom: 15, borderRadius: 8, padding: 15, }}>
        <Text style={{ color: '#fff', }}>Timer</Text>
      </View>
      <Pressable onPress={() => Alert.alert('Button with adjusted color pressed')} >
        <Text style={{ textAlign: 'center', padding: 12,  }}>Acessar</Text>
      </Pressable>
    </View>
  )
}


  export default Home;