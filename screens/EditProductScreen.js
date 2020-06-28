import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const EditProductScreen = ({ navigation, route }) => {
  const { productId } = route.params;

  const selectedProduct = PRODUCTS.find(product => product.id === productId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="md-checkbox-outline"
            onPress={() => {
              console.log("this works");
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.itemContainer}>
        <Text style={styles.headerInputText}>Title: </Text>
        <View style={styles.itemInput}>
          <TextInput
            placeholder="Title"
            style={styles.textStyle}
            defaultValue={selectedProduct.productName}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.headerText}>Price: </Text>
        <View style={styles.item}>
          <CustomText>{selectedProduct.price}</CustomText>
        </View>
      </View>
      <View style={styles.description}>
        <TextInput
          placeholder="Description"
          style={styles.textStyle}
          defaultValue={selectedProduct.productDescription}
        />
      </View>
      <View style={styles.uri}>
        <TextInput
          placeholder="Image Url"
          style={styles.textStyle}
          defaultValue={selectedProduct.imageUrl}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 20,
    marginHorizontal: 3,
    paddingVertical: 10
  },
  headerInputText: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 14,
    paddingVertical: 5
  },
  headerText: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 14
  },
  itemInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: -5
  },
  item: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between"
  },
  description: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15
  },
  uri: {
    borderColor: "#ccc",
    borderWidth: 3,
    paddingVertical: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    elevation: 1
  },
  textStyle: {
    fontFamily: "Open-Sans"
  }
});

export default EditProductScreen;
