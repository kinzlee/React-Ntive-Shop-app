import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopHomeScreen from "../screens/ShopHomeScreen";
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
        <Stack.Screen
          name="Shop"
          component={ShopHomeScreen}
          options={{ title: "Shop" }}
        />
        <Stack.Screen
          name="Produt Title"
          component={ProductTitleScreen}
          options={{ title: "Product Title" }}
        />
        <Stack.Screen
          name="Cart"
          component={ProductCartScreen}
          options={{ title: "cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
