import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import ShopNavigation from "./navigation/ShopNavigation";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import productReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import authReducer from "./store/reducers/auth";
// import NavigationContainer from "./navigation/NavigationContainer";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

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
