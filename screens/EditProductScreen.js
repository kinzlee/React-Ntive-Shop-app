import React, { useCallback, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import CustomText from "../components/CustomText";
import PRODUCTS from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as actionProducts from "../store/actions/product";
import colors from "../constants/colors";
import Input from "../components/Input";

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
    let updatedFormIsValid = true;
    // Object.keys(updatedValidities).map(key => {
    //   updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    // });
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const EditProductScreen = ({ navigation, route }) => {
  const prodId = route.params.productId;
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId)
  );

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      productName: editedProduct ? editedProduct.productName : "",
      imageUrl: editedProduct ? editedProduct.imageUrl : "",
      productDescription: editedProduct ? editedProduct.productDescription : "",
      price: ""
    },
    inputValidities: {
      productName: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      productDescription: editedProduct ? true : false,
      price: editedProduct ? true : false
    },
    formIsValid: editedProduct ? true : false
  });

  const submitHandler = useCallback(() => {
    // if (!formState.formIsValid) {
    //   Alert.alert(
    //     "Incorrect input!",
    //     "Please check the errors with the form.",
    //     [{ text: "Sure" }]
    //   );
    // }
    if (editedProduct) {
      dispatch(
        actionProducts.updatedProduct(
          prodId,
          formState.inputValues.productName,
          formState.inputValues.productDescription,
          formState.inputValues.imageUrl
        )
      );
    } else {
      dispatch(
        actionProducts.createProduct(
          formState.inputValues.productName,
          formState.inputValues.imageUrl,
          formState.inputValues.productDescription,
          +formState.inputValues.price
        )
      );
    }
    navigation.goBack();
  }, [dispatch, prodId, formState]);

  // useEffect(() => {
  //   navigation.setParams({ submit: submitHandler })
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

  const changeInputHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_UPDATE,
        value: inputValue,
        isValidInput: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    // <KeyboardAvoidingView
    // behavior="padding"
    // keyboardVerticalOffset={}
    // style={{ flex: 1 }}
    // ></KeyboardAvoidingView>
    <View style={styles.screen}>
      <ScrollView>
        <Input
          id="productName"
          label="Title"
          errorText="please input a valid title!"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="next"
          // value={formState.inputValues.productName}
          onChangeText={changeInputHandler}
          initialValue={editedProduct ? editedProduct.productName : ""}
          initiallyValid={!!editedProduct}
          required
        />
        {editedProduct ? null : (
          <Input
            id="price"
            label="Price"
            errorText="please input a valid price"
            keyboardType="decimal-pad"
            returnKeyType="next"
            // value={formState.inputValues.price}
            onInputChange={changeInputHandler}
            required
            min={0.1}
            initiallyValid={!!editedProduct}
          />
        )}

        <Input
          id="productDescription"
          label="Description"
          errorText="please input a valid description"
          keyboardType="default"
          returnKeyType="next"
          autoCapitalize="sentences"
          autoCorrect
          multilne
          numberOfLines={3}
          value={formState.inputValues.productDescription}
          onInputChange={changeInputHandler}
          initialValue={editedProduct ? editedProduct.productDescription : ""}
          initiallyValid={!!editedProduct}
          required
          minLength={3}
        />

        <Input
          id="imageUrl"
          label="Image Url"
          errorText="please input a valid imageUrl"
          keyboardType="default"
          returnKeyType="next"
          autoCapitalize="sentences"
          autoCorrect
          value={formState.inputValues.imageUrl}
          onChangeText={changeInputHandler}
          initialValue={editedProduct ? editedProduct.imageUrl : ""}
          initiallyValid={!!editedProduct}
          required
        />
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
  }
});

export default EditProductScreen;
