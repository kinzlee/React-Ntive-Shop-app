import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PRODUCTS from "../data/dummy-data";
import ProductManagerList from "../components/ProductMangerList";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const ProductManagerScreen = ({ navigation, route }) => {
  // const { productId } = route.params;
  const selectedProduct = PRODUCTS.find(product => product.id === productId);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="ios-add-circle"
            onPress={() => {
              navigation.navigate("EditProduct", {
                productId: id
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
