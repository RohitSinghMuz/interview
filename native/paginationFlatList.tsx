import React, { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const paginationFlatList = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  let load_At_Time_Item = 10;

  useEffect(() => {
    handleAPICall();
  }, []);

  const handleAPICall = () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProduct(data.products));
  };

  console.log('product---', product);

  const renderElement = ({ item }: { item: any }) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
        }}
      >
        <Image
          source={{ uri: item?.thumbnail }}
          style={{ width: 100, height: 150, margin: 10 }}
        />
        <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    if (product.length > 0) {
      loadMoreData(product, 1);
    }
  }, [product]);

  const loadMoreData = (list = product, currentPage = page) => {
    let start = (currentPage - 1) * load_At_Time_Item;
    let end = start + load_At_Time_Item;

    let loadData = list.slice(start, end);
    if (loadData.length > 0) {
      setData(prevData => [...prevData, ...loadData]);
      setPage(cPage => cPage + 1);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{ margin: 10 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderElement}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => loadMoreData()}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
};
export default paginationFlatList;
