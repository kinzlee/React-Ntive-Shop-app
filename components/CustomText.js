import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Open-Sans",
    fontSize: 18
  }
});

export default CustomText;
