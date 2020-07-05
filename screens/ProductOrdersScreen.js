import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";

const ProductOrdersScreen = ({amount}) => {
  const [toggleView, setToggleView] = useState(false);

  // const selectedProduct = PRODUCTS.find(Product => Product.id === "p1");

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
          <CustomText>Price: $ {amount}</CustomText>
          <CustomText> Date: 9999</CustomText>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={set => showHideComponent(set)}>
            <Text>More</Text>
          </TouchableOpacity>
        </View>
      </View>
      {toggleView ? (
        <View style={styles.extendedContainer}>
          <Text style={styles.textStyle}>{selectedProduct.productName}</Text>
          <View style={styles.inExtContain}>
            <CustomText>{selectedProduct.productName}</CustomText>
            <CustomText> ${selectedProduct.price}</CustomText>
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
    borderBottomWidth: 1,
    padding: 5,
    paddingHorizontal: 10
  },
  extendedContainer: {
    flexDirection: "column",
    borderBottomColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#000",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 20,
    elevation: 3,
    justifyContent: "space-between"
  },
  inExtContain: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 30
  },
  textStyle: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 20,
    color: "red",
    textAlign: "center"
  },
  btn: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductOrdersScreen;
