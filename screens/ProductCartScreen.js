import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductCartScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Product Cart Screen</Text>
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

export default ProductCartScreen;
