import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: 60,
  },
  buttonText: {
    // color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },
});