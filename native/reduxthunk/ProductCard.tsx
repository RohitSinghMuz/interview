import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Product } from "./productTypes";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>{product.category}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 3
  },
  image: {
    height: 150,
    borderRadius: 6,
    marginBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4
  },
  category: {
    fontSize: 12,
    color: "#666"
  }
});
