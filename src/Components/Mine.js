import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigAst}>✸</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigAst: {
        fontSize: 18,
    }
    
})
