import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./Redux/action";
import { useEffect, useState } from "react";
// import { useFonts } from "expo-font";

export const Product = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  // const [fontsLoaded] = useFonts({
  //   Black: require("../assets/fonts/Montserrat-Black.ttf"),
  //   Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
  //   Italic: require("../assets/fonts/Montserrat-Italic.ttf"),
  //   Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
  //   Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
  //   SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return undefined;
  // }

  const item = props.item;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.reducer);

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

  const CommonBtn = ({ onPress, name }) => {
    return (
      <TouchableOpacity style={styles.btnsty} onPress={onPress}>
        <Text style={styles.btntext}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.border}>
      <Text style={styles.productfont}>{item.name}</Text>
      <Text style={styles.productfont}>{item.price}</Text>
      <Text style={styles.productfont}>{item.color}</Text>
      <Image source={item?.image} style={styles.imagesty} />
      {isAdded ? (
        <CommonBtn
          name={"Remove from cart"}
          onPress={() => handleRemoveCart(item)}
        />
      ) : (
        <CommonBtn name={"Add to cart"} onPress={() => handleAddToCart(item)} />
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
    // fontFamily: "SemiBold",
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
