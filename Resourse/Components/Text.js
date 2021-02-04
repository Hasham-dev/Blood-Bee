import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TextInput = ({ text }) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const Description = ({ description }) => {
    return (
        <View>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "300",
        paddingBottom: 20,
    },
    description: {
        fontSize: 15,
    }
})

export { TextInput, Description };