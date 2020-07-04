import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";

const CartItem = ({ onDelete }) => {
  return (
    <Card
      style={{
        padding: 15,
        marginVertical: 50,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        elevation: 4
      }}
    >
      <View style={styles.item}>
        <CustomText>
          {"nami"} ${50}
        </CustomText>
        <View style={styles.icon}>
          <TouchableOpacity onPress={onDelete}>
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
  icon: {
    paddingHorizontal: 8,
    marginHorizontal: 5
  }
});

export default CartItem;
