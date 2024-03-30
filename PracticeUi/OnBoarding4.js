import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { CommonButton, CommonLogin } from "./CommonButton";
import AntDesign from "@expo/vector-icons/AntDesign";
export const OnBoarding4 = ({ navigation }) => {
  return (
    <View style={styles.owner}>
      <StatusBar barStyle={"default"} />
      <AntDesign
        name="arrowleft"
        style={styles.arrow}
        onPress={() => navigation.navigate("OnBoarding3")}
      />
      <View style={styles.innerView}>
        <View>
          <Image
            source={require("../assets/NewUi/Group4.png")}
            style={styles.group}
          />
          <Text style={styles.text}>Let’s you in</Text>
        </View>
        <View style={styles.loginview}>
          <CommonLogin
            title={"Login with Facebook"}
            extratext={styles.logintext}
            extra={styles.extralogin}
            Image={() => (
              <Image
                source={require("../assets/NewUi/facebook.png")}
                style={styles.image}
              />
            )}
          />
          <CommonLogin
            title={"Login with Google"}
            extratext={styles.logintext}
            extra={styles.extralogin}
            Image={() => (
              <Image
                source={require("../assets/NewUi/google.png")}
                style={styles.image}
              />
            )}
          />
          <CommonLogin
            title={"Login with Apple"}
            extratext={styles.logintext}
            extra={styles.extralogin}
            Image={() => (
              <Image
                source={require("../assets/NewUi/apple.png")}
                style={styles.image}
              />
            )}
          />
        </View>
        <Image
          source={require("../assets/NewUi/or.png")}
          style={styles.orline}
        />
      </View>
      <CommonButton
        title={"Sign in with Password"}
        extra={styles.login}
        onpress={() => navigation.navigate("Login1")}
      />
      <View style={styles.bottomtext}>
        <Text style={styles.account}>Don't have an account?</Text>
        <Text style={styles.signup}>sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  owner: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  arrow: {
    fontSize: 25,
    marginTop: 10,
  },

  innerView: {
    flex: 1,
    justifyContent: "center",
  },
  group: {
    height: 200,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 48,
    fontWeight: "700",
    textAlign: "center",
  },
  loginview: {
    marginVertical: 20,
    gap: 15,
  },
  common: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    elevation: 0,
  },
  extralogin: {
    backgroundColor: "#fff",
    elevation: 0,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgray",
    height: 60,
  },
  image: {
    height: 25,
    width: 25,
  },
  orline: {
    height: 50,
    width: "100%",
  },

  account: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9E9E9E",
  },
  bottomtext: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    marginVertical: "10%",
  },
  signup: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9610FF",
  },
});
