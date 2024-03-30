import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export const UiSplash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoarding1");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/NewUi/UiSplash.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
