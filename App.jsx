import React, { useEffect, useState } from 'react';
// import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// import axios from 'axios';
// import ProductCard from './Components/ProductCard';
// import NavigationReact from './config/navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import TabNavigation from './config/TabNavigation';
// import Async_Storage from './Components/Async_Storage';
import Image_Picker from './Components/Image_Picker';
import { TextInput } from 'react-native';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import WelcomeScreen from './Screens/WelcomeScreen';
import StackNavigation from './config/StackNavigation';
import Header from './Components/Header';
import Button from './Components/Button';
// import TabNavigation from './config/TabNavigation';

function App() {
  // const submitHandler = () => {
  //   console.log('Submit button pressed');
  // };
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // if (loading) {
  //   return (
  //     <View style={styles.loader}>
  //       <ActivityIndicator size="large" color="#2196F3" />
  //     </View>
  //   );
  // }

  return (
    // <TabNavigation />
    // <Image_Picker />
<View>
    <Header />
    {/* <Button /> */}
    </View>

    // <StackNavigation />  // Assignment 2
    // <View>
    //   <TextInput onChangeText={(e)=> console.log(e)} placeholder='Enter name' style={{ margin: 20 }} />
    //   <TextInput onChangeText={(e)=> console.log(e)} placeholder='Enter email' style={{ margin: 20 }} />
    //   <TextInput onChangeText={(e)=> console.log(e)} placeholder='Enter password' style={{ margin: 20 }} />
    //   <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
    //     <Text
    //       style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}
    //     >Submit</Text>
    //   </TouchableOpacity> 
    // </View>


    // <FlatList
    //   data={products}
    //   keyExtractor={item => item.id.toString()}
    //   renderItem={({ item }) => <ProductCard product={item} />}
    //   contentContainerStyle={{ paddingBottom: 20 }}
    // />
  )
}

// const styles = StyleSheet.create({
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;