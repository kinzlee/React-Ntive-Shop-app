import React from "react";
import { Platform } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtton';
import ShopHomeScreen from "../screens/ShopHomeScreen";
import ProductCartScreen from "../screens/ProductCartScreen";
import ProductManagerScreen from "../screens/ProductManagerScreen";
import ProductOrdersScreen from "../screens/ProductOrdersScreen";
import ProductTitleScreen from "../screens/ProductTitleScreen";
import EditProductScreen from "../screens/EditProductScreen";

const Stack = createStackNavigator();

ShopNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Shop">
        <Stack.Screen
          name="Shop"
          component={ShopHomeScreen}
          options={({navigation}) => {
            return {
              title="Shop",
              headerLeft: () => (
                <HeaderButtons>
                  <Item 
                  title="menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}
                  />
                </HeaderButtons>
              )
              };
          }}
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

export default MyDrawer;
