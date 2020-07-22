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
import actionProduct from "../store/actions/product";
import colors from "../constants/colors";
// import * as ActionCart from '../store/actions/cart';

const ShopHomeScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
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

  const dispatch = useDispatch();

  const loadedProducts = async () => {
    // setError(null);
    // setIsLoading(true);
    try {
      await dispatch(actionProduct.fetchProducts());
    } catch (err) {
      // setError(err.message);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    loadedProducts();
  }, [dispatch, loadedProducts]);

  // if (error) {
  //   return (
  //     <View style={styles.screen}>
  //       <Text> An error occured!</Text>
  //       <Button
  //         title="Try Again"
  //         onPress={loadedProducts}
  //         color={colors.primaryColor}
  //       />
  //     </View>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <View style={styles.screen}>
  //       <ActivityIndicator size="large" color={colors.primaryColor} />
  //     </View>
  //   );
  // }

  // if (!isLoading && availableProduct.length === 0) {
  //   return (
  //     <View style={styles.screen}>
  //       <Text>No Products Found! You shold add some</Text>
  //     </View>
  //   );
  // }

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
