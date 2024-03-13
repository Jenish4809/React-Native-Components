import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
} from "react-native";
import { CommonInput } from "../AsyncStoreData.js/CommonTextInput";
import { colors } from "../AsyncStoreData.js/ComonColor";
import { useEffect, useState } from "react";
import { Btn } from "./Component";
import React, { useRef } from "react";

export const TextSearch = () => {
  const [data, setData] = useState([]);
  const searchApi = async (hello) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${hello}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const input = useRef(null);

  const UpdateValue = () => {
    // input.current.focus();
    input.current.setNativeProps({
      fontSize: 30,
      color: colors.button,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.main}>
        <StatusBar barStyle="default" />
        <Text style={styles.title}>Search Data Using Api</Text>
        <View style={styles.input}>
          <CommonInput text={"Name"} ref={input} />
          <CommonInput text={"Password"} />
          <Btn extraStyle={styles.btn} text={"Update"} onPress={UpdateValue} />
        </View>
        {data.length ? (
          data.map((item) => {
            <View>
              <Text>{item.title}</Text>
            </View>;
          })
        ) : (
          <Text>Data Not Found!</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  title: {
    fontSize: 30,
    margin: 10,
    color: colors.button,
    alignSelf: "center",
  },
  input: {
    gap: 20,
  },
  btn: {
    marginHorizontal: 20,
  },
});
