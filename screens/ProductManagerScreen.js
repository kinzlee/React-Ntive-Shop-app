import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PRODUCTS from "../data/dummy-data";
import ProductManagerList from "../components/ProductMangerList";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Product from "../models/Product";

const ProductManagerScreen = ({ navigation, route }, here) => {
  const productId = here.id;
  const selectedProducte = PRODUCTS.find(product => product.id === productId);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="ios-add-circle"
            onPress={() => {
              navigation.navigate("EditProduct", {
                productName: here.productName,
                price: here.price,
                productDescription: here.productDescription,
                imageUrl: here.imageUrl
              });
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  return <ProductManagerList listData={PRODUCTS} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductManagerScreen;
