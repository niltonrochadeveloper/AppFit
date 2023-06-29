import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import SafeAreaOnScrollView from "../../components/Core/SafeAreaView/SafeAreaOnScrollView"
import { View, Text, Button, HStack, ScrollView, Flex, Pressable, Avatar } from 'native-base';

//services
import { fetchData } from '../../services';
import { FetchExercises } from '../../services/exercises';
import { FetchAttributes } from '../../services/attributes';

import { ExercisesProps } from '../../services/exercises';

const Home = ({navigation}: any) => {


    const user = {
      nome: 'Nilton Rocha',
      idade: 33,
      altura: 182,
      peso: '80,5',
    }  



    return (
      <SafeAreaOnScrollView >

        
        <View px={4} py={6} >
          <Flex direction='row' justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={16} color={'white'} >Olá, <Text fontWeight={500}>{user?.nome}</Text>,</Text>
            <Avatar />
          </Flex>
        </View>

        <Text fontSize={'md'} color={'white'} marginX={4} marginBottom={2} marginTop={2} >Tasks</Text>
        <Pressable onPress={() => {}} style={{ backgroundColor: '#373737', marginHorizontal: 16, borderRadius: 8, minHeight: 120, padding: 15,  }}>
          <Text fontSize={'lg'} color={'white'} >Timer</Text>
        </Pressable>
        <Button onPress={() => {}} backgroundColor={'#6270E4'} color={'white'} margin={4} borderRadius={8} ><Text>botão</Text></Button>

      </SafeAreaOnScrollView>
    )
  }


  export default Home;