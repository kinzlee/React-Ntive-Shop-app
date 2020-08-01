import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../components/OrderItem";
import colors from "../constants/colors";
import * as actionOrders from "../store/actions/orders";

const ProductOrdersScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(actionOrders.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.content}>
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No products found, maybe order some?</Text>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={orders}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount.toFixed(2)}
          date={itemData.item.readable}
          items={itemData.item.items}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 13
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: colors.primaryColor
  }
});

export default ProductOrdersScreen;
