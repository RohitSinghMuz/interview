import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [istStart, setIstStart] = useState(false);

  const startCount = () => {
    setIstStart(true);
    setCount(count => count + 1);
  };

  const stopCount = () => {
    setIstStart(false);
  };
  useEffect(() => {
    let interval: any;
    if (istStart) {
      interval = setInterval(() => {
        setCount(count => count + 1);
      },1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  });

  const resetCount = () => {
    stopCount();
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count} count</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={startCount}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopCount}>
          <Text>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetCount}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  counter: {
    fontSize: 60,
    fontWeight: '700',
    marginBottom: 20,
  },

  input: {
    width: 100,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },

  row: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
});
