import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View , StatusBar} from 'react-native';


import SignIn from './src/navigators/signedIn';
import SignOut from './src/navigators/signedOut';
import Routes from './src/navigators/routes';

const Stack = createNativeStackNavigator();


type UserProps = {
  nome: string;
  idade: number;
  altura: number;
  peso: string;
}













// function StackStore() {
//   return (
//       <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
//           <Stack.Screen name="Store" component={Store} options={{  }} />
//       </Stack.Navigator>
//   )
// }

// function StackDieta() {
//   return (
//       <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
//           <Stack.Screen name="Dieta" component={Dieta} options={{  }} />
//       </Stack.Navigator>
//   )
// }

// function StackBarbell() {
//   return (
//     <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
//         <Stack.Screen name="Barbell" component={Barbell} options={{  }} />
//     </Stack.Navigator>
//   )
// }

// function StackConfiguracao() {
//   return (
//     <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
//         <Stack.Screen name="Configuracao" component={Config} options={{  }} />
//     </Stack.Navigator>
//   )
// }

// interface StackNameProps {
//   Home: string;
//   HomeScreen: string;
//   Store: string;
//   StackStore: string;
//   Diet: string;
//   StackDiet: string;
//   Barbell: string;
//   StackBarbell: string;
//   Configuracao: string;
//   StackConfiguracao: string;
// }






export default function App() {

  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
