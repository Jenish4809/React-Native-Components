// import { useState } from "react";
// import { StatusBar, View, StyleSheet, Text, Button, Modal } from "react-native";

// export const DialogBox = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <View style={styles.main}>
//       <StatusBar barStyle={"default"} />
//       <Modal visible={open} transparent={true} animationType="slide">
//         <View style={styles.centerview}>
//           <View style={styles.innerview}>
//             <Text style={styles.text}>Hello Thanks for Open Dialog</Text>
//             <Button title="Close Dialog" onPress={() => setOpen(false)} />
//           </View>
//         </View>
//       </Modal>
//       {!open ? (
//         <View style={styles.outerview}>
//           <Text style={styles.outertext}>Hello World!</Text>
//         </View>
//       ) : (
//         <View style={styles.outerview1}>
//           <Text style={styles.outertext}>Shown Is here</Text>
//         </View>
//       )}
//       <View style={styles.btn}>
//         <Button title="Open Dialog" onPress={() => setOpen(true)}></Button>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: "#ffe4b5",
//   },
//   btn: {
//     flex: 1,
//     justifyContent: "flex-end",
//     marginBottom: 10,
//     width: "80%",
//     alignSelf: "center",
//   },
//   centerview: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-start",
//     marginTop: 20,
//   },
//   innerview: {
//     backgroundColor: "skyblue",
//     padding: 40,
//     borderRadius: 20,
//     shadowColor: "black",
//     elevation: 10,
//     height: 150,
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   outerview: {
//     backgroundColor: "#b22222",
//     alignItems: "center",
//     marginTop: "90%",
//     width: "50%",
//     borderRadius: 10,
//     padding: 10,
//     alignSelf: "center",
//   },
//   outerview1: {
//     backgroundColor: "#9370db",
//     alignItems: "center",
//     marginTop: "90%",
//     width: "50%",
//     borderRadius: 10,
//     padding: 10,
//     alignSelf: "center",
//   },
//   outertext: {
//     fontSize: 36,
//   },
// });

import React, { useState } from "react";
import { StyleSheet, View, Text, StatusBar, Button } from "react-native";

export const customModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.title}>This is a modal!</Text>
      {show ? (
        <View style={styles.modalout}>
          <View style={styles.modalin}>
            <Text style={styles.textmodl}>Modal working properely</Text>
            <Button title="Close Modal" onPress={() => setShow(false)}></Button>
          </View>
        </View>
      ) : null}
      <View style={styles.boview}>
        <Button
          title="Open Modal"
          color={"#cd5c5c"}
          onPress={() => setShow(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#7ca0c4",
  },
  modalout: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 5,
  },
  modalin: {
    backgroundColor: "#8b4513",
    height: 300,
    width: 300,
    justifyContent: "flex-end",
    borderRadius: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: "black",
    elevation: 20,
  },
  textmodl: {
    fontSize: 25,
    marginBottom: "50%",
    alignSelf: "center",
    color: "white",
  },
  boview: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    // width: "80%",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#b22222",
    color: "white",
    width: "60%",
    // height: 50,
    textAlignVertical: "center",
    padding: 10,
    borderRadius: 10,
  },
});
