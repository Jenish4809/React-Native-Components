import { View, StyleSheet, StatusBar, Text } from "react-native";

export const UserList = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text>This is User List Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
