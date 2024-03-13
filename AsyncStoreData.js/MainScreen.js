import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Btn } from "../Api/Component";
import { colors } from "./ComonColor";

export const MainScreen = (props) => {
  const onPressUser = () => {
    props.navigation.navigate("UserData");
  };
  const onPressShow = () => {
    props.navigation.navigate("ShowData");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inmain}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View style={styles.btnbox}>
        <Btn
          extraStyle={styles.button}
          text={"User Form"}
          onPress={onPressUser}
        />
        <Btn
          extraStyle={styles.button}
          text={"Show Data"}
          onPress={onPressShow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  inmain: {
    height: "35%",
    width: "100%",
    backgroundColor: colors.button,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    height: 150,
    width: 150,
  },
  btnbox: {
    height: "60%",
    width: "80%",
    backgroundColor: colors.background,
    elevation: 5,
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
    width: "80%",
  },
});
