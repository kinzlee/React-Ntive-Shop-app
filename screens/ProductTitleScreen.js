import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductTitleScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Product title Screen</Text>
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

export default ProductTitleScreen;
