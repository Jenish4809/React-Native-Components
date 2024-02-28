import { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export const Toggle = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <Text style={styles.textst}>Show/Hide Component</Text>
      <TouchableOpacity style={styles.btnsty} onPress={() => setShow(!show)}>
        <Text style={{ fontSize: 20 }}>Show/Hide Button</Text>
      </TouchableOpacity>
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  useEffect(() => {
    return () => {
      console.warn("Unmount User");
    };
  });
  return (
    <View>
      <Text style={styles.usertxtst}>User is Shown and User Hide</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textst: {
    color: "#800000",
    fontSize: 30,
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "700",
  },
  usertxtst: {
    fontSize: 24,
    color: "#800000",
    marginVertical: 20,
    alignSelf: "center",
  },
  btnsty: {
    backgroundColor: "#adff2f",
    height: 35,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
});
