import React, { useState } from 'react';
import { View, Modal as ModalRN, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';


// styles
import { styles } from './styles';

export const Modal = ({ children, onClose }: any) => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={showModal}>
        <Text style={styles.buttonText}>Mostrar Passo a Passo</Text>
      </TouchableOpacity>
      <ModalRN visible={modalVisible} animationType="slide" transparent onRequestClose={closeModal}>
        <Pressable onPress={closeModal} style={styles.modalContainer} >
            <View style={styles.contentContainer}>
                {children}
            </View>
        </Pressable>
      </ModalRN>
    </>
  );
};



export default Modal;
