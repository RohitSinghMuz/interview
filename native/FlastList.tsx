import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setProducts(json.products ?? []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <View style={styles.card}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />

        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.price}>₹ {item.price}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    ),
    []
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  return (
    <FlashList<Product>
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{ padding: 8 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "green",
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: "#777",
  },
});
