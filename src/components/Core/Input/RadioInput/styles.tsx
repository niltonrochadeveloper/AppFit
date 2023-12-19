import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButtonOuter: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#ADA4A5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButtonOuterSelected: {
      borderColor: '#ADA4A5',
    },
    radioButtonInner: {
      width: 12,
      height: 12,
      borderRadius: 2,
      backgroundColor: '#ADA4A5',
    },
    radioButtonInner2: {
      width: 12,
      height: 12,
      borderRadius: 2,
      backgroundColor: '#eee',
    },
    radioButtonLabel: {
      color: '#ada4A5',
      paddingLeft: 12,
    },
});
  