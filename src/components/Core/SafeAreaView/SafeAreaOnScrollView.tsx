import { SafeAreaView, Platform, StatusBar, ScrollView, StyleSheet } from "react-native";


export default function SafeAreaOnScrollView({children} : {children: React.ReactNode}) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ backgroundColor: '#f1f1f1', padding: 20, }}>
          {children}
        </ScrollView>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#008080', 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})