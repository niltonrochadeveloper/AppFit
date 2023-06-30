import { FC, ReactElement } from "react";

export interface ButtonProps { 
    text?: string; 
    onPress?: () => void,
    children?: any,
}