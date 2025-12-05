import React, { useState, useCallback } from "react";
import { View, TextInput, Text } from "react-native";

 const DebounceData=()=>{
  const [result, setResult] = useState([]);

  const debounce = (func:any, delay:any) => {
    let timer:any;
    return (...args:any) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const searchAPI = async (query:any) => {
    console.log("Searching for:", query);

    if (!query) {
      setResult([]);
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username_like=${query}`);
      const data = await response.json();
      setResult(data);
      console.log("API Result:", data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  // Debounced function
  const debouncedSearch = useCallback(debounce(searchAPI, 600), []);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search user..."
        style={{
          height: 50,
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
        onChangeText={debouncedSearch}
      />

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Result: {JSON.stringify(result, null, 2)}
      </Text>
    </View>
  );
}

export default DebounceData;