import React, { useEffect } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./rootReducer";
import { fetchProductsRequest } from "./productSlice";


 const  ProductScreen=()=>{
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Hello</Text>
      {loading && <ActivityIndicator size="large" />}

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 70, height: 70, borderRadius: 10, marginRight: 15 }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 16 }}>₹ {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}


export default ProductScreen;