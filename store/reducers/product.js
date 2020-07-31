import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCTS_ERROR,
  SET_PRODUCTS_LOADING,
  SET_PRODUCTS_SUCCESS
} from "../actions/product";
import Product from "../../models/Product";

const initialState = {
  availableProducts: [],
  userProducts: [],
  isError: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true
      };
    case SET_PRODUCTS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    case SET_PRODUCTS_SUCCESS:
      return {
        isError: false,
        isLoading: false,
        availableProducts: action.products,
        userProducts: action.userProducts
      };
    case CREATE_PRODUCT:
      const newProduct = new Product(
        action.productData.id,
        action.productData.ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct)
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.availableProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedAvailableProduct = [...state.availableProducts];
      updatedAvailableProduct[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProduct,
        userProducts: updatedUserProducts
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.pid
        ),

        availableProducts: state.availableProducts.filter(
          product => product.id !== action.pid
        )
      };
  }
  return state;
};
