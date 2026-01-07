import React from "react";
import { Text, View } from "react-native";

const ChildComponent = ({ value }:any) => {
  console.log("Child Component Rendered!");

  return (
    <View style={{ padding: 10, backgroundColor: "#eee", marginTop: 10 }}>
      <Text style={{ fontSize: 18 }}>Value: {value}</Text>
    </View>
  );
};

// 👇 Prevents re-render unless props change
export default React.memo(ChildComponent);
