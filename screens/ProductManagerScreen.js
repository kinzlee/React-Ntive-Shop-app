import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductManagerScreen = () => {
  return (
    <View style={styles.screen}>
      <Text> This is the screen where the product is being managed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductManagerScreen;
