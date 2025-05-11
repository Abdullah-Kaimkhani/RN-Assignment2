import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
const About = () => {
    return (
        <View>
            <Text>About</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Text>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} >
                <Text>Go to Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

export default About