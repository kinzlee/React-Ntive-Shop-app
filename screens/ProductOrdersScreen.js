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
  const [isLoading, setIsLoading] = useState(true);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    console.log(isLoading, "seteeeeeeeeeeeeeeeee");
    dispatch(actionOrders.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </View>;
  }

  // if (orders.length === 0 || !orders) {
  //   return (
  //     <View style={styles.content}>
  //       <Text style={styles.text}>
  //         No orders found. Please try adding the items of your choice to the
  //         cart, then order them!
  //       </Text>
  //     </View>
  //   );
  // }

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
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductOrdersScreen;
