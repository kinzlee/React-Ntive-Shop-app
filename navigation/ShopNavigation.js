import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  AsyncStorage,
  SafeAreaView,
  View,
  Button
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { availableProducts } from "../screens/ProductDetailScreen";
import HeaderButton from "../components/HeaderButtton";
import AutthenticationScreen from "../screens/AutthenticationScreen";
import ShopHomeScreen from "../screens/ShopHomeScreen";
import ProductCartScreen from "../screens/ProductCartScreen";
import ProductManagerScreen from "../screens/ProductManagerScreen";
import ProductOrdersScreen from "../screens/ProductOrdersScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import EditProductScreen from "../screens/EditProductScreen";
import StartupScreen from "../screens/StartupScreen";
import colors from "../constants/colors";
import * as authActions from "../store/actions/auth";

const headerCustom = {
  headerStyle: {
    backgroundColor: colors.secondaryColor
  },
  headerTintColor: "#fff"
};

const Stack = createStackNavigator();
// let isAuthenticated;
const isAuthenticated = !!AsyncStorage.getItem("userData");

// const tryLogin = async () => {
//   return await AsyncStorage.getItem("userData");
//};

const ShopNavigation = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const tryLogin = async () => {
      const auth = await AsyncStorage.getItem("userData");
      setLoading(false);

      if (auth !== null) {
        setAuthenticated(true);
      }
    };
    tryLogin();
  }, []);
  const auth = AsyncStorage.getItem("userData");
  const authenticate = useSelector(state => state.auth.token);
  return (
    <Stack.Navigator screenOptions={headerCustom}>
      {loading && (
        <Stack.Screen
          name="splash"
          component={StartupScreen}
          options={{ headerShown: null }}
        />
      )}
      {!!authenticate && authenticated && !loading ? (
        <>
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
          <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
          <Stack.Screen
            name="Cart"
            component={ProductCartScreen}
            options={{ title: "Cart" }}
          />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AutthenticationScreen} />
      )}
    </Stack.Navigator>
  );
};

const OrderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerCustom}>
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
    <Stack.Navigator screenOptions={headerCustom}>
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
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const Signout = props => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerItem label="logout" {...props} />
        <Button
          title="Log Out"
          color={colors.primaryColor}
          onPress={() => {
            dispatch(authActions.logout());
            // props.navigation.navigate("Shop");
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const MyDrawer = () => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.navigate("Shop");
    }
  }, [isAuth]);
  return (
    <NavigationContainer ref={navRef}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: colors.primaryColor
        }}
      >
        <Drawer.Screen
          name="Shop"
          component={ShopNavigation}
          options={{
            drawerLabel: "Shop",
            drawerIcon: drawerConfig => (
              <Ionicons name={"md-cart"} size={24} color={drawerConfig.color} />
            )
          }}
        />
        <Drawer.Screen
          name="ProductOrders"
          component={OrderNavigator}
          options={{
            drawerLabel: "Orders",
            drawerIcon: drawerConfig => (
              <Ionicons
                name={"ios-list"}
                size={24}
                color={drawerConfig.color}
              />
            )
          }}
        />
        <Drawer.Screen
          name="ProductManager"
          component={ManagerNavigator}
          options={{
            drawerLabel: "Admin",
            drawerIcon: drawerConfig => (
              <Ionicons
                name={"ios-create"}
                size={24}
                color={drawerConfig.color}
              />
            )
          }}
        />
        <Drawer.Screen name={"Log Out"} component={Signout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
