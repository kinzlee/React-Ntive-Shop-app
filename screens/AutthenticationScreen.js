import React, { useCallback, useReducer, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  ActivityIndicator,
  Alert
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = actionAuth.signUp(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = actionAuth.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);

    // console.log(dispatch(action), "//////////////////");
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

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
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
              onInputChange={changeInputHandler}
              initialValue=""
            />
            <View style={styles.btnContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={colors.primaryColor} />
              ) : (
                <Button
                  title={isSignup ? "Sign Up" : "Login"}
                  color={colors.primaryColor}
                  onPress={authHandler}
                />
              )}
            </View>
            <View style={styles.btnContainer}>
              <Button
                title={`Switch to ${isSignup ? "Login" : "Sign Up"}`}
                color={colors.accentColor}
                onPress={() => {
                  setIsSignup(prevState => !prevState);
                }}
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
