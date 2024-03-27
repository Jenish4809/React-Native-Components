import { View, StyleSheet, StatusBar, Text } from "react-native";
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
      {userList.length ? (
        userList.map((item) => <Text style={{ fontSize: 20 }}>{item.id}</Text>)
      ) : (
        <Text>Data not Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
