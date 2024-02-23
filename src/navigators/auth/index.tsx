import SignIn from "../signedIn";
import SignOut from "../signedOut";

import { SafeAreaView, StyleSheet, } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const AuthHandler = () => {

    const { isSign } = useSelector((state: RootState) => state.auth)

    return (
        <SafeAreaView style={styles.safeAreaView}>
            {isSign ? <SignIn /> : <SignOut />}
        </SafeAreaView>
    )
}

export default AuthHandler;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#2d2d2d',
    },
});