import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PRODUCTS from "../data/dummy-data";
import ProductManagerList from "../components/ProductMangerList";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import orders from "../store/reducers/orders";

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
              navigation.navigate("EditProduct", { productId: null });
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  if (userProducts.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>No Products Found, you should add some !</Text>
      </View>
    );
  }

  return <ProductManagerList listData={userProducts} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductManagerScreen;
