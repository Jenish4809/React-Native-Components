import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CommonButton, CommonInput } from "../CommonButton";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
export const Login1 = ({ navigation }) => {
  const CommonLogin = ({ source }) => {
    return (
      <TouchableOpacity style={styles.facebookview}>
        <Image source={source} style={styles.facebook} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        style={styles.arrow}
        onPress={() => navigation.navigate("OnBoarding4")}
      />
      <View style={styles.mainscreen}>
        <Image
          source={require("../../assets/NewUi/screen.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Create Your Account</Text>
        <CommonInput
          title={"Email"}
          LeftIcon={() => <Fontisto name="email" style={styles.emailicon} />}
          placeholderTextColor={"#9E9E9E"}
          extrasty={styles.extrainput}
        />
        <CommonInput
          title={"Password"}
          LeftIcon={() => <FontAwesome name="lock" style={styles.emailicon} />}
          placeholderTextColor={"#9E9E9E"}
          RightIcon={() => (
            <FontAwesome5 name="eye-slash" style={styles.eyeicon} />
          )}
        />
        <View style={styles.rememberCon}>
          <View style={styles.box} />
          <Text>Remember Me</Text>
        </View>
        <CommonButton title={"Sign Up"} />
        <Image
          source={require("../../assets/NewUi/or2.png")}
          style={styles.continue}
        />
        <View style={styles.loginview}>
          <CommonLogin source={require("../../assets/NewUi/facebook.png")} />
          <CommonLogin source={require("../../assets/NewUi/google.png")} />
          <CommonLogin source={require("../../assets/NewUi/apple.png")} />
        </View>
        <View style={styles.bottomtext}>
          <Text style={styles.account}>Alreadt have an account?</Text>
          <Text style={styles.signup}>sign In</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    justifyContent: "space-around",
  },
  mainscreen: {},
  arrow: {
    fontSize: 25,
    marginTop: 10,
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    alignSelf: "center",
  },
  emailicon: {
    fontSize: 16,
    color: "#9E9E9E",
  },
  extrainput: {
    marginVertical: 20,
  },
  eyeicon: {
    fontSize: 16,
    color: "#9E9E9E",
  },
  rememberCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
  },
  box: {
    height: 24,
    width: 24,
    borderWidth: 3,
    borderColor: "#9610FF",
    borderRadius: 8,
  },
  continue: {
    width: "100%",
    height: 50,
    marginVertical: 30,
  },
  facebook: {
    height: 25,
    width: 25,
  },
  facebookview: {
    height: 66,
    width: 88,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginview: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
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
