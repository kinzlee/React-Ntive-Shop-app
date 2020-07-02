import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import ShopNavigation from "./navigation/ShopNavigation";
import { combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "Open-Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open-Sans-Bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}
