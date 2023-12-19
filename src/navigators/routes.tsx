import SignIn from "./signedIn";
import SignOut from "./signedOut";



const Routes = () => {

    const isSign = false

    return (
        <>
            {isSign ? <SignIn /> : <SignOut />}
        </>
    )
}

export default Routes;