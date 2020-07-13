import React, { useCallback, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as actionProducts from "../store/actions/product";
import colors from "../constants/colors";

const FORM_UPDATE = "FORM_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValidInput
    };
    let formIsValid = true;
    Object.keys(updatedValidities).map(key => {
      formIsValid = formIsValid && updatedValidities[key];
    });
    return {
      ...state,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
};

const EditProductScreen = ({ navigation, route }) => {
  const prodId = route.params.productId;
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId)
  );

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.productName : "",
      imageUrl: editedProduct ? editedProduct.imageUrl : "",
      description: editedProduct ? editedProduct.productDescription : "",
      price: ""
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false
    },
    formIsValid: editedProduct ? true : false
  });

  const submitHandler = useCallback(() => {
    if (!titleIsValid) {
      Alert.alert(
        "Incorrect input!",
        "Please check the errors with the form.",
        [{ text: "Sure" }]
      );
    }
    if (editedProduct) {
      dispatch(
        actionProducts.updatedProduct(prodId, title, description, imageUrl)
      );
    } else {
      dispatch(
        actionProducts.createProduct(title, description, imageUrl, +price)
      );
    }
    navigation.goBack();
  }, [dispatch, prodId, title, description, imageUrl, price]);

  // useEffect(() => {
  //   navigation.setParams({ submit: submitHandler });
  // }, [submitHandler]);

  const { productId } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: productId ? "Edit Product" : "Add Product",
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

  const changeTextHandler = (text, inputIdentifier) => {
    let isValidInput = false;
    if (text.trim.length > 0) {
      isValidInput = true;
    } else {
      dispatchFormState({
        type: FORM_UPDATE,
        value: text,
        isValidInput: isValidInput,
        input: inputIdentifier
      });
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.description}>
          <CustomText>TITLE</CustomText>
          <TextInput
            placeholder="Title"
            style={styles.textStyle}
            value={title}
            onChangeText={changeTextHandler.bind(this, "title")}
          />
          {!title && <Text>Please enter a valid text</Text>}
        </View>
        {editedProduct ? null : (
          <View style={styles.description}>
            <CustomText>PRICE</CustomText>
            <TextInput
              placeholder="Price"
              style={styles.textStyle}
              value={price}
              onChangeText={changeTextHandler.bind(this, "price")}
              keyboardType="decimal-pad"
            />
          </View>
        )}
        <View style={styles.description}>
          <CustomText>DESCRIPTION</CustomText>
          <TextInput
            placeholder="Description"
            style={styles.textStyle}
            value={description}
            onChangeText={changeTextHandler.bind(this, "description")}
          />
        </View>
        <View style={styles.description}>
          <CustomText>IMAGE URI</CustomText>
          <TextInput
            placeholder="Image Url"
            style={styles.textStyle}
            value={imageUrl}
            onChangeText={changeTextHandler.bind(this, "imageUrl")}
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
    marginHorizontal: 5,
    paddingHorizontal: 40
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
    padding: 2,
    color: "#fff"
  }
});

export default EditProductScreen;
