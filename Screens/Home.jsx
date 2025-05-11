import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} >
                <Text>Go to Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')} >
                <Text>Go to About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home