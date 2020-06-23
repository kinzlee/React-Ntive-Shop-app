import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShopHomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>
        This is the Shop Application Home Screen
      </Text>
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
