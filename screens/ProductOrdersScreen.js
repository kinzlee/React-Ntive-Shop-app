import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";

const ProductOrdersScreen = () => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={orders}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readable}
        />
      )}
    />
  );
};

export default ProductOrdersScreen;
