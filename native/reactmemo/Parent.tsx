import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import Child from "./Child";

interface CityItem {
  city: string;
}

const Parent: React.FC = () => {
  const mycityname: string = "Hyderabad";

  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<CityItem[]>([]);

  const AddData = () => {
    if (city.trim().length === 0) return;

    const newCity: CityItem = {
      city,
    };

    setData([...data, newCity]);
    setCity(""); // reset input
  };

  return (
    <View style={{ width: "90%", marginTop: 20, alignSelf: "center" }}>
      {/* Child Component */}
      <Child cityname={mycityname} />

      {/* Input */}
      <TextInput
        placeholder="Enter City Name"
        value={city}
        onChangeText={setCity}
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: "#999",
          paddingHorizontal: 15,
          marginVertical: 10,
          borderRadius: 8,
        }}
      />

      {/* Button */}
      <Button title="Add Data" onPress={AddData} />

      {/* List */}
      {data.map((item, index) => (
        <View key={index} style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20 }}>{item.city}</Text>
        </View>
      ))}
    </View>
  );
};

export default Parent;
