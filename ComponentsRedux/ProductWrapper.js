import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import { Header } from "./header";
import { Product } from "./product";
import images from "../assets/slider/index";

export const ProductWrapper = (props) => {
  const Products = [
    {
      id: 1,
      name: "Samsung Mobile",
      color: "White",
      price: 30000,
      image: images.img6,
    },
    {
      id: 2,
      name: "Apple Mobile",
      color: "Black",
      price: 150000,
      image: images.img6,
    },

    {
      id: 3,
      name: "Oppo Mobile",
      color: "Green",
      price: 15000,
      image: images.img6,
    },
    {
      id: 4,
      name: "Mi Mobile",
      color: "white",
      price: 5000,
      image: images.img6,
    },
  ];
  const NavUser = () => {
    props.navigation.navigate("User");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Header onPresss={NavUser} />
      <FlatList
        data={Products}
        key={(item) => item.id}
        renderItem={({ item }) => <Product item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
