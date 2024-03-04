import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Second = ({ route, navigation }) => {
  const onPress = () => {
    navigation.navigate("First");
  };
  const { name, password } = route.params;

  return (
    <View style={style.main}>
      <Text style={style.tetxt}>Here is Your Name: {name ? name : ""}</Text>
      <Text style={style.tetxt}>Here is Your Password: {password}</Text>
      <View style={style.btn}>
        <Button title="Go to First Page" onPress={onPress} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#8fbc8f",
  },
  tetxt: {
    fontSize: 25,
    marginBottom: 20,
  },
  btn: {
    alignSelf: "center",
    margin: 30,
  },
});
