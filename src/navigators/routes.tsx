import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./signedIn";
import SignOut from "./signedOut";


const Routes = () => {

    const isSign = true

    return (
        <>
            {isSign ? <SignIn /> : <SignOut />}
        </>
    )
}

export default Routes;