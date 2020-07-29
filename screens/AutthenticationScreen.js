import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity
} from "react-native";
import { Card } from "react-native-shadow-cards";
import Input from "../components/Input";
import colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const Authentication = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Authentication"
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView>
      <LinearGradient colors={["#80f9bc", "#14643c"]} style={styles.gradient}>
        <Card
          style={{
            padding: 10,
            margin: 20,
            marginVertical: 50,
            backgroundColor: colors.secondaryColor,
            borderRadius: 20
          }}
        >
          <ScrollView>
            <Input
              id="email"
              label="E-mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onValueChange={() => {}}
              initialValue=""
            />

            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onValueChange={() => {}}
              initialValue=""
            />
            <Button
              title="Sign Up"
              color={colors.primaryColor}
              onPress={() => {}}
            />
            <Button
              title="Switch to Login"
              color={colors.accentColor}
              onPress={() => {}}
            />
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    height: "100%",
    width: "100%"
  }
});

export default Authentication;
