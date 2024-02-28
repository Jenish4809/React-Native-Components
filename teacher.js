import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
class Teacher extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={"default"} />
        <Text style={{ fontSize: 30, color: "green" }}>
          Student name : {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Teacher;
