import { Image, StyleSheet, Text, View } from "react-native";
import { CommonButton } from "./CommonButton";

export const OnBoarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          source={require("../assets/NewUi/Group.png")}
          style={styles.group}
        />
        <Text style={styles.text}>
          It’s easy to find a soul mate nearby & around you
        </Text>
      </View>

      <CommonButton
        title={"Next"}
        onpress={() => {
          navigation.navigate("OnBoarding2");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  group: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    gap: 40,
  },
});
