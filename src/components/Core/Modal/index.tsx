import React, { Children, ReactNode } from "react";
import { Animated, PanResponder, Modal as RNModal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';

const Modal = ({ children, modalIsOpen, setModalIsOpen, transparent = true }: { children: ReactNode, modalIsOpen: boolean, setModalIsOpen: (val: boolean) => void, transparent?: boolean }) => {

    const animatedHeight = new Animated.Value(300);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            // Ajustar a altura do modal com base no movimento do gesto
            animatedHeight.setValue(300 - gestureState.dy);
        },
        onPanResponderRelease: (_, gestureState) => {
            // Verificar se o gesto é de arrastar para baixo e chegar próximo do fim
            if (gestureState.dy > 0 && gestureState.dy > 100) {
                setModalIsOpen(false);
            } else {
                // Animar para a posição inicial ao soltar
                Animated.spring(animatedHeight, {
                    toValue: 300,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    const closeModal = () => {
        setModalIsOpen(false);
        // Animar a altura do modal ao fechá-lo
        Animated.timing(animatedHeight, {
            toValue: 300,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={closeModal}>
                <RNModal
                    transparent={transparent}
                    visible={modalIsOpen}
                    animationType="slide"
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                    

                        <Animated.View style={[styles.modalContent, { height: animatedHeight }]} {...panResponder.panHandlers}>
                            <View style={styles.dragIndicator} />
                            {children}
                        </Animated.View>
                    </View>
                </RNModal>
            </TouchableOpacity>
        </View>
    )
}

export default Modal;
