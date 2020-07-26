import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import ProductList from "../components/ProductList";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as actionProduct from "../store/actions/product";
import colors from "../constants/colors";

const ShopHomeScreen = ({ navigation, route }) => {
  const { spinner, error, availableProduct } = useSelector(state => ({
    spinner: state.products.isLoading,
    error: state.products.isError,
    availableProduct: state.products.availableProducts
  }));

  React.useLayoutEffect(() => {
    console.log("use layout effect, >>>>>><<<<<<<<");
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

  const dispatch = useDispatch();

  // const loadedProducts = useCallback(async () => {
  //   // setError(null);
  //   // setIsLoading(true);
  //   spinner;
  //   try {
  //     console.log("I am here now");
  //   } catch (err) {
  //     throw err;
  //   }
  //   console.log("now i am here");
  // }, [dispatch, spinner, error]);

  // useEffect(() => {
  //   const willFocusComp = navigation.addListener("willFocus", loadedProducts());

  //   return () => {
  //     willFocusComp.remove();
  //   };
  // }, [loadedProducts, navigation]);

  useEffect(() => {
    dispatch(actionProduct.fetchProducts());
    console.log("I was called");
  }, []);
  console.log(error, "^^^^^^^^^^^^^^666666666");

  if (error === true) {
    return (
      <View style={styles.screen}>
        <Text> An error occured!</Text>
        <Button
          title="Try Again"
          onPress={() => dispatch(actionProduct.fetchProducts())}
          color={colors.primaryColor}
        />
      </View>
    );
  }

  if (spinner) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    );
  }

  if (!spinner && availableProduct.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>No Products Found! You shold add some</Text>
      </View>
    );
  }

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
