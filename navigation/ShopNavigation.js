import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShopHomeScreen from "../screens/shopHomeScreen";
import ProductCartScreen from "../screens/ProductCartScreen";
import ProductManagerScreen from "../screens/ProductManagerScreen";
import ProductOrdersScreen from "../screens/ProductOrdersScreen";
import ProductTitleScreen from "../screens/ProductTitleScreen";
import EditProductScreen from "../screens/EditProductScreen";

const Stack = createStackNavigator();

ShopNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Shop">
        <Stack.Screen name="Shop" component={ShopHomeScreen} />
        <Stack.Screen name="Produt Title" component={ProductTitleScreen} />
        <Stack.Screen name="Cart" component={ProductCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
