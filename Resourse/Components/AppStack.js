import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import Home from '../Pages/HomeScreen';
import DonorsList from '../Pages/DonorsList';
import DonorDetails from '../Pages/DonorDetail';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppStack() {
    return (

        <Stack.Navigator
            headerMode="none"
            initialRouteName={Home}
        >
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="DonorsList" component={DonorsList} />
            <Stack.Screen name="DonorDetails" component={DonorDetails} />
            
        </Stack.Navigator>
    )
}
