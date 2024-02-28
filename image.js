import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

export const image = () => {
  const Data = [
    {
      id: "1",
      title: "jenish",
      email: "Jen@gmail",
    },
    {
      id: "2",
      title: "karan",
      email: "Jen@gmail",
    },
    {
      id: "3",
      title: "kaushik",
      email: "Jen@gmail",
    },
    {
      id: "4",
      title: "babu",
      email: "Jen@gmail",
    },
    {
      id: "5",
      title: "jenish",
      email: "Jen@gmail",
    },
    {
      id: "6",
      title: "karan",
      email: "Jen@gmail",
    },
    {
      id: "7",
      title: "kaushik",
      email: "Jen@gmail",
    },
    {
      id: "8",
      title: "babu",
      email: "Jen@gmail",
    },
    {
      id: "9",
      title: "jenish",
      email: "Jen@gmail",
    },
    {
      id: "10",
      title: "karan",
      email: "Jen@gmail",
    },
    {
      id: "11",
      title: "kaushik",
      email: "Jen@gmail",
    },
    {
      id: "12",
      title: "babu",
      email: "Jen@gmail",
    },
    {
      id: "13",
      title: "jenish",
      email: "Jen@gmail",
    },
    {
      id: "14",
      title: "karan",
      email: "Jen@gmail",
    },
    {
      id: "15",
      title: "kaushik",
      email: "Jen@gmail",
    },
    {
      id: "16",
      title: "babu",
      email: "Jen@gmail",
    },
    {
      id: "17",
      title: "jenish",
      email: "Jen@gmail",
    },
    {
      id: "18",
      title: "karan",
      email: "Jen@gmail",
    },
    {
      id: "19",
      title: "kaushik",
      email: "Jen@gmail",
    },
    {
      id: "20",
      title: "babu",
      email: "Jen@gmail",
    },
    {
      id: "21",
      title: "jenish",
      email: "Jen@gmail",
    },
    {
      id: "22",
      title: "karan",
      email: "Jen@gmail",
    },
    {
      id: "23",
      title: "kaushik",
      email: "Jen@gmail",
    },
    {
      id: "24",
      title: "babu",
      email: "Jen@gmail",
    },
  ];
  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar barStyle={"default"} />
      <View>
        <Text style={{ fontSize: 20 }}>Components with loop in FlatList</Text>
        <FlatList
          keyExtractor={(idx) => {
            return idx.id;
          }}
          data={Data}
          renderItem={({ item }) => <UserData item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const UserData = (props) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.title}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: "red",
    flex: 1,
    margin: 2,
    textAlign: "center",
  },
  box: {
    flexDirection: "row",
    borderWidth: 2,
    borderBlockColor: "red",
    marginBottom: 10,
  },
});
