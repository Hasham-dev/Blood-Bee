import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import OnBoarding from '../Pages/OnBoarding';
import Login from '../Pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SignupScreen from '../Pages/SignUpScreen';
import Homescreen from '../Pages/HomeScreen';
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createStackNavigator();

export default function Navigation() {

    const [isFirstLaunch, setFirstLauch] = useState(null);
    let routeName;
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setFirstLauch(true);
            } else {
                setFirstLauch(false)
            }
        })



        GoogleSignin.configure({
            webClientId: '657552621311-9ur9r8qomnngonko66hj5a0nq9941401.apps.googleusercontent.com',
        });
    }, []);

    if (isFirstLaunch == null) {
        return (null);
    } else if (isFirstLaunch == true) {
        routeName = "OnboardingScreen";
    } else {
        routeName = "Login";
    }
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName={routeName}
        >
            <Stack.Screen name="OnboardingScreen" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}