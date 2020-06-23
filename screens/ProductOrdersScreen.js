import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductOrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the list of orders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductOrdersScreen;
