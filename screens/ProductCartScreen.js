import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import colors from "../constants/colors";
import { useSelector } from "react-redux";

const ProductCartScreen = ({ navigation, route }, item) => {
  const availableProducts = useSelector(
    state => state.products.availableProducts
  );
  const { productId } = route.params;
  const selectedProduct = availableProducts.find(
    product => product.id === productId
  );
  return (
    <View style={styles.screen}>
      <Card
        style={{
          padding: 15,
          marginVertical: 50,
          backgroundColor: colors.secondaryColor,
          borderRadius: 15
        }}
      >
        <View style={styles.item}>
          <CustomText>Total sum ${selectedProduct.price}</CustomText>
          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() => {
                console.log("this orders the item");
              }}
            >
              <Text style={{ color: "#fff" }}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <Card
        style={{
          padding: 15,
          marginVertical: 50,
          backgroundColor: colors.secondaryColor,
          borderRadius: 15
        }}
      >
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
              <Ionicons
                name="ios-trash"
                size={25}
                color={colors.primaryColor}
              ></Ionicons>
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
    paddingHorizontal: 5,
    marginHorizontal: 5,
    backgroundColor: colors.primaryColor,
    borderWidth: 3,
    borderColor: colors.surroundColor,
    borderRadius: 15
  },
  icon: {
    paddingHorizontal: 8,
    marginHorizontal: 5
  }
});

export default ProductCartScreen;
