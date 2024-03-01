import { useState } from "react";
import { StatusBar, View, StyleSheet, Text, Button, Modal } from "react-native";

export const DialogBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <Modal visible={open} transparent={true} animationType="slide">
        <View style={styles.centerview}>
          <View style={styles.innerview}>
            <Text style={styles.text}>Hello Thanks for Open Dialog</Text>
            <Button title="Close Dialog" onPress={() => setOpen(false)} />
          </View>
        </View>
      </Modal>
      {!open ? (
        <View style={styles.outerview}>
          <Text style={styles.outertext}>Hello World!</Text>
        </View>
      ) : (
        <View style={styles.outerview1}>
          <Text style={styles.outertext}>Shown Is here</Text>
        </View>
      )}
      <View style={styles.btn}>
        <Button title="Open Dialog" onPress={() => setOpen(true)}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffe4b5",
  },
  btn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    width: "80%",
    alignSelf: "center",
  },
  centerview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  innerview: {
    backgroundColor: "skyblue",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
    height: 150,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  outerview: {
    backgroundColor: "#b22222",
    alignItems: "center",
    marginTop: "90%",
    width: "50%",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
  },
  outerview1: {
    backgroundColor: "#9370db",
    alignItems: "center",
    marginTop: "90%",
    width: "50%",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
  },
  outertext: {
    fontSize: 36,
  },
});
