import { View, Text, Pressable, Button, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSignOut } from '../../store/Auth';

const Home = () => {

  const user = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch()
  const onSignOut = () => {
    dispatch(
      setSignOut()
    )
  }

  return (
    <SafeAreaView style={{ padding: 32 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>{user.name}</Text>
        <Pressable onPress={onSignOut} style={{ backgroundColor: 'blue', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 50 }} >
          <Text style={{ color: '#fff' }}>Sair</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


export default Home;