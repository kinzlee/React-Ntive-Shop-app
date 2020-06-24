import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ProductManagerScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text> This is the screen where the product is being managed</Text>
      <Button
        title="Go to editProduct"
        onPress={() => navigation.navigate("EditProduct")}
      />
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
