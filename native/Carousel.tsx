import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww',
    'https://i.pinimg.com/564x/f6/db/21/f6db21735ff3cb2c3b0021eabba3473c.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-black-eyed-susans-1674848363.jpeg',
    'https://thumbs.dreamstime.com/b/frangipani-flowers-10997030.jpg',
    'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=1800&t=st=1702036462~exp=1702037062~hmac=9179481f4c975eae1bf223cf7df33c33ed9425b819e078c9815a74ffaac9dd95',
  ];

  const imgLength = images.length;

  const handleLeft = () => {
    const cIndex = (currentIndex - 1 + imgLength) % imgLength;
    setCurrentIndex(cIndex);
  };

  const handleRight = () => {
    const cIndex = (currentIndex + 1) % imgLength;
    setCurrentIndex(cIndex);
  };

  const handleImgElement = (index:any) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.bulletStyle,
          index === currentIndex && styles.cIndexStyle,
        ]}
        onPress={() => setCurrentIndex(index)}
      />
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const cuIndex = (currentIndex + 1) % imgLength;
      setCurrentIndex(cuIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleLeft}>
          <Text style={styles.arrow}>Left</Text>
        </TouchableOpacity>

        <Image
          source={{uri: images[currentIndex]}}
          style={styles.image}
        />

        <TouchableOpacity onPress={handleRight}>
          <Text style={styles.arrow}>Right</Text>
        </TouchableOpacity>

        <View style={styles.bulletContainer}>
          {images.map((_, index) => handleImgElement(index))}
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  arrow: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  bulletContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bulletStyle: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  cIndexStyle: {
    backgroundColor: 'red',
  },
});