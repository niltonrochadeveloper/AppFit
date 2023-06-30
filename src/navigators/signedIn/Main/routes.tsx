import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../../../screens/Home";
import Timer from "../../../screens/Timer";
import Treino from "../../../screens/Treino";
import Dieta from "../../../screens/Dieta";
import Configuracao from "../../../screens/Configuracao";
import Onboarding from "../../../screens/Onboarding";

//types
import { MainParamsList } from "./types";

const Stack = createNativeStackNavigator<MainParamsList>();

const Main = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="timer" component={Timer} />
            <Stack.Screen name="treino" component={Treino} />
            <Stack.Screen name="dieta" component={Dieta} />
            <Stack.Screen name="configuracao" component={Configuracao} />
            <Stack.Screen name="onboarding" component={Onboarding} />
        </Stack.Navigator>
    )
}

export default Main