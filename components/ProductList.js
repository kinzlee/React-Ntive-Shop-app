import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import PRODUCTS from "../data/dummy-data";

const ProductList = ({ navigation, listData }) => {
  const renderProductItem = itemData => {
    return <ProductItem productName={itemData.item.productName} />;
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderProductItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 13,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductList;
