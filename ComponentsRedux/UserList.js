import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "./Redux/action";
import { useEffect } from "react";

export const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <ScrollView>
        {userList.length ? (
          userList[0].map((item) => (
            <View style={styles.cardview} key={item.id}>
              <View style={styles.nameview}>
                <Text style={styles.nametext}>
                  Name: {item.firstName} {item.lastName}
                </Text>
              </View>
              <Text style={styles.itensty}>Age: {item.age}</Text>
              <Text style={styles.itensty}>Birth Date: {item.birthDate}</Text>
              <Text style={styles.itensty}>Blood Group: {item.bloodGroup}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.errtext}>Data not Found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A0153E",
  },
  cardview: {
    backgroundColor: "#EFBC9B",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  itensty: {
    fontSize: 18,
    margin: 2,
  },
  nameview: {
    backgroundColor: "#401F71",
    borderBottomRightRadius: 20,
    alignItems: "center",
    borderTopLeftRadius: 20,
  },
  nametext: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    padding: 5,
  },
  errtext: {
    fontSize: 30,
    color: "#fff",
  },
});
