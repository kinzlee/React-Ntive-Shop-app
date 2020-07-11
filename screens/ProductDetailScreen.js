import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import { Card } from "react-native-shadow-cards";
import colors from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCart from "../store/actions/cart";

const ProductDetailScreen = ({ navigation, route }) => {
  const availableProducts = useSelector(
    state => state.products.availableProducts
  );
  const { productId } = route.params;

  const selectedProducts = availableProducts.find(
    product => product.id === productId
  );
  const dispatch = useDispatch();

  return (
    <View>
      <Image source={{ uri: selectedProducts.imageUrl }} style={styles.image} />
      <Card
        style={{
          padding: 10,
          marginVertical: -10.5,
          marginLeft: -1.7,
          backgroundColor: colors.secondaryColor,
          width: 415,
          height: "75%",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20
        }}
      >
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <CustomText>Price : $ {selectedProducts.price}</CustomText>
          </View>
          <View style={styles.details}>
            <CustomText>{selectedProducts.productDescription}</CustomText>
          </View>
          <View style={styles.btnStyle}>
            <TouchableOpacity
              onPress={() => {
                dispatch(ActionCart.addToCart(selectedProducts)),
                  navigation.navigate("Cart");
              }}
            >
              <CustomText>Go To Cart</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 280
  },
  detailsContainer: {
    marginVertical: 10,
    flexDirection: "column"
  },
  details: {
    padding: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    elevation: 0.5
  },
  btnStyle: {
    borderRadius: 18,
    backgroundColor: colors.primaryColor,
    borderWidth: 2,
    borderColor: colors.surroundColor,
    shadowRadius: 2,
    shadowColor: "#000",
    alignItems: "center",
    paddingVertical: 13,
    marginVertical: 7,
    width: 370,
    marginLeft: 15
  }
});

export default ProductDetailScreen;
