import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import CustomText from "../components/CustomText";

const ProductItem = ({
  image,
  onSelectProduct,
  productName,
  price,
  onSwitchScreen,
  firstFill,
  lastFill
}) => {
  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              {/* <View style={styles.titleContainer} numberOfLines={1}>
                <Text style={styles.title}>{productName}</Text>
              </View> */}
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ ...styles.productRow, ...styles.productDetail }}>
        <View>
          <TouchableOpacity onPress={onSwitchScreen}>
            <Text>{firstFill}</Text>
          </TouchableOpacity>
        </View>
        <CustomText>{price}</CustomText>
        <View>
          <TouchableOpacity onPress={() => console.log("it works")}>
            <Text>{lastFill}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingVertical: 4,
    justifyContent: "space-between",
    height: 10,
    alignItems: "center"
  },
  productHeader: {
    height: "90%"
  },
  bgImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end"
  }
});

export default ProductItem;
