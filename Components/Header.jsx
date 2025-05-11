import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice';

const Header = () => {
    const { count } = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const Increment = () => {
        dispatch(increment())
    }
        const Decrement = () => {
        if (count > 0) {
            dispatch(decrement())
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>Counter: {count}</Text>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50 }} onPress={Increment}>
                <Text
                    style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}
                >ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50 }} onPress={Decrement}>
                <Text
                    style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}
                >Del</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header