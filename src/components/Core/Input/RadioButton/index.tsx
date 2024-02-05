import React, { useState } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import Text from '../../Text';

const RadioButton = ({ value, label }: { value: any, label?: string}) => {
    return (
        <Text fontSize='xxs'>{label}</Text>
    );
  };


export default RadioButton;