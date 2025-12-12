import React, { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, Text, View } from 'react-native';
import Stopwatch from './native/stopwatch';
import { SafeAreaView } from 'react-native-safe-area-context';
import LangScreen from './native/language/LangScreen';
// import DebounceData from './native/DebounceData';

const App = () => {

  return (
     <LangScreen/>
  );
};
export default App;
