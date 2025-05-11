import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
// import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const NavigationReact = () => {
  return (
    // <NavigationContainer>
        <Stack.Navigator initialRouteName='Contact'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Contact' component={Contact} />
    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default NavigationReact