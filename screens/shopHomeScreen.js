import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ShopHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>
        This is the Shop Application Home Screen
      </Text>
      <Button
        title="go to product title"
        onPress={() => {
          navigation.navigate("Product Title");
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
  },
  textStyle: {
    fontFamily: "Open-Sans-Bold"
  }
});

export default ShopHomeScreen;
