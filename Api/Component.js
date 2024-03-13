import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../AsyncStoreData.js/ComonColor";

export const Btn = ({ text, onPress, extraStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, extraStyle]} onPress={onPress}>
      <Text style={styles.font}>{text || "Api Call"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: "90%",
    backgroundColor: colors.button,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 10,
    shadowOffset: { height: 10, width: 10 },
    shadowColor: "#9932cc",
  },
  font: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.background,
  },
});
