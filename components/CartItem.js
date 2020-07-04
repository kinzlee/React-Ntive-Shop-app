import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";

const CartItem = ({ onDelete, quantity, title, amount }) => {
  return (
    <Card
      style={{
        padding: 10,
        marginVertical: 30,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        elevation: 5
      }}
    >
      <View style={styles.item}>
        <CustomText>{quantity}</CustomText>
        <CustomText>{title}</CustomText>
        <View style={styles.icon}>
          <CustomText>$ {amount.toFixed(2)}</CustomText>
          <TouchableOpacity onPress={onDelete} style={styles.delete}>
            <Ionicons
              name="ios-trash"
              size={25}
              color={colors.primaryColor}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 5,
    marginHorizontal: 5,
    backgroundColor: colors.primaryColor,
    borderWidth: 3,
    borderColor: colors.surroundColor,
    borderRadius: 15
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    paddingHorizontal: 3,
    marginHorizontal: 5,
    flexDirection: "row"
  },
  delete: {
    marginLeft: 10
  }
});

export default CartItem;
