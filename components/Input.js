import React, { useEffect, useReducer } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomText from "./CustomText";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValidInput: action.isValidInput
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValidInput: props.initiallyValid,
    touched: false
  });
  const { onInputChange, id } = props;

  useEffect(() => {
    console.log("effect, >>>>>>>>>>>>>>>>>>>>><<<<<<<<<");
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValidInput);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidInput = true;
    if (props.required && text.trim().length === 0) {
      isValidInput = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValidInput = false;
    }
    if (props.min != null && +text < props.min) {
      isValidInput = false;
    }
    if (props.max != null && +text > props.max) {
      isValidInput = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValidInput = false;
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValidInput: isValidInput });
  };

  const focusLostHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.description}>
      <View style={styles.hederStyle}>
        <CustomText>{props.label}</CustomText>
      </View>
      <TextInput
        {...props}
        style={styles.textStyle}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onFocus={focusLostHandler}
        // onBlur={focusLostHandler}
      />
      {!inputState.isValidInput && inputState.touched && (
        <View style={styles.errorTextContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 5,
    paddingHorizontal: 80,
    justifyContent: "space-around"
    // paddingBottom: 20
  },
  textStyle: {
    fontFamily: "Open-Sans",
    padding: 2,
    color: "#fff"
  },
  errorTextContainer: {
    marginVertical: 5
  },
  errorText: {
    fontFamily: "Open-Sans",
    color: "red",
    fontSize: 14
  },
  hederStyle: {
    paddingRight: 70
  }
});

export default Input;
