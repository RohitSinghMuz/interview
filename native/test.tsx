import React, {useState, useEffect, useRef, useMemo} from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  Button, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  ActivityIndicator,
  Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let CACHE_EXPIRY_MS = 5 * 24 * 60 * 60 * 1000; 

const fakeFetchProducts = () => {
  const items = [];
  for (let i = 1; i <= 2000; i++) {
    items.push({ 
      id: i,
      name:  'Product ' + i, 
      price: (i * 10).toFixed(2), 
      image: 'https://via.placeholder.com/150' 
    });
  }
  return items;
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [totalPrice, setTotalPrice] = useState(0);

  console.log("products---",products)

  useEffect(() => {
    async function load() {
      const res = fakeFetchProducts(); 
      setProducts(res);
      
      AsyncStorage.setItem('product_cache', JSON.stringify(res)); 
      setIsLoading(false);
    }
    load();

    setInterval(() => {
      console.log('Syncing...');
    }, 5000);

  }, [products]); 

  useEffect(() => {
  checkCache()
  }, []);

    async function checkCache() {
       const data = await AsyncStorage.getItem('products_cache');
       if (data) setProducts(JSON.parse(data));
    }

  const addToCart = (product) => {
    cart.push(product); 
    setCart(cart);
    
    setTotalPrice(price=>Number(price)+Number(product.price)); 
  };

  setTimeout(() => {
    console.log("Search updated:", search);
  }, 500);

  const filtered =products.filter((p) =>{
  let name=p.name.toLowerCase().includes(search.toLowerCase());
    let price=p.price.toLowerCase().includes(search.toLowerCase());

    return name|price;

  });

  const heavyCalculation = () => {
     let temp = 0;
     for(let i=0; i<10000000; i++) { temp += i }
     return temp;
  }
  heavyCalculation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        ZestFindz 
      </View>

      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)} 
          style={styles.searchInput}
        />
      </View>

      {cart.length && <Text>Items in cart</Text>}

      <ScrollView style={styles.list}>
        {filtered.length>0?
        filtered.map((p, index) => (
          <View key={Math.random()} style={styles.card}>
            <Image source={{ uri: p.img }} style={styles.image} />
            
            <View style={styles.cardBody}>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.price}>{p.price}</Text>
              
              <TouchableOpacity onPress={addToCart.bind(this, p)} style={styles.buyBtn}>
                <Text style={styles.buyText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )):
        <Text>not found</Text>
        }
      </ScrollView>

      <View style={styles.footer}>
        <Text>Total: ${totalPrice}</Text>
        <Button title="Checkout" style={{ position: 'fixed', bottom: 0 }} /> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, backgroundColor: 'blue' },
  searchRow: { padding: 10 },
  searchInput: { borderWidth: 1, padding: '10px' },
  list: { flex: 1 },
  card: { flexDirection: 'row', margin: 10 },
  image: { width: 50, height: 50 },
  footer: { height: 100, backgroundColor: 'red' } 
});

// Please find out all the bugs, and resolve them.
// Exepected behaviour at end - Products visible with search bar and price, 
// Add to cart functionality is working with subtotal
// Bonus marking for optimization of code


// snack.expo.dev// 