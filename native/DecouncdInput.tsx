import React, { useCallback, useMemo } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const debounce =(func:any, delay: number) => {
  let timer: any;

  return (...args:any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const App = () => {

    const handleSearchValue=(value:any)=>{
        console.log("value----",value)
    }

  const handleValueChange = useCallback(debounce(handleSearchValue, 1000),[]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type something..."
        style={styles.input}
        onChangeText={handleValueChange}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
