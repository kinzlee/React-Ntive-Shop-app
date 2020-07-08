import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const EditProductScreen = ({ navigation, route }) => {
  const prodId = route.params.productId;
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const submitHandler = () => {
    console.log("this submits");
  };

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const submitForm = route.params.submit;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="md-checkbox-outline"
            onPress={() => {
              submitForm;
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemInput}>
            <CustomText>TITLE</CustomText>
            <TextInput
              placeholder="Title"
              style={styles.textStyle}
              value={title}
              onChangeText={text => setTitle(text)}
            />
          </View>
        </View>
        {editedProduct ? null : (
          <View style={styles.description}>
            <CustomText>PRICE</CustomText>
            <TextInput
              placeholder="Price"
              style={styles.textStyle}
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.description}>
          <CustomText>DESCRIPTION</CustomText>
          <TextInput
            placeholder="Description"
            style={styles.textStyle}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={styles.uri}>
          <CustomText>IMAGE URI</CustomText>
          <TextInput
            placeholder="Image Url"
            style={styles.textStyle}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
        </View>
      </ScrollView>
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
