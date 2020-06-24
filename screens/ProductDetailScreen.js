import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ProductDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Product Detail Screen</Text>
      <Button
        title="Go to Cart"
        onPress={() => {
          navigation.navigate("Cart");
        }}
      />
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

export default ProductDetailScreen;
