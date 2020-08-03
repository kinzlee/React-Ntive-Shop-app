import React, { useEffect } from "react";
import {
  View,
  AsyncStorage,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import colors from "../constants/colors";

const StartupScreen = ({ navigation }) => {
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        navigation.navigate("Authentication");
        return;
      }
      const transformedData = JSON.parse(userData);
    };

    tryLogin();
  }, []);

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
