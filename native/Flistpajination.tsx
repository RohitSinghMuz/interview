import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const FlistPagination = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const ITEM_PER_PAGE = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      loadMoreData(products, 1);
    }
  }, [products]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    setProducts(json.products);
  };

  const loadMoreData = (list = products, currentPage = page) => {
    const start = (currentPage - 1) * ITEM_PER_PAGE;
    const end = start + ITEM_PER_PAGE;

    const newItems = list.slice(start, end);

    if (newItems.length > 0) {
      setData((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }
  };

  const renderItem = ({ item }:{item:any}) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      onEndReached={() => loadMoreData()}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default FlistPagination;

// ------------------ STYLES --------------------

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 14,
    padding: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    resizeMode: "cover",
  },

  content: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4CAF50",
    marginTop: 6,
  },
});
