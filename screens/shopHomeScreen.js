import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ProductList from "../components/ProductList";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const ShopHomeScreen = ({ navigation, route }) => {
  // const { id } = route.params;

  // const selectedProducts = PRODUCTS.filter(
  //   product => product.ids.indexOf(id) >= 0
  // );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="ios-cart"
            onPress={() => {
              console.log("this works");
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

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
