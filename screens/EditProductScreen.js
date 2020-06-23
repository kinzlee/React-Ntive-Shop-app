import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProductScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the screen for editing the product</Text>
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

export default EditProductScreen;
