import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SignIn from "./signedIn";
import SignOut from "./signedOut";



const Routes = () => {

    const { isSign } = useSelector((state: RootState) => state.auth)
    const { theme } = useSelector((state: RootState) => state.theme)

    return (
        <>
            <StatusBar style={theme === 'light' ? 'auto' : 'light'} />
            {isSign ? <SignIn /> : <SignOut />}
        </>
    )
}

export default Routes;