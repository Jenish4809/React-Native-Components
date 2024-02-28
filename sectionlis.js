// import {
//   View,
//   StyleSheet,
//   Text,
//   SectionList,
//   SafeAreaView,
//   StatusBar,
// } from "react-native";

// export const sectionli = () => {
//   const users = [
//     {
//       id: 1,
//       name: "Jenish",
//       data: ["PHP", "React-Native", "C", "Angular"],
//     },
//     {
//       id: 2,
//       name: "Karan",
//       data: ["C#", "React-Js", "C", "Mongodb"],
//     },
//     {
//       id: 3,
//       name: "Kaushik",
//       data: ["PHP", "React-Native", "C", "Angular"],
//     },
//     {
//       id: 4,
//       name: "Babu",
//       data: ["PHP", "React-Native", "C", "Angular"],
//     },
//     { id: 5, name: "Neel", data: ["PHP", "React-Native", "C", "Angular"] },
//   ];
//   return (
//     // <SafeAreaView>
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "salmon",
//       }}
//     >
//       <StatusBar barStyle={"default"} />
//       <Text style={{ fontSize: 30 }}>Section List in React-Native </Text>
//       <View>
//         <SectionList
//           style={{
//             marginHorizontal: 20,
//             marginVertical: 20,
//             backgroundColor: "pink",
//           }}
//           sections={users}
//           renderItem={({ item }) => (
//             <Text style={{ fontSize: 15, marginLeft: 20 }}>-- {item}</Text>
//           )}
//           renderSectionHeader={({ section: { name } }) => (
//             <Text style={{ fontSize: 25, color: "red" }}>{name}</Text>
//           )}
//           // renderSectionFooter={({ section: { id } }) => <Text>{id}</Text>}
//         />
//       </View>
//     </View>
//     // </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({});

import React, { Component } from "react";
import { View, Text, Button, TextInput, StatusBar } from "react-native";
import Teacher from "./teacher";
class Student extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jenish",
    };
  }
  updateName(val) {
    this.setState({ name: val });
  }
  render() {
    return (
      <View>
        <StatusBar barStyle={"default"} />
        <Text style={{ fontSize: 30, color: "red" }}>
          the name is : {this.state.name}
        </Text>
        <TextInput
          placeholder="Enter Name"
          onChangeText={(val) => {
            this.updateName(val);
          }}
        />
        <Button on title="Press Me" />
        <Teacher name={this.state.name} />
      </View>
    );
  }
}

export default Student;
