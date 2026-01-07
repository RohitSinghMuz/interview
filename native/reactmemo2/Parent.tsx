import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ChildComponent from "./ChildComponent";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100);

  return (
    <View style={{ marginTop: 70, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Count: {count}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#4a90e2",
          padding: 10,
          marginVertical: 10,
          borderRadius: 6,
        }}
        onPress={() => setCount(count + 1)}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}>Increment Count</Text>
      </TouchableOpacity>


      <ChildComponent value={price} />
    </View>
  );
};

export default Parent;
