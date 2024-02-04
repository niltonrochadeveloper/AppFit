import React from 'react'
import { View, Text } from '@gluestack-ui/themed'
import {styles} from './styles'
import { Animated, useWindowDimensions } from 'react-native'

const Paginator = ({data, scrollX}: {data: Array<any>, scrollX: any}) => {
    const { width } = useWindowDimensions()
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i -1) * width, i * width, (i + 1) * width]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3,1,0.3],
                    extrapolate: 'clamp',
                })

                return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
            })}
        </View>
    )
}

export default Paginator