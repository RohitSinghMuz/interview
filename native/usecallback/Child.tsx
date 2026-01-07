


import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const  Child=({ ...props })=> {
  console.log("🧒 Child re-rendered");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onDecrement}>
        <Text style={styles.btnText}>Decrease Value</Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(Child);

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  btn: { backgroundColor: "green", padding: 10 },
  btnText: { color: "white" },
});
