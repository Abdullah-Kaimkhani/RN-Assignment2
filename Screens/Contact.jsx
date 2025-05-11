import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
const Contact = () => {
    return (
        <View>
            <Text>Contact</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Text>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')} >
                <Text>Go to About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact