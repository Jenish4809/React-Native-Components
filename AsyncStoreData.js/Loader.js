import { ActivityIndicator, View, StyleSheet } from "react-native";
import { colors } from "./ComonColor";
export const Loader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size={"large"} color={colors.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
