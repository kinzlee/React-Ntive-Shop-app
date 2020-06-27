import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import Product from "../models/Product";

const ProductOrdersScreen = () => {
  const [toggleView, setToggleView] = useState(false);

  const selectedProduct = PRODUCTS.find(Product => Product.id === "p1");

  const showHideComponent = () => {
    if (toggleView === false) {
      setToggleView(true);
    } else {
      setToggleView(false);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.itemsContainer}>
        <View style={styles.textItem}>
          <CustomText>Price: {selectedProduct.price}</CustomText>
          <CustomText>Date: 9999</CustomText>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={set => showHideComponent(set)}>
            <Text>More</Text>
          </TouchableOpacity>
        </View>
      </View>
      {toggleView ? (
        <View style={styles.extendedContainer}>
          <Text style={styles.textStyle}>Item</Text>
          <View style={styles.inExtContain}>
            <CustomText>productName</CustomText>
            <CustomText>productPrice</CustomText>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 20
  },
  itemsContainer: {
    flexDirection: "column",
    marginVertical: 10,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 2,
    marginHorizontal: 10,
    justifyContent: "space-between",
    paddingHorizontal: 28
  },
  textItem: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  extendedContainer: {
    flexDirection: "row",
    borderBottomColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#000",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 20,
    elevation: 3
  },
  inExtContain: {},
  textStyle: {},
  btn: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductOrdersScreen;
