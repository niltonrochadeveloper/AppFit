import { NavigationProp } from "@react-navigation/native";
import { SignOutParamsList } from "../../navigators/signedOut/types";

export interface LoginProps {
    navigation: NavigationProp<SignOutParamsList>
}