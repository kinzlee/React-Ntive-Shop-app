import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as actionProducts from "../store/actions/product";
import colors from "../constants/colors";

const EditProductScreen = ({ navigation, route }) => {
  const prodId = route.params.productId;
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(
    editedProduct ? editedProduct.productName : ""
  );
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.productDescription : ""
  );

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        actionProducts.updatedProduct(prodId, title, description, imageUrl)
      );
    } else {
      dispatch(
        actionProducts.createProduct(title, description, imageUrl, +price)
      );
    }
  }, [dispatch, prodId, title, description, imageUrl, price]);

  // useEffect(() => {
  //   navigation.setParams({ submit: submitHandler });
  // }, [submitHandler]);

  const submitForm = route.params.submit;

  const { productId } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: productId ? "this" : "that",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="md-checkbox-outline"
            onPress={() => {
              submitHandler();
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation, submitHandler]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.description}>
          <CustomText>TITLE</CustomText>
          <TextInput
            placeholder="Title"
            style={styles.textStyle}
            value={title}
            onChangeText={text => setTitle(text)}
          />
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
        <View style={styles.description}>
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
    marginVertical: 65,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 50,
    borderRadius: 10,
    backgroundColor: colors.secondaryColor
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
    paddingVertical: 20,
    marginHorizontal: 10
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
    fontFamily: "Open-Sans",
    padding: 5,
    color: "#fff"
  }
});

export default EditProductScreen;
