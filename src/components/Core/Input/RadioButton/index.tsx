import React, { useState } from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';

const RadioButton = ({ value, label }: { value: any, label?: string}) => {
    return (
        <Text>{label}</Text>
    );
  };


export default RadioButton;