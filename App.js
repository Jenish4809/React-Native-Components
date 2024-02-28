// import React, { useState } from "react";
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// export default function App() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       title: "jenish",
//     },
//     {
//       id: 2,
//       title: "karan",
//     },
//     {
//       id: 3,
//       title: "kaushik",
//     },
//     {
//       id: 4,
//       title: "babu",
//     },
//     {
//       id: 5,
//       title: "jenish",
//     },
//     {
//       id: 6,
//       title: "karan",
//     },
//     {
//       id: 7,
//       title: "kaushik",
//     },
//     {
//       id: 8,
//       title: "babu",
//     },
//     {
//       id: 9,
//       title: "jenish",
//     },
//     {
//       id: 10,
//       title: "karan",
//     },
//     {
//       id: 11,
//       title: "kaushik",
//     },
//     {
//       id: 12,
//       title: "babu",
//     },
//   ]);
//   const renderItemData = ({ item }) => (
//     <View>
//       <Text style={styles.title}>
//         {item.id}. {item.title.toUpperCase()}
//       </Text>
//     </View>
//   );
//   const itemSeprate = () => {
//     return (
//       <View
//         style={{ height: 1, width: "100%", backgroundColor: "#c8c8c8" }}
//       ></View>
//     );
//   };
//   const listEmpty = ({ item }) => {
//     return (
//       <Text style={{ padding: 10, textAlign: "center", fontSize: 18 }}>
//         No Data Found
//       </Text>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="default" />
//       {/* <StatusBar barStyle={"default"} /> */}
//       <FlatList
//         data={data}
//         renderItem={renderItemData}
//         keyExtractor={(item) => item.id}
//         ListEmptyComponent={listEmpty}
//         ItemSeparatorComponent={itemSeprate}
//         ListHeaderComponent={
//           <Text
//             style={{
//               fontSize: 20,
//               color: "white",
//               backgroundColor: "red",
//               marginBottom: 20,
//               textAlign: "center",
//               height: 40,
//               width: "100%",
//               marginVertical: 20,
//             }}
//           >
//             List about Names
//           </Text>
//         }
//         ListFooterComponent={
//           <Text
//             style={{
//               fontSize: 20,
//               color: "white",
//               backgroundColor: "blue",
//               textAlign: "center",
//               verticalAlign: "middle",
//               height: 40,
//               width: "50%",
//               borderRadius: 30,
//               marginHorizontal: 100,
//               marginVertical: 50,
//             }}
//           >
//             The List was Ended
//           </Text>
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "salmon",
//   },
//   title: {
//     fontSize: 20,
//     // gap: 20,
//     paddingHorizontal: 20,
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     alignItems: "center",
//     marginBottom: 50,
//     width: "80%",
//     justifyContent: "center",
//     gap: 500,
//   },
// });

import { useEffect, useState } from "react";
import { View, Text, Button, StatusBar } from "react-native";

export const useEff = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn("counter called");
  // }, [count]);
  // useEffect(() => {
  //   console.warn("data called");
  // }, [data]);
  return (
    <View>
      <StatusBar barStyle={"default"} />
      <Text>Here is the :{count}</Text>
      <Button
        title="Press to Increase count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text>Here is the square {data}</Text>
      <Button
        title="Press the button"
        onPress={() => {
          setData(data + 1);
        }}
      />
      <User info={{ count, data }} />
    </View>
  );
};

const User = (props) => {
  console.log("data", props.info.data);
  useEffect(() => {
    console.warn("Data should be called");
  }, [props.info.data]);
  useEffect(() => {
    console.warn("Count should be called");
  }, [props.info.count]);
  return (
    <View>
      <Text style={{ color: "red", fontSize: 25 }}>
        Here is the : {props.info.data}
      </Text>
      <Text style={{ color: "red", fontSize: 25 }}>
        Here is the data:{props.info.count}
      </Text>
    </View>
  );
};
