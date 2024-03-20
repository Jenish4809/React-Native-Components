import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";

export const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("MainScreen");
    }, 3000);
  }, []);
  return (
    <Image source={require("../assets/splash1.jpg")} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});
