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
    <ScrollView>
      <Image source={{ uri: selectedProducts.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <CustomText>{selectedProducts.price}</CustomText>
        <CustomText>{selectedProducts.productDescription}</CustomText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Text>Go To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
