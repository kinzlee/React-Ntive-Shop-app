import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";

const ProductCartScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const selectedProduct = PRODUCTS.find(product => product.id === productId);
  return (
    <View style={styles.screen}>
      <View style={styles.item}>
        <CustomText>Total sum ${selectedProduct.price}</CustomText>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
      <View style={styles.item}>
        <CustomText>
          {selectedProduct.productName} ${}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginVertical: 20
  }
});

export default ProductCartScreen;
