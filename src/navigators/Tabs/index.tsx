import React, { useContext } from "react";

import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "../../screens/Home";
import Dieta from "../../screens/Dieta";
import Timer from "../../screens/Timer";
import Barbell from "../../screens/Treino";
import Configuracao from "../../screens/Configuracao";



import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();



const Tabs = () => {

    

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const icons: any = {
                    Home: 'home-outline',
                    Timer: 'timer-outline',
                    Diet: 'leaf-outline',
                    Barbell: 'barbell-outline',
                    Configuracao: 'cog-outline',
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
                height: 60,
                position: 'absolute',
                bottom: 22,
                marginHorizontal: 16,
                borderRadius: 12,
            },
            tabBarActiveTintColor: '#008080',
            headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} options={{ title: 'Início', }} />
        <Tab.Screen name="Timer" component={Timer} options={{ title: 'Timer', }} />
        <Tab.Screen name="Barbell" component={Barbell} options={{ title: 'Treino', }} />
        <Tab.Screen name="Diet" component={Dieta} options={{ title: 'Dieta' }} />
        {/* <Tab.Screen name="Configuracao" component={Configuracao} options={{ title: 'Config' }} /> */}
      </Tab.Navigator>
    );
  }

  export default Tabs;