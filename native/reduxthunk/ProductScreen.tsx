import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchProducts } from "./productActions";
import ProductCard from "./ProductCard";

const ProductScreen = () => {
  const dispatch = useDispatch<any>();
  const { loading, products, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
       showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductCard product={item} />}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

export default ProductScreen;
