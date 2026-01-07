import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleDecrement = useCallback(() => {
    setValue((prev) => prev - 1);
    setValue((prev) => prev - 1);
    setValue((prev) => prev - 1);
    setValue((prev) => prev - 1);
  }, []);

  console.log("👨‍💻 App re-rendered");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useCallback Example</Text>

      <Text>Count: {count}</Text>
      <Text>Value: {value}</Text>

      <TouchableOpacity style={styles.btn} onPress={handleIncrement}>
        <Text style={styles.btnText}>Increase Count</Text>
      </TouchableOpacity>

      <Child onDecrement={handleDecrement} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, marginBottom: 20 },
  btn: { backgroundColor: "blue", padding: 10, marginTop: 10 },
  btnText: { color: "white" },
});
