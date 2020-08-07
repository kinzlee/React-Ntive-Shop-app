import React, { useEffect } from "react";
import {
  View,
  AsyncStorage,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import * as authAction from "../store/actions/auth";
import { useDispatch } from "react-redux";

import colors from "../constants/colors";

const StartupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      console.log(userData, "kklklklklkkkk");
      if (!userData) {
        navigation.navigate("Shop");
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDatee = new Date(expiryDate);

      console.log(expirationDatee, "eeeefefefefe");

      if (expirationDatee <= new Date() || !token || !userId) {
        navigation.navigate("Auth");
        return;
      }

      const expirationTime = expirationDatee.getTime() - new Date().getTime();

      navigation.navigate("Shop");
      dispatch(authAction.authenticate(userId, token, expirationTime));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StartupScreen;
