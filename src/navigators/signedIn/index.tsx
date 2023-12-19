import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootParamsList } from "./types";

import Tabs from "../Tabs";
import Main from "./Main/routes";

const Root = createNativeStackNavigator<RootParamsList>();

const SignIn = () => {

    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Root.Screen name="Tabs" component={Tabs} />
                <Root.Screen name="Main" component={Main} />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default SignIn;