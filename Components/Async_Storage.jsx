import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Async_Storage = () => {
    const obj = {
        name: 'Abdullah Kaimkhani',
        age: 21,
        email: 'abdullah@gmail.com'
    }
    const StoreData = async () => {
        AsyncStorage.setItem('userData', obj)
    }
  return (
    <View>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginVertical: 50}} onPress={StoreData}>
            <Text>Store Data</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Async_Storage