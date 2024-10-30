import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../pages/login';
import DrawerNavigation from '../DrawerNav/DrawerLayout';
import Enroll from '../../pages/enroll'; // Ensure this is the correct export
import Detail from '../../pages/details';


export type StackScreens = {
    Login: undefined;
    HomeEntry: undefined;
    Detail: { title: string; imageBig: any }; // Ensure this matches what Detail expects
    Enroll: undefined; // This can remain undefined if no params are passed
};

const Stack = createNativeStackNavigator<StackScreens>();
 // Pass StackScreens type to navigator

 const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeEntry" component={DrawerNavigation} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Enroll" component={Enroll} />
        </Stack.Navigator>
    );
};



export default StackNavigation;
