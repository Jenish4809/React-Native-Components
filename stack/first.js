import { Button, View, Text, StatusBar } from "react-native";
export const Login = (props) => {
  const name = "  John Doe";
  const age = 25;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#98fb98",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="default" />
      <Text style={{ fontSize: 40, color: "black" }}>
        This is the Login screen!
      </Text>
      <Button
        title="Go to Home"
        onPress={() => {
          props.navigation.navigate("Home", { name, age });
        }}
      ></Button>
    </View>
  );
};
