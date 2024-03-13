import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { Btn } from "./Component";

export const ApiData = () => {
  const [data, setData] = useState([]);
  const GetApiData = async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  const deleteApi = async (id) => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(`${url}/${id}`, { method: "delete" });
    result = await result.json();
    if (result) {
      GetApiData();
    }
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
                  <Text style={styles.datafont}>USER ID : {item.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      width: "30%",
                      marginLeft: 40,
                    }}
                  >
                    <Btn
                      extraStyle={styles.btnsty}
                      text={"Delete"}
                      onPress={() => {
                        deleteApi(item.id);
                      }}
                    />
                    <Btn extraStyle={styles.btnsty} text={"update"} />
                  </View>
                </View>
                <Text style={styles.datatitlefont}>{item.title}</Text>
              </View>

              <View style={styles.bodyview}>
                <Text style={styles.bodyfont}>{item.email}</Text>
              </View>
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
    fontSize: 20,
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
  btnsty: {
    margin: 5,
  },
});
