import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginVertical: 50}}>
              <Text
                  style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5}}
              >Open Camera</Text>
              </TouchableOpacity>
    </View>
  )
}

export default Button