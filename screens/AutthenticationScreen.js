import React, { useCallback, useReducer } from "react";
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
import * as actionAuth from "../store/actions/auth";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";

const FORM_UPDATE = "FORM_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValidInput
    };
    let updatedFormIsValid = true;

    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const Authentication = ({ navigation }) => {
  const dispatch = useDispatch();

  const signupHander = () => {
    dispatch(
      actionAuth.signUp(
        formState.inputValues.email,
        formState.inputValues.password
      )
    );
  };

  const changeInputHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_UPDATE,
        value: inputValue,
        isValidInput: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: ""
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

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
            borderRadius: 20,
            // width: "7  0%",
            padding: 22
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
              onInputChange={changeInputHandler}
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
              onInputChange={() => {
                changeInputHandler;
              }}
              initialValue=""
            />
            <View style={styles.btnContainer}>
              <Button
                title="Sign Up"
                color={colors.primaryColor}
                onPress={signupHander}
              />
            </View>
            <View style={styles.btnContainer}>
              <Button
                title="Switch to Login"
                color={colors.accentColor}
                onPress={() => {}}
              />
            </View>
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
  },
  btnContainer: {
    marginTop: 15
  }
});

export default Authentication;
