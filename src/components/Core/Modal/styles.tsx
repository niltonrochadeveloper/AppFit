import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      dragIndicator: {
        marginBottom: 20,
        height: 4, 
        backgroundColor: '#00000033', 
        width: '50%', 
        borderRadius: 100, 
        marginTop: -4, 
        alignSelf: 'center',
      },
  });