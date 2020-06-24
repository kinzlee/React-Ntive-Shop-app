import React from "react";
import { Platform } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtton";
import ShopHomeScreen from "../screens/ShopHomeScreen";
import ProductCartScreen from "../screens/ProductCartScreen";
import ProductManagerScreen from "../screens/ProductManagerScreen";
import ProductOrdersScreen from "../screens/ProductOrdersScreen";
import ProductTitleScreen from "../screens/ProductTitleScreen";
import EditProductScreen from "../screens/EditProductScreen";
import { RectButton } from "react-native-gesture-handler";

const Stack = createStackNavigator();

ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen
        name="Shop"
        component={ShopHomeScreen}
        options={({ navigation }) => {
          return {
            title: "Shop",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
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

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductOrders"
        component={ProductOrdersScreen}
        options={({ navigation }) => {
          return {
            title: "Orders",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
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
    </Stack.Navigator>
  );
};

const ManagerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductManager"
        component={ProductManagerScreen}
        options={({ navigation }) => {
          return {
            title: "Your Products",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
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
        name="EditProduct"
        component={EditProductScreen}
        options={{
          title: "Edit Product"
        }}
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
          component={OrderNavigator}
          options={{
            drawerLabel: "Orders"
          }}
        />
        <Drawer.Screen
          name="ProductManager"
          component={ManagerNavigator}
          options={{
            drawerLabel: "Manage Product"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
