import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItem] = useState(0);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.titletext}>
      <View style={styles.cartview}>
        <Text style={styles.carttext}>{cartItems}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titletext: {
    padding: 10,
    backgroundColor: "orange",
  },
  cartview: {
    height: 40,
    width: 40,
    backgroundColor: "#D9EDBF",
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: 15,
  },
  carttext: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "500",
  },
});
