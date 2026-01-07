import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(200);

  const incrementData = () => {
    setCount(count + 1);
    console.log("incremented value");
  };

  const decrementData = () => {
    setDecrement(decrement - 1);
    console.log("Decrement value");
  };

  const multiplyValue = useMemo(() => {
    console.log("multiply function");
    return count * 10;
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.multiplyText}>{multiplyValue}</Text>

      <Text style={styles.counterText}>Count: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={incrementData}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={decrementData}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>

      <Text style={styles.counterText}>Decrement: {decrement}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginVertical: 30,
    alignSelf: "center",
    alignItems: "center",
  },
  multiplyText: {
    fontSize: 20,
    marginBottom: 10,
  },
  counterText: {
    fontSize: 22,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default UseMemo;
