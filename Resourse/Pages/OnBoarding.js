import React from 'react';
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { TextInput, Description } from '../Components/Text';
export default function OnboardingScreen({ navigation }) {

    return (
        <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}

            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.container} source={require('../Assets/Images/image1.png')} />,
                    title: <TextInput text="Blood Bee Foundation" />,
                    subtitle: <Description description="Help us in saving millions of lifes" />,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.container} source={require('../Assets/Images/image2.png')} />,
                    title: <TextInput text="Drop of Life" />,
                    subtitle: <Description description="One Pint of Blood can save up to 3 Lives" />,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.container} source={require('../Assets/Images/image3.png')} />,
                    title: <TextInput text="Every Drops Counts" />,
                    subtitle: <Description description="30 Min is all it take to save a life" />,
                },
            ]} />
    )
}


const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
});