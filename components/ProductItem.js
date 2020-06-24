import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const ProductItem = ({ image, onSelectProduct, productName }) => {
  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer} numberOfLines={1}>
                <Text style={styles.title}>{productName}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 230,
    width: "100%",
    backgroundColor: "#ccc",
    overflow: "hidden",
    marginVertical: 10,
    borderRadius: 10
  },
  productRow: {
    flexDirection: "row"
  },
  productDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    height: 10,
    alignItems: "center"
  },
  productHeader: {
    height: "90%"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  }
});

export default ProductItem;
