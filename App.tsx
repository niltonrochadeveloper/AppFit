import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View , StatusBar} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type UserProps = {
  nome: string;
  idade: number;
  altura: number;
  peso: string;
}









function Barbell() {
  return (
    <SafeAreaOnScrollView>
      <View style={{  }}>
          <Text>Treino</Text>
        </View>
    </SafeAreaOnScrollView>
  )
}

function Configuracao() {
  return (
    <SafeAreaOnScrollView>
      <View style={{  }}>
          <Text>Configuração</Text>
        </View>
    </SafeAreaOnScrollView>
  )
}

function StackStore() {
  return (
      <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="Store" component={Store} options={{  }} />
      </Stack.Navigator>
  )
}

function StackDieta() {
  return (
      <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="Dieta" component={Dieta} options={{  }} />
      </Stack.Navigator>
  )
}

function StackBarbell() {
  return (
    <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Barbell" component={Barbell} options={{  }} />
    </Stack.Navigator>
  )
}

function StackConfiguracao() {
  return (
    <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Configuracao" component={Configuracao} options={{  }} />
    </Stack.Navigator>
  )
}

interface StackNameProps {
  Home: string;
  HomeScreen: string;
  Store: string;
  StackStore: string;
  Diet: string;
  StackDiet: string;
  Barbell: string;
  StackBarbell: string;
  Configuracao: string;
  StackConfiguracao: string;
}


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons: any = {
          Home: 'home-outline',
          Store: 'cart-outline',
          StackStore: 'cart-outline',
          Diet: 'leaf-outline',
          StackDiet: 'leaf-outline',
          Barbell: 'barbell-outline',
          StackBarbell: 'barbell-outline',
          Configuracao: 'cog-outline',
          StackConfiguracao: 'cog-outline',
        };
  
        return (
          <Ionicons
            name={icons[route.name]}
            color={color}
            size={size}
          />
        );
      },
      tabBarStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        height: 60
      },
      tabBarActiveTintColor: '#008080',
    })}>
        <Stack.Group screenOptions={{ headerShown: false, presentation: 'modal' }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início', }} />
            <Tab.Screen name="StackStore" component={StackStore} options={{ title: 'Loja'}} />
            <Tab.Screen name="Diet" component={StackDieta} options={{ title: 'Dieta' }} />
            <Tab.Screen name="StackBarbell" component={StackBarbell} options={{ title: 'Treino' }} />
            <Tab.Screen name="StackConfiguracao" component={StackConfiguracao} options={{ title: 'Config' }} />
        </Stack.Group>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
