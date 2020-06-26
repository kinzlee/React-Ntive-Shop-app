import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";

const EditProductScreen = ({ naqvigation, route }) => {
  const { productId } = route.params;

  const selectedProduct = PRODUCTS.find(product => product.id === productId);

  return (
    <View style={styles.screen}>
      <View style={styles.itemContainer}>
        <Text style={styles.headerText}>Title: </Text>
        <View style={styles.item}>
          <CustomText>{selectedProduct.productName}</CustomText>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.headerText}>Price: </Text>
        <View style={styles.item}>
          <CustomText>{selectedProduct.price}</CustomText>
        </View>
      </View>
      <View style={styles.description}>
        <CustomText>{selectedProduct.productDescription}</CustomText>
      </View>
      <View style={styles.uri}>
        <CustomText>{selectedProduct.ImageUrl}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 20,
    marginHorizontal: 3,
    paddingVertical: 10
  },
  headerText: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 14
  },
  item: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between"
  },
  description: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15
  },
  uri: {
    borderColor: "#ccc",
    borderWidth: 3,
    paddingVertical: 15
  }
});

export default EditProductScreen;
