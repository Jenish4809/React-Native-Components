import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./Redux/action";
import { useEffect, useState } from "react";

export const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <View style={styles.border}>
      <Text style={styles.productfont}>{item.name}</Text>
      <Text style={styles.productfont}>{item.price}</Text>
      <Text style={styles.productfont}>{item.color}</Text>
      <Image source={item?.image} style={styles.imagesty} />
      {isAdded ? (
        <TouchableOpacity
          style={styles.btnsty}
          onPress={() => handleRemoveCart(item)}
        >
          <Text style={styles.btntext}>Remove to Cart</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btnsty}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.btntext}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  imagesty: {
    height: 200,
    width: 200,
    margin: 5,
  },
  productfont: {
    fontSize: 25,
  },
  btnsty: {
    width: "80%",
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  btntext: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "600",
  },
});
