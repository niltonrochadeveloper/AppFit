import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        display: 'flex', 
        width: '100%', 
        flexDirection: 'row',
        columnGap: 8,
        height: 50, 
        borderRadius: 50,  
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'transparent',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});