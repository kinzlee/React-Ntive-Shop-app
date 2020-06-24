import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
          name="Product Title"
          component={ProductTitleScreen}
          options={{ title: "Product Title" }}
        />
        <Stack.Screen
          name="Cart"
          component={ProductCartScreen}
          options={{ title: "Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Shop"
          component={ShopNavigation}
          options={{
            drawerLabel: "Shop"
          }}
        />
        <Drawer.Screen
          name="ProductOrders"
          component={ProductOrdersScreen}
          options={{
            drawerLabel: "Orders"
          }}
        />
        <Drawer.Screen
          name="Product Manager"
          component={ProductManagerScreen}
          options={{
            drawerLabel: "Manage Product"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
