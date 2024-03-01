import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native";

export const Status = () => {
  const [hide, setHide] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const onPressToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={"red"}
        barStyle={darkMode ? "light-content" : "dark-content"}
        hidden={hide}
      />
      <View style={styles.inview}>
        <Button
          title="Toggle"
          color={"#556b2f"}
          onPress={() => setHide(!hide)}
        ></Button>
        <Button
          title="Update Style"
          color={"purple"}
          onPress={onPressToggle}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#bdb76b",
    alignItems: "center",
    justifyContent: "center",
  },
  inview: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
