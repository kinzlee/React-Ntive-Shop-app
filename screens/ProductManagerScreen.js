import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PRODUCTS from "../data/dummy-data";
import ProductManagerList from "../components/ProductMangerList";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const ProductManagerScreen = ({ navigation, route }) => {
  const userProducts = useSelector(state => state.products.userProducts);
  // const selectedProducte = PRODUCTS.find(product => product.id === productId);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="ios-add-circle"
            onPress={() => {
              navigation.navigate("EditProduct", {
                productName: id.productName,
                price: id.price,
                productDescription: id.productDescription,
                imageUrl: id.imageUrl
              });
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  return (
    <ProductManagerList
      listData={userProducts}
      navigation={navigation}
      item={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductManagerScreen;
