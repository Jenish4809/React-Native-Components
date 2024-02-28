import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const Data = [
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
  ];
  const renderItemData = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.id}. {item.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={Data} renderItem={renderItemData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  },
  item: {
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    marginBottom: 50,
    width: "100%",
  },
});
