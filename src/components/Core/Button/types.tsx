import { ReactNode } from "react";

export interface ButtonProps {
    title?: string, 
    onPress: () => void, 
    disabled?: boolean, 
    isLoading?: boolean, 
    children?: ReactNode

}