import React from "react"

import { Pressable, } from "react-native"

import { styles } from "./styles";
import { IconProps } from "./types";


const Icon = ({ as, name, size = 18, color = "#7b6f72", onPress, }: IconProps) => {

    const IconComponent = as

    return (
        <Pressable style={styles.container} onPress={onPress} >
            <IconComponent name={name} size={size} color={color} style={styles.icon} />
        </Pressable>
    )
}

export default Icon;