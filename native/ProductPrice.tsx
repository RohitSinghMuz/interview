import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_KEY = "product_cache";

const fakeFetchProducts = () => {
  const items:any = [];
  for (let i = 1; i <= 2000; i++) {
    items.push({
      id: i,
      name: Math.random() > 0.9 ? null : "Product " + i,
      price: (i * 10).toFixed(2),
      image: "https://via.placeholder.com/150",
    });
  }
  return new Promise((resolve) => setTimeout(() => resolve(items), 1000));
};

 const  ProductPrice=()=> {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState<any>("");
  const [cart, setCart] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [totalPrice, setTotalPrice] = useState<any>(0);

  // Load products (with cache)
  useEffect(() => {
    async function loadProducts() {
      const cached = await AsyncStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        setProducts(parsed);
        setIsLoading(false);
        return;
      }

      const fetched:any = await fakeFetchProducts();
      setProducts(fetched);

      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(fetched));
      setIsLoading(false);
    }

    loadProducts();
  }, []);

  // Add item to cart
  const addToCart = useCallback((product:any) => {
    setCart((prev) => [...prev, product]);
    setTotalPrice((prev:any) => prev + Number(product.price));
  }, []);

  // Filter list
  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p?.name && p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 20 }}>ZestFindz</Text>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* LOADER */}
      {isLoading && <ActivityIndicator size="large" color="blue" />}

      {/* CART INDICATOR */}
      {cart.length > 0 && (
        <Text style={{ padding: 10 }}>Items in cart: {cart.length}</Text>
      )}

      {/* PRODUCT LIST */}
      <ScrollView style={styles.list}>
        {filteredProducts.map((p) => (
          <View key={p.id} style={styles.card}>
            <Image source={{ uri: p.image }} style={styles.image} />

            <View style={styles.cardBody}>
              <Text style={styles.name}>{p.name ?? "Unnamed Product"}</Text>
              <Text style={styles.price}>${p.price}</Text>

              <TouchableOpacity
                onPress={() => addToCart(p)}
                style={styles.buyBtn}
              >
                <Text style={styles.buyText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={{ color: "white", fontSize: 18 }}>
          Total: ${totalPrice.toFixed(2)}
        </Text>
        <Button title="Checkout" />
      </View>
    </View>
  );
}
export default ProductPrice

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "blue",
    alignItems: "center",
  },
  searchRow: {
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#ddd",
  },
  list: { flex: 1 },
  card: { flexDirection: "row", margin: 10, backgroundColor: "#f9f9f9", padding: 10, borderRadius: 8 },
  cardBody: { marginLeft: 10, justifyContent: "center", flex: 1 },
  image: { width: 60, height: 60, borderRadius: 5 },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, marginVertical: 5 },
  buyBtn: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    width: 70,
  },
  buyText: { color: "white" },
  footer: {
    height: 80,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
