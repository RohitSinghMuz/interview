import React, { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, Text, View } from 'react-native';
import Stopwatch from './native/stopwatch';
import { SafeAreaView } from 'react-native-safe-area-context';
// import DebounceData from './native/DebounceData';

const App = () => {

  return (
    <SafeAreaView>
  <StatusBar barStyle="light-content" backgroundColor="#000" />
    <View style={{margin:10}}>
     <Text>Hello</Text>
    </View>
    </SafeAreaView>
  );
};
export default App;
