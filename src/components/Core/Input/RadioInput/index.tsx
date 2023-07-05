import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../RadioInput/styles';

const RadioInput = ({ onOptionPress, children }: any) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionPress = (value: any) => {
    if (value === selectedOption) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
    if (onOptionPress) {
      onOptionPress(value);
    }
  };

  const renderOptions = () => {
    return React.Children.map(children, (child) => {
      const { value, label }: any = child.props;
      const isSelected = value === selectedOption;

      return (
        <Pressable key={value} style={styles.radioButton} onPress={() => handleOptionPress(value)} >
          <View style={[ styles.radioButtonOuter, isSelected && styles.radioButtonOuterSelected, ]} >
            {isSelected ? <View style={styles.radioButtonInner} /> : <View /> }
          </View>
          <Text style={styles.radioButtonLabel}>{label}</Text>
        </Pressable>
      );
    });
  };

  return <View style={styles.container}>{renderOptions()}</View>;
};

export default RadioInput;
