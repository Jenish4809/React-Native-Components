import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { Btn } from "./Component";
import axios from "axios";
import { useState } from "react";

export const Axiosapi = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const getApi = async () => {
    await axios({
      method: "GET",
      url: `${baseUrl}/posts`,
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setShow(true);
  };
  const toggle = () => {
    setShow(!show);
    setData("");
  };
  const PostApi = () => {
    axios({
      method: "POST",
      url: `${baseUrl}/posts`,
      body: JSON.stringify({
        id: 101,
        title: "jenish",
        body: "here is fhe data was added",
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const UpdateApi = () => {
    axios({
      method: "PATCH",
      url: `${baseUrl}/posts/11`,
      body: JSON.stringify({
        title: "Asodariya",
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const DeleteApi = () => {
    axios({
      method: "DELETE",
      url: `${baseUrl}/posts/19`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>This is a text in the axios api</Text>
      <Btn
        text={show ? "Hide Data" : "Show Data"}
        onPress={show ? toggle : getApi}
      />
      <Btn text={"Post APi"} onPress={PostApi} />
      <Btn text={"Update Api"} onPress={UpdateApi} />
      <Btn Text={"Delete Data"} onPress={DeleteApi} />
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      ) : (
        <Text>{show}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fbc8f",
  },
  title: {
    fontSize: 30,
  },
});
