// import { useEffect, useState } from "react";
// import {
//   StatusBar,
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
// } from "react-native";

// import { View } from "react-native";

// export const Toggle = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <View style={{ backgroundColor: "lightblue", flex: 1 }}>
//       <StatusBar barStyle={"light-content"} />
//       <Text style={styles.textst}>Show/Hide Component</Text>
//       <TouchableOpacity style={styles.btnsty} onPress={() => setShow(!show)}>
//         <Text style={{ fontSize: 20 }}>Show/Hide Button</Text>
//       </TouchableOpacity>
//       {show ? <User /> : null}
//     </View>
//   );
// };

// const User = () => {
//   useEffect(() => {
//     return () => {
//       console.warn("Unmount User");
//     };
//   },[]);
//   return (
//     <View>
//       <Text style={styles.usertxtst}>User is Shown and User Hide</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textst: {
//     color: "#800000",
//     fontSize: 30,
//     width: "100%",
//     textAlign: "center",
//     marginTop: 20,
//     fontWeight: "700",
//   },
//   usertxtst: {
//     fontSize: 24,
//     color: "#800000",
//     marginVertical: 20,
//     alignSelf: "center",
//   },
//   btnsty: {
//     backgroundColor: "#adff2f",
//     height: 35,
//     width: "80%",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     alignSelf: "center",
//     marginTop: 10,
//   },
// });

import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
export const Responsive = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mbox1}>
        <View style={styles.ibox1}>
          <View style={styles.ibox12}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                flexWrap: "wrap",
              }}
            >
              Hello I m here and my name is jenish
            </Text>
          </View>
          <View style={styles.ibox13}></View>
          <View style={styles.ibox14}></View>
        </View>
        <View style={styles.ibox2}>
          <View style={styles.ibox12}></View>
          <View style={styles.ibox13}></View>
          <View style={styles.ibox14}></View>
        </View>
      </View>
      <View style={styles.mbox2}>
        <View style={styles.ibox12}></View>
        <View style={styles.ibox13}></View>
        <View style={styles.ibox14}></View>
        <View style={styles.ibox15}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#363232",
    padding: 15,
  },
  mbox1: {
    flex: 1,
    backgroundColor: "#e9dede",
    padding: 10,
    flexDirection: "row",
  },
  mbox2: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  ibox1: {
    flex: 1,
    backgroundColor: "#a52a2a",
    padding: 20,
  },
  ibox2: {
    flex: 1,
    backgroundColor: "#deb887",
    flexDirection: "row",
    padding: 20,
  },
  ibox12: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    justifyContent: "center",
  },
  ibox13: {
    flex: 1,
    backgroundColor: "#ffd700",
  },
  ibox14: {
    flex: 1,
    backgroundColor: "#2f4f4f",
  },
  ibox15: {
    flex: 1,
    backgroundColor: "#ffd700",
  },
});
