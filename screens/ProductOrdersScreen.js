import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";

const ProductOrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.itemsContainer}>
        <View style={styles.textItem}>
          <CustomText>Price: {}</CustomText>
          <CustomText>Date: 9999</CustomText>
        </View>
        <View>
          <TouchableOpacity>
            <Text>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.extendedContainer}>
        <Text style={styles.textStyle}>Item</Text>
        <View style={styles.inExtContain}>
          <CustomText>productName</CustomText>
          <CustomText>productPrice</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  itemsContainer: {
    flexDirection: 'row'
  },
  textItem: {
    flexDirection: 'column'
  },
  extendedContainer: {
    flexDirection: 
  },
  inExtContain: {},
  textStyle: {}
});

export default ProductOrdersScreen;
