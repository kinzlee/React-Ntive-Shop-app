import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

const ProductManagerList = ({ navigation, listData }) => {
  const renderProductManagerItem = itemData => {
    return (
      <ProductItem
        productName={itemData.item.productName}
        onSelectProduct={() => {
          navigation.navigate("EditProduct", {
            productId: itemData.item.id,
            price: itemData.item.price,
            productDescription: itemData.item.productDescription,
            imageUri: itemData.item.imageUri
          });
        }}
        onSwitchScreen={() => {
          navigation.navigate("EditProduct", {
            productId: itemData.item.id,
            price: itemData.item.price,
            productDescription: itemData.item.productDescription,
            imageUri: itemData.item.imageUri
          });
        }}
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        firstFill={"Edit"}
        lastFill={"Delete"}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderProductManagerItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductManagerList;
