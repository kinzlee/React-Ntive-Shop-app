import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import ProductItem from "../components/ProductItem";
import { useDispatch } from "react-redux";
import * as actionProducts from "../store/actions/product";

const ProductManagerList = ({ navigation, listData, item }) => {
  const dispatch = useDispatch();
  const editProductHandler = id => {
    navigation.navigate("EditProduct", { productId: id });
  };

  const deleteItem = id => {
    Alert.alert("Are you sure ?", "Do you really want to delete this item ?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(actionProducts.deleteProduct(id));
        }
      }
    ]);
  };

  const renderProductManagerItem = itemData => {
    return (
      <ProductItem
        productName={itemData.item.productName}
        onSelectProduct={() => {
          editProductHandler(itemData.item.id);
        }}
        onSwitchScreen={() => {
          editProductHandler(itemData.item.id);
        }}
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        productName={itemData.item.productName}
        firstFill={"Edit"}
        carter={deleteItem.bind(this, itemData.item.id)}
        lastFill={"delete"}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={item => item.id}
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
