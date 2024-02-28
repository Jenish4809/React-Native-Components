import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "jenish",
    },
    {
      id: 2,
      title: "karan",
    },
    {
      id: 3,
      title: "kaushik",
    },
    {
      id: 4,
      title: "babu",
    },
    {
      id: 5,
      title: "jenish",
    },
    {
      id: 6,
      title: "karan",
    },
    {
      id: 7,
      title: "kaushik",
    },
    {
      id: 8,
      title: "babu",
    },
    {
      id: 9,
      title: "jenish",
    },
    {
      id: 10,
      title: "karan",
    },
    {
      id: 11,
      title: "kaushik",
    },
    {
      id: 12,
      title: "babu",
    },
  ]);
  const renderItemData = ({ item }) => (
    <View>
      <Text style={styles.title}>
        {item.id}. {item.title.toUpperCase()}
      </Text>
    </View>
  );
  const itemSeprate = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "#c8c8c8" }}
      ></View>
    );
  };
  const listEmpty = ({ item }) => {
    return (
      <Text style={{ padding: 10, textAlign: "center", fontSize: 18 }}>
        No Data Found
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      {/* <StatusBar barStyle={"default"} /> */}
      <FlatList
        data={data}
        renderItem={renderItemData}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={listEmpty}
        ItemSeparatorComponent={itemSeprate}
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 20,
              color: "white",
              backgroundColor: "red",
              marginBottom: 20,
              textAlign: "center",
              height: 40,
              width: "100%",
              marginVertical: 20,
            }}
          >
            List about Names
          </Text>
        }
        ListFooterComponent={
          <Text
            style={{
              fontSize: 20,
              color: "white",
              backgroundColor: "blue",
              textAlign: "center",
              verticalAlign: "middle",
              height: 40,
              width: "50%",
              borderRadius: 30,
              marginHorizontal: 100,
              marginVertical: 50,
            }}
          >
            The List was Ended
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
  },
  title: {
    fontSize: 20,
    // gap: 20,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    marginBottom: 50,
    width: "80%",
    justifyContent: "center",
    gap: 500,
  },
});
