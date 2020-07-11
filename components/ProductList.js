import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import { useDispatch } from "react-redux";
import * as ActionCart from "../store/actions/cart";
import { useSelector } from "react-redux";

const ProductList = ({ navigation, listData }) => {
  const dispatch = useDispatch();

  const renderProductItem = itemData => {
    return (
      <ProductItem
        productName={itemData.item.productName}
        onSelectProduct={() => {
          navigation.navigate("Product Detail", {
            productId: itemData.item.id,
            // userId: itemData.item.userId,
            productName: itemData.item.productName,
            porductDescription: itemData.item.porductDescription
          });
        }}
        onSwitchScreen={() => {
          navigation.navigate("Product Detail", {
            productId: itemData.item.id,
            // userId: itemData.item.userId,
            productName: itemData.item.productName,
            porductDescription: itemData.item.porductDescription
          });
        }}
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        productName={itemData.item.productName}
        firstFill={"Details"}
        lastFill={"Cart"}
        carter={() => {
          dispatch(ActionCart.addToCart(itemData.item));
        }}
      />
    );
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
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductList;
