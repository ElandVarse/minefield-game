import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

// import { Container } from './styles';

export default props => {
    return(
        <Modal 
            onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}
        >
            
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text>Selecione o nível</Text>
                    <TouchableOpacity 
                        style={[styles.button, styles.bgEasy]} 
                        onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Easy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.bgNormal]} 
                        onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.bgHard]} 
                        onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Hard</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },

    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        marginTop: 10,
        padding: 15,
    },

    buttonLabel: {
        fontSize: 30,
        color: '#EEE',
        fontWeight: 'bold'
    },

    bgEasy: {
        backgroundColor: '#49b65d',
    },

    bgNormal: {
        backgroundColor: '#2765F7'
    },

    bgHard: {
        backgroundColor: '#F23337'
    }



})