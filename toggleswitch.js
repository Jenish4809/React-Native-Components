// import React, { useState } from "react";
// import { View, Text, StyleSheet, Switch, StatusBar } from "react-native";
// export const toggle = () => {
//   const [enable, setEnable] = useState(false);
//   const toggleSwitch = () => {
//     setEnable(!enable);
//   };
//   return (
//     <View style={styles.main}>
//       <StatusBar barStyle="default" />
//       <Text style={styles.fsize}>Toggle Switch</Text>
//       <View style={styles.ssty}>
//         <Switch
//           style={styles.switch}
//           trackColor={{ false: "#00008b", true: "#000000" }}
//           thumbColor={enable ? "#008b8b" : "#006400"}
//           onValueChange={toggleSwitch}
//           value={enable}
//         />
//         {!!enable ? <Text>The Switch has been called</Text> : null}
//       </View>
//     </View>
//   );
// };

// import { StatusBar, View } from "react-native";

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: "#808080",
//   },
//   fsize: {
//     fontSize: 30,
//     alignSelf: "center",
//     fontWeight: "700",
//   },
//   ssty: {
//     flex: 1,
//     backgroundColor: "#deb887",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   switch: {
//     transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
//   },
// });

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
export const TouchHigh = () => {
  const [count, setCount] = useState(0);
  const counter = () => {
    return setCount(count + 1);
  };

  const onPressReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.tsty}>Touchable Highlight Example</Text>
      <View
        style={{
          height: 40,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <TouchableWithoutFeedback onPress={counter}>
          <View>
            <Text style={styles.button}>Press Me</Text>
          </View>
        </TouchableWithoutFeedback>
        <Button onPress={onPressReset} title="Reset"></Button>
      </View>
      <View>
        <Text style={styles.csty}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#5f9ea0",
    alignItems: "center",
    justifyContent: "center",
  },
  tsty: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    marginTop: 20,
    backgroundColor: "#d2691e",
    width: "80%",
    height: 40,
    paddingTop: 5,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  csty: {
    fontSize: 30,
  },
});
