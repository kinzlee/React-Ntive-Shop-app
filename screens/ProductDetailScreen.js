import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";

const ProductDetailScreen = ({ navigation, route }) => {
  const { productId } = route.params;

  const selectedProducts = PRODUCTS.find(product => product.id === productId);

  return (
    <View>
      <Image source={{ uri: selectedProducts.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <CustomText>{selectedProducts.price}</CustomText>
        </View>
        <View style={styles.details}>
          <CustomText>{selectedProducts.productDescription}</CustomText>
        </View>
        <View style={styles.details}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart", {
                productId: selectedProducts.id
              });
            }}
          >
            <Text>Go To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 220
  },
  detailsContainer: {
    marginVertical: 10,
    flexDirection: "column"
  },
  details: {
    padding: 15,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 2,
    elevation: 0.5
  }
});

export default ProductDetailScreen;
