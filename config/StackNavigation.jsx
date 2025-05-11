import { View, Text } from 'react-native'
import React from 'react'
import WelcomeScreen from '../Screens/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= 'Welcome' component={WelcomeScreen} options = {{headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options = {{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options = {{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation