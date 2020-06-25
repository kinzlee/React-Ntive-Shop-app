import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";

const ProductCartScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const selectedProduct = PRODUCTS.find(product => product.id === productId);
  return (
    <View style={styles.screen}>
      <View style={styles.item}>
        <CustomText>Total sum ${selectedProduct.price}</CustomText>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              console.log("this orders the item");
            }}
          >
            <Text>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.item}>
        <CustomText>
          {selectedProduct.productName} ${selectedProduct.price}
        </CustomText>
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => {
              console.log("this deletes the item");
            }}
          >
            <Ionicons name="ios-trash" size={20}></Ionicons>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn: {
    paddingHorizontal: 8,
    marginHorizontal: 5
  },
  icon: {
    paddingHorizontal: 8,
    marginHorizontal: 5
  }
});

export default ProductCartScreen;
