import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

const ProductManagerList = ({ navigation, listData }) => {
  const renderProductManagerItem = itemData => {
    return (
      <ProductItem
        productName={itemData.item.productName}
        onSelectProduct={() => {
          navigation.navigate("EditProduct");
        }}
      />
    );
  };
};
