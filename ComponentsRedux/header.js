import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Btn } from "../Api/Component";

export const Header = ({ onPresss }) => {
  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItem] = useState(0);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.titletext}>
      <Text style={styles.carttext}>Shopping Cart</Text>
      <View style={styles.userview}>
        <Btn text={"User"} extraStyle={styles.btn} onPress={onPresss} />
        <View style={styles.cartview}>
          <Text style={styles.carttext}>{cartItems}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titletext: {
    width: "100%",
    padding: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartview: {
    height: 40,
    width: 40,
    backgroundColor: "#D9EDBF",
    justifyContent: "center",
    borderRadius: 15,
    marginHorizontal: 10,
  },
  carttext: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "500",
    fontFamily: "SemiBold",
  },
  btn: {
    width: "35%",
  },
  userview: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
