import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../../screens/Login";
import type { SignOutParamsList } from "./types";
import Cadastro from "../../screens/Cadastro";
import Onboarding from "../../screens/Onboarding";

const Stack = createNativeStackNavigator<SignOutParamsList>()
const SignOut = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignOut;