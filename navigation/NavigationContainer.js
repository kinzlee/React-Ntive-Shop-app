import React, { useEffect, useRef } from "react";
import ShopNavigation from "./ShopNavigation";
import { useSelector } from "react-redux";
import { NavigationAction } from "@react-navigation/native";

const NavigationContainer = props => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.navigate("Shop");
    }
  });

  return <ShopNavigation ref={navRef} />;
};

export default NavigationContainer;
