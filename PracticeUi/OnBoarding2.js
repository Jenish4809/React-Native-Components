import { Image, StyleSheet, Text, View } from "react-native";
import { CommonButton } from "./CommonButton";

export const OnBoarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          source={require("../assets/NewUi/Group2.png")}
          style={styles.group}
        />
        <Text style={styles.text}>
          You can share, chat, and video call with your match
        </Text>
      </View>

      <CommonButton
        title={"Next"}
        onpress={() => {
          navigation.navigate("OnBoarding3");
        }}
      />
    </View>
  );
};

export const OnBoarding3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          source={require("../assets/NewUi/Group3.png")}
          style={styles.group}
        />
        <Text style={styles.text}>
          Don't wait anymore, find your soul mate right now!
        </Text>
      </View>

      <CommonButton
        title={"Next"}
        onpress={() => navigation.navigate("OnBoarding4")}
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
