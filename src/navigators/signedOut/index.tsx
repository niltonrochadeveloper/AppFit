import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Login from "../../screens/Login";


import Onboarding from "../../screens/Onboarding";
import { SignOutParamsList } from "./types";

const Stack = createNativeStackNavigator<SignOutParamsList>()

const SignOut = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                
            }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="onboarding" component={Onboarding} />
                <Stack.Screen name="areaLogada" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignOut;