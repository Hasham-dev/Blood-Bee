/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Navigation from '../Components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Components/AuthProvider';
import AppStack from '../Components/AppStack';

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }



    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    if (!user) {
        return (
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        )
    }
    return (
        <NavigationContainer independent={true}>
            <AppStack />
        </NavigationContainer>
    );
};


export default Routes;
