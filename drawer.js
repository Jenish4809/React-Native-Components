// import { Button, DrawerLayoutAndroid, View, Text } from "react-native";
// import React, { useRef } from "react";

// import { View } from "react-native"

// export const Drawer = () => {
//   const drawerref = useRef(null);
//   const open = () => {
//     drawerref.current.open();
//   };
//   const close = () => {
//     drawerref.current.close();
//   };

//   const navigation = () => {
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
//         First Elem
//       </Text>
//       <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
//         Second Elem
//       </Text>
//       <Button title="Close whith this" onPress={() => close}></Button>
//     </View>;
//   };
//   return (
//     <View>
//       <DrawerLayoutAndroid
//         ref={drawerref}
//         drawerWidth={300}
//         drawerPosition="left"
//         renderNavigationView={() => navigation()}
//       >
//         <View
//           style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//         >
//           <Text>Main Content</Text>
//           <Button title="Open Drawer" onPress={() => open}></Button>
//         </View>
//       </DrawerLayoutAndroid>
//     </View>
//   );
// };

// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   ScrollView,
//   StatusBar,
// } from "react-native";
// export const Radio = () => {
//   const Data = [
//     {
//       id: "1",
//       title: "jenish",
//       email: "Jen@gmail",
//     },
//     {
//       id: "2",
//       title: "karan",
//       email: "Jen@gmail",
//     },
//     {
//       id: "3",
//       title: "kaushik",
//       email: "Jen@gmail",
//     },
//     {
//       id: "4",
//       title: "babu",
//       email: "Jen@gmail",
//     },
//     {
//       id: "5",
//       title: "jenish",
//       email: "Jen@gmail",
//     },
//   ];
//   const [radio, setRadio] = useState(1);
//   return (
//     <View style={styles.main}>
//       <StatusBar barStyle={"default"} />
//       <ScrollView>
//         {Data.map((item, index) => (
//           <TouchableOpacity key={index} onPress={() => setRadio(item.id)}>
//             <View style={styles.radiowrap}>
//               <View style={styles.radio}>
//                 {radio === item.id ? <View style={styles.fill}></View> : null}
//               </View>
//               <View style={styles.radiotext}>
//                 <Text style={styles.rt}>{item.title}</Text>
//                 <Text style={styles.rt}>{item.email}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     // alignItems: "center",
//     backgroundColor: "#ff7f50",
//   },
//   rt: {
//     fontSize: 20,
//     color: "#ffe4c4",
//   },
//   radiotext: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10,
//     alignItems: "center",
//   },
//   radiowrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     // gap: 20,
//   },
//   fill: {
//     backgroundColor: "#8b008b",
//     height: 30,
//     width: 30,
//     borderRadius: 20,
//     marginTop: 3,
//   },
// });

// import { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Platform,
//   StatusBar,
//   ActivityIndicator,
//   Button,
// } from "react-native";
// export const Indicator = () => {
//   const [active, setActive] = useState(false);
//   const display = () => {
//     setActive(true);
//     setTimeout(() => {
//       setActive(false);
//     }, 2000);
//   };
//   return (
//     <View style={styles.mian}>
//       <StatusBar barStyle={"default"} />
//       <View style={styles.inner}>
//         {active ? (
//           <ActivityIndicator size={50} color={"red"} animating={active} />
//         ) : null}
//         <Button title="Press to Hide" onPress={display} />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   mian: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "salmon",
//   },
//   inner: {
//     gap: 20,
//   },
// });

import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";

export const press = () => {
  return (
    <View style={styles.main}>
      <Pressable onPressOut={() => console.warn("long press")}>
        <Text style={styles.btn}>Press Here</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  btn: {
    backgroundColor: "red",
    padding: 10,
    margin: 30,
    color: "#fff",
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    shadowColor: "#1c6e71",
    elevation: 10,
  },
});
