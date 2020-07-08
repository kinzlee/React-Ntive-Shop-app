import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import ProductItem from "../components/ProductItem";
import { useDispatch } from "react-redux";
import * as actionProducts from "../store/actions/product";

const ProductManagerList = ({ navigation, listData, item }) => {
  const dispatch = useDispatch();
  const editProductHandler = id => {
    navigation.navigate("EditProduct", { productId: id });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions(({ navigation }) => {
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add"
            iconName="md-checkbox-outline"
            onPress={() => {
              submitForm;
            }}
          />
        </HeaderButtons>
      );
    });
  }, [navigation]);

  const renderProductManagerItem = itemData => {
    return (
      <ProductItem
        productName={itemData.item.productName}
        onSelectProduct={() => {
          editProductHandler(itemData.item.id);
        }}
        onSwitchScreen={() => {
          editProductHandler(itemData.item.id);
        }}
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        firstFill={"Edit"}
        carter={() => {
          dispatch(actionProducts.deleteProduct(itemData.item.id));
        }}
        lastFill={"delete"}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={item}
        renderItem={renderProductManagerItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductManagerList;
