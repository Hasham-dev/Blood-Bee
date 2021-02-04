import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        // marginTop: 20,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 6,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})