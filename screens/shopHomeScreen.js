import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ProductList from "../components/ProductList";
import PRODUCTS from "../data/dummy-data";

const ShopHomeScreen = ({ navigation, route }) => {
  // const { id } = route.params;

  // const selectedProducts = PRODUCTS.filter(
  //   product => product.ids.indexOf(id) >= 0
  // );

  return <ProductList listData={PRODUCTS} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontFamily: "Open-Sans-Bold"
  }
});

export default ShopHomeScreen;
