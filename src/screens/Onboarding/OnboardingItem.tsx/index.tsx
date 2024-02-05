import React from 'react'
import { useWindowDimensions } from 'react-native'
import { View, Text, Image } from '@gluestack-ui/themed'
import { styles } from '../styles'
import { OnboardingItemProps } from './types'


const OnboardingItem: React.FC<OnboardingItemProps>  = ({item}) => {

    const { width } = useWindowDimensions()

    console.log('item', item)

    return (
        <View style={[styles.container, { width }]}>
            {item.component}
        </View>
    )
}

export default OnboardingItem