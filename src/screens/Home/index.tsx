import React, { useEffect, useState } from 'react'
import { Button, Pressable, StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native';


const Home = ({navigation}: any) => {


    const user = {
      nome: 'Nilton Rocha',
      idade: 33,
      altura: 182,
      peso: '80,5',
    }  

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    return (      
        <ScrollView contentContainerStyle={styles.scrollView} refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
          <Text style={{ color: '#fff', }}>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
    )
  }


  export default Home;

  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#2d2d2d',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });