import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button
} from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import colors from "../constants/colors";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const ProductCartScreen = ({ navigation, route }) => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);

  const cartItems = useSelector(state => {
    return Object.keys(state.cart.items).map(key => ({
      productId: key,
      productPrice: state.cart.items[key].productPrice,
      productTitle: state.cart.items[key].productTitle,
      quantity: state.cart.items[key].quantity,
      sum: state.cart.items[key].sum
    }));
  });

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
          <CustomText>
            Total sum:{" "}
            <Text style={styles.amount}> ${cartTotalAmount.toFixed(2)}</Text>
          </CustomText>
          <View style={styles.btn}>
            <TouchableOpacity disabled={cartItems.length === 0}>
              <Text style={{ color: "#fff" }}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onDelete={() => {}}
          />
        )}
      />
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
  },
  amount: {
    color: colors.primaryColor,
    fontSize: 18
  }
});

export default ProductCartScreen;
