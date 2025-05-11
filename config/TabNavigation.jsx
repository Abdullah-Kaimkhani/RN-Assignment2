import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import About from '../Screens/About';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
        tabbaractiveBackgroundColor: 'green',

      }} initialRouteName='Home'>
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="home" size={29} />
          }
        }}
          name='Home' component={Home} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="phone-alt" size={29} />
          }
        }}
          name='Contact' component={Contact} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="question" size={29} />
          }
        }}
          name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation