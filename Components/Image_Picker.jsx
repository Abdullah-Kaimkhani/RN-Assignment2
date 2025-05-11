import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {launchCamera} from 'react-native-image-picker';

const Image_Picker = () => {
    const [captured_image, setCaptured_Image] = useState('');
    const Camera_Handler = async () => {
        const result = await launchCamera({
            includeBase64: true,
        });
        if (result){
            const uri = result.assets[0].uri;
            setCaptured_Image(uri);
        }
        console.log(result);
    }
  return (
    <View>
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginVertical: 50}} onPress={Camera_Handler}>
        <Text
            style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5}}
        >Open Camera</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {captured_image ? <Image source={{uri: captured_image}} style={{width: 200, height: 200, resizeMode: 'cover'}} /> : null}
        </View>
    </View>
  )
}

export default Image_Picker