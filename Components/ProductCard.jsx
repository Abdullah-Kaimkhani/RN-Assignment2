import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {product.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    height: 150,
    borderRadius: 12,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: '#555',
  },
});

export default ProductCard;
