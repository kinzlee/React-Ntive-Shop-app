import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Button
} from "react-native";
import { Card } from "react-native-shadow-cards";
import Input from "../components/Input";
import colors from "../constants/colors";

const Authentication = () => {
  return (
    <KeyboardAvoidingView>
      <Card>
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
            titl="Sign Up"
            color={colors.primaryColor}
            onPress={() => {}}
          />
          <Button
            titl="Sign Up"
            color={colors.secondaryColor}
            onPress={() => {}}
          />
        </ScrollView>
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default Authentication;
