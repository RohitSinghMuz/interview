import React, { useState, useMemo } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const UseMemo2 = () => {
  const [search, setSearch] = useState("");

  const products = [
    "iPhone",
    "Samsung",
    "OnePlus",
    "Vivo",
    "Oppo",
    "Pixel",
    "Nothing Phone",
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>

      <TextInput
        style={styles.input}
        placeholder="Search product..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    paddingVertical: 8,
  },
});

export default UseMemo2;
