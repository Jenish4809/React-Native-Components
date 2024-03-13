import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Btn } from "./Component";
import { useState } from "react";

export const PostApi = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorAge, setErrorAge] = useState(false);
  const [errorEmail, setErrorEMail] = useState(false);

  const saveData = async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    setName("");
    setEmail("");
    setAge("");
  };
  const handleName = (text) => {
    if (!text) {
      setErrorName("Enter Your Detail");
    } else {
      setErrorName("");
    }
    setName(text);
  };
  const handleAge = (text) => {
    if (!text || isNaN(Number(text))) {
      setErrorAge("Invalid Age Number");
    } else {
      setErrorAge("");
    }
    setAge(text);
  };
  const handleEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text || !emailRegex.test(text)) {
      setErrorEMail("Please enter a valid email address");
    } else {
      setErrorEMail("");
    }
    setEmail(text);
  };
  const handleButton = () => {
    {
      !name || !age || !email ? showAlert() : saveData();
    }
    dismissKeyboard();
  };

  showAlert = () => {
    Alert.alert("Please Feel all The Data");
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setErrorName("");
    setErrorAge("");
    setErrorEMail("");
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.main}>
        <Text style={styles.font}> Post API</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={handleName}
            value={name}
          />
          {errorName ? <Text style={{ color: "red" }}>{errorName}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            keyboardType="numeric"
            onChangeText={handleAge}
            value={age}
          />
          {errorAge ? <Text style={{ color: "red" }}>{errorAge}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={handleEmail}
            value={email}
          />
          {errorEmail ? (
            <Text style={{ color: "red" }}>{errorEmail}</Text>
          ) : null}
        </View>
        <View style={styles.btn}>
          <Btn text={"Send Data"} onPress={handleButton} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#556b2f",
    alignItems: "center",
  },
  font: {
    fontSize: 30,
    alignSelf: "center",
    color: "#fff",
    marginTop: 40,
    marginBottom: "40%",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    width: "80%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "90%",
    backgroundColor: "#f5f5dc",
    borderRadius: 10,
    color: "black",
    paddingLeft: 10,
    margin: 10,
  },
});
