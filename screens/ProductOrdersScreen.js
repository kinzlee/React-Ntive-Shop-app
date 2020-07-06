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
          amount={itemData.item.totalAmount.toFixed(2)}
          date={itemData.item.readable}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default ProductOrdersScreen;
