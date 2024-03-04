import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

export const First = (props) => {
  const [name, setName] = useState("");
  const [emailValidError, setEmailValidError] = useState("");
  const [passwordValidError, setPasswordValidError] = useState("");
  const [password, setPassword] = useState("");
  const onPressNavigate = () => {
    if (name === "") {
      Alert.alert("Please enter your name!");
    } else if (password.length < 6) {
      Alert.alert("Your password must be at 6 digit");
    } else {
      setName("");
      setPassword("");
      props.navigation.navigate("Second", { name, password });
    }
  };
  const handleEmailVal = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.length === 0) {
      setEmailValidError("Email address must be enter");
    } else if (reg.test(val) === false) {
      setEmailValidError("Enter valid Email address");
    } else if (reg.test(val) === true) {
      setEmailValidError("");
    }
  };
  const onPressText = (text) => {
    setName(text);
    handleEmailVal(text);
  };

  const handlePassword = (val) => {
    const valid =
      val.length >= 8 &&
      /[A-Z]/.test(val) &&
      /[^a-zA-Z]/.test(val) &&
      /[0-9]/.test(val);
    if (valid) {
      setPasswordValidError("");
    } else {
      setPasswordValidError("Enter Password Correct format");
    }
    setPassword(val);
  };
  const onPressPassword = (test) => {
    setPassword(test), handlePassword(test);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.text}>First Screen</Text>
      <View style={styles.contentview}>
        <Fontisto
          name="email"
          size={25}
          color={"red"}
          style={styles.iconsty}
        ></Fontisto>
        <TextInput
          value={name}
          placeholder="Enter Your Name"
          placeholderTextColor={"#008b8b"}
          style={styles.inputstyle}
          onChangeText={onPressText}
        />
        {emailValidError ? <Text>{emailValidError}</Text> : null}

        <TextInput
          secureTextEntry={true}
          value={password}
          placeholder="Enter Your Password"
          placeholderTextColor={"black"}
          style={styles.inputpass}
          onChangeText={onPressPassword}
        />
        {passwordValidError ? <Text>{passwordValidError}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={onPressNavigate}>
          <Text style={styles.btnfont}>Go to the Next Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  contentview: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputstyle: {
    height: 60,
    width: "80%",
    backgroundColor: "#bdb76b",
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  inputpass: {
    height: 60,
    width: "80%",
    backgroundColor: "#f08080",
    borderRadius: 20,
    padding: 10,
  },
  button: {
    height: 50,
    width: "35%",
    backgroundColor: "#ffcc80",
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnfont: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#533e3e",
  },
});
