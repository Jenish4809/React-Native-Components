import { Button, View, Text, StatusBar } from "react-native";
export const Third = (props) => {
  const { name1, password } = props.route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="default" />
      <Text style={{ fontSize: 30 }}>Name: {name1}</Text>
      <Text style={{ fontSize: 30 }}>Age: {password}</Text>
      <Text style={{ fontSize: 40, color: "white" }}>
        This is the Third screen!
      </Text>
      <Button
        title="Go to Login"
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      ></Button>
    </View>
  );
};
