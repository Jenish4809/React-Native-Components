import { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";

export const PracticeApi = () => {
  const [data, setData] = useState([]);
 
 
  const getApiUser = async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiUser();
  }, []);

  
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.font}>Api Call Using Json Server</Text>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.innerview}>
              <Text style={styles.innerfont}>{item.id}</Text>
              <Text style={styles.innerfont}>{item.name}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#556b2f",
  },
  font: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    marginTop: 30,
    fontWeight: "700",
  },
  innerview: {
    flex: 1,
    marginTop: 20,
    height: 40,
    width: "80%",
    backgroundColor: "#808080",
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  innerfont: {
    fontSize: 25,
    color: "#ffebcd",
    marginLeft: 10,
  },
});
