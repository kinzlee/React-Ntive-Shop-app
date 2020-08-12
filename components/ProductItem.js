import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import CustomText from "../components/CustomText";
import colors from "../constants/colors";

const ProductItem = ({
  image,
  onSelectProduct,
  productName,
  price,
  onSwitchScreen,
  firstFill,
  lastFill,
  carter
}) => {
  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productHeader }}>
            <ImageBackground
              source={{ uri: image }}
              style={styles.bgImage}
            ></ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ ...styles.productRow, ...styles.productDetail }}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={onSwitchScreen}>
            <CustomText>{firstFill}</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.placer}>
          <CustomText>{productName}</CustomText>
          <CustomText>$ {price}</CustomText>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={carter}>
            <CustomText>{lastFill}</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 245,
    width: "100%",
    backgroundColor: colors.secondaryColor,
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
  placer: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 5
  },
  productHeader: {
    height: "90%"
  },
  bgImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end"
  },
  btn: {
    borderRadius: 5,
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 5,
    paddingVertical: -3
  }
});

export default ProductItem;
