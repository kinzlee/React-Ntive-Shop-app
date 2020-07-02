import React from "react";
import { StyleSheet } from "react-native";
import ProductList from "../components/ProductList";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
// import * as ActionCart from '../store/actions/cart';

const ShopHomeScreen = ({ navigation, route }) => {
  const availableProduct = useSelector(
    state => state.products.availableProducts
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="ios-cart"
            onPress={() => {
              navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  return <ProductList listData={availableProduct} navigation={navigation} />;
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
