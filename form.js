import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
const transparent = "rgba(0,0,0,0.5)";
export const form = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function renderModal() {
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: transparent,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            width: "90%",
            height: 150,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <Text style={{ color: "black" }}>Close</Text>
          </TouchableOpacity>
          <Text style={{ color: "red", fontSize: 18, marginTop: 15 }}>
            Like Subscribe
          </Text>
        </View>
      </View>
    </Modal>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How to Make Responsive Modal</Text>
      <TouchableOpacity
        style={styles.btnsty}
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>open modal</Text>
      </TouchableOpacity>
      {renderModal}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 60,
  },
  text: {
    fontSize: 40,
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: 600,
    color: "black",
  },
  btnsty: {
    marginTop: 20,
    backgroundColor: "yellow",
    borderRadius: 8,
    padding: 10,
  },
});
