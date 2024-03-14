import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Btn } from "../Api/Component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./ComonColor";
import AntDesign from "@expo/vector-icons/AntDesign";

export const ShowData = (props) => {
  const [data, setData] = useState("");

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem("user_data"));
      setData(userData);
    } catch (err) {
      console.log("err", err);
    }
  };

  const Press = () => {
    !data ? getUser() : setData("");
  };
  const onPressForm = () => {
    props.navigation.navigate("UserData");
  };
  const Return = () => {
    props.navigation.navigate("MainScreen");
  };
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <View style={styles.inmain}>
        <Text style={styles.font}>User's Data</Text>
        <AntDesign name="plus" style={styles.icon} onPress={onPressForm} />
      </View>
      <ScrollView style={styles.innerview}>
        <View style={styles.dataView}>
          <Text style={styles.datatext}>Name : {data.name}</Text>
          <Text style={styles.datatext}>Last Name : {data.lastName}</Text>
          <Text style={styles.datatext}>Email : {data.email}</Text>
          <Text style={styles.datatext}>Phone No : {data.mobile}</Text>
          <Text style={styles.datatext}>Gender : {data.radio}</Text>
          <Text style={styles.datatext}>City : {data.city}</Text>
          <Text style={styles.datatext}>State : {data.state}</Text>
          <View style={styles.deleteset}>
            <Text style={styles.datatext}>Pincode : {data.pincode}</Text>
            <AntDesign name="delete" size={25} style={styles.delete} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnview}>
        <Btn
          text={data === "" ? "Show Data" : "Hide Data"}
          onPress={Press}
          extraStyle={styles.btnsty}
        />
        <Btn
          text={"Return To Home"}
          onPress={Return}
          extraStyle={styles.btnsty}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  font: {
    fontSize: 25,
    color: colors.background,
    fontWeight: "500",
    marginTop: -10,
  },

  inmain: {
    height: "10%",
    width: "100%",
    backgroundColor: colors.button,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  innerview: {
    height: "78%",
    width: "95%",
    backgroundColor: colors.background,
    elevation: 5,
    bottom: 20,
    alignSelf: "center",
    borderRadius: 7,
  },
  btnview: {
    alignItems: "center",
    paddingVertical: 5,
    gap: 15,
  },
  btnsty: {
    width: "70%",
  },
  dataView: {
    // height: 150,
    width: "90%",
    padding: 10,
    backgroundColor: colors.background1,
    alignSelf: "center",
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#800080",
    shadowOpacity: 0.3,
    shadowOffset: { height: 4, width: 4 },
  },
  datatext: {
    fontSize: 20,
    height: 40,
    flexWrap: "wrap",
    width: "100%",
    padding: 5,
  },
  icon: {
    fontSize: 30,
    color: colors.background1,
    marginBottom: 20,
  },
  delete: {
    alignSelf: "flex-end",
    alignSelf: "center",
  },
  deleteset: {
    flexDirection: "row",
    marginRight: 30,
  },
});
