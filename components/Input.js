import React, { useEffect, useReducer } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomText from "./CustomText";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  if (action.type === INPUT_CHANGE) {
    return {
      ...state,
      value: action.value,
      isValid: action.isValid
    };
  }
  if (action.type === INPUT_BLUR) {
    return {
      ...state,
      touched: true
    };
  }
  return state;
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initalValue ? props.initalValue : "",
    isValid: props.initiallyValid,
    touched: false
  });

  const { onInputChange } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange]);

  const textChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const focusLostHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.description}>
      <CustomText>{props.label}</CustomText>
      <TextInput
        {...props}
        style={styles.textStyle}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={focusLostHandler}
      />
      {!inputState.isValid && <Text>{props.errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginHorizontal: 5,
    paddingHorizontal: 40
  },
  textStyle: {
    fontFamily: "Open-Sans",
    padding: 2,
    color: "#fff"
  }
});

export default Input;
