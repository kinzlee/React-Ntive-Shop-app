import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import CartItem from "../components/CartItem";
import colors from "../constants/colors";

const OrderItem = ({ amount, date, items }) => {
  const [toggleView, setToggleView] = useState(false);

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
        <View style={styles.textItemContainer}>
          <View style={styles.textItem}>
            <CustomText>Price: $ {amount}</CustomText>
          </View>
          <View style={styles.dateStyle}>
            <Text style={styles.text}> {date}</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={set => showHideComponent(set)}>
            <View style={styles.btnStyle}>
              <Text style={styles.btnText}>
                {toggleView ? "Hide Details" : "More Details"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {toggleView ? (
        <View style={styles.extendedContainer}>
          {items.map(cartItem => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
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
    marginVertical: 16,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 2,
    marginHorizontal: 10,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    backgroundColor: colors.primaryColor,
    borderRadius: 15,
    elevation: 5,
    alignItems: "center"
  },
  textItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  textItem: {
    flexDirection: "row",
    padding: 7,
    paddingVertical: 7,
    paddingHorizontal: 20,
    paddingLeft: 15
  },
  extendedContainer: {
    flexDirection: "column",
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "space-between"
  },
  inExtContain: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10
  },
  textStyle: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 20,
    color: "red",
    textAlign: "center"
  },
  dateStyle: {
    paddingVertical: 12,
    paddingRight: 7
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Open-Sans"
  },
  btn: {
    paddingVertical: 7
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 3
  },
  btnText: {
    color: colors.primaryColor
  }
});

export default OrderItem;
