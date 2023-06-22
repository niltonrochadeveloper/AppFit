import { SafeAreaView, Platform, StatusBar, ScrollView, StyleSheet } from "react-native";


export default function SafeAreaOnScrollView({children} : {children: React.ReactNode}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#2d2d2d'} />
        <ScrollView style={styles.scrollview}>
          {children}
        </ScrollView>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
    },
    scrollview: {
      height: '100%',
    }
})