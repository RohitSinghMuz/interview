import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const NameInputValidation = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateName = (text: string) => {
    setName(text);

    if (text.trim().length === 0) {
      setError("Name cannot be empty");
      return;
    }
    const onlyCharsRegex = /^[A-Za-z ]+$/;

    if (!onlyCharsRegex.test(text)) {
      setError("Only letters are allowed");
      return;
    }
    setError("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Name</Text>

      <TextInput
        style={[styles.input, error ? styles.errorBorder : null]}
        placeholder="Enter your name"
        value={name}
        onChangeText={validateName}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default NameInputValidation;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  errorBorder: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 8,
    fontSize: 14,
  },
});
