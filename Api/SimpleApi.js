import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

export const ApiData = () => {
  const [data, setData] = useState([]);
  const GetApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    GetApiData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.titlefont}>This is the API Data Page!</Text>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={styles.dataview}>
                <View>
                  <Text style={styles.datafont}>ID : {item.id}</Text>
                  <Text style={styles.datafont}>USER ID : {item.userId}</Text>
                </View>
                <Text style={styles.datatitlefont}>{item.title}</Text>
              </View>
              {
                <View style={styles.bodyview}>
                  <Text style={styles.bodyfont}>{item.body}</Text>
                </View>
              }
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bc8f8f",
  },
  titlefont: {
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 20,
    color: "white",
  },
  dataview: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
    elevation: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    backgroundColor: "gray",
  },
  datafont: {
    fontSize: 25,
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  bodyview: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
    elevation: 3,
    shadowOffset: { width: -1, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: "#008080",
  },
  bodyfont: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "auto",
    color: "#ffefd5",
  },
  datatitlefont: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});
