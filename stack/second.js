import { useState } from "react";
import {
  Button,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  useAnimatedValue,
} from "react-native";
export const Home = (props) => {
  const [name1, setName1] = useState("");
  const [password, setPassword] = useState("");
  const { name, age } = props.route.params;
  return (
    <View style={styles.main}>
      <StatusBar barStyle="default" />
      <Text style={{ fontSize: 30 }}>Name :{name}</Text>
      <Text style={{ fontSize: 30 }}>Age: {age}</Text>
      <View style={styles.layout}>
        <TextInput
          placeholder="Enter Your User Name"
          style={styles.usersty}
          placeholderTextColor={"#fff"}
          onChangeText={(text) => setName1(text)}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={styles.passsty}
          placeholderTextColor={"#fff"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Press to Next"
          color={"#808000"}
          onPress={() =>
            props.navigation.navigate("Third", { name1, password })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#87cefa",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  usersty: {
    height: 60,
    width: "80%",
    backgroundColor: "#800000",
    color: "#fff",
    borderRadius: 40,
    paddingLeft: 10,
  },
  passsty: {
    height: 60,
    width: "80%",
    backgroundColor: "#800000",
    color: "#fff",
    borderRadius: 40,
    paddingLeft: 10,
  },
});
