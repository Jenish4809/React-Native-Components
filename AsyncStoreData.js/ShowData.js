import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Btn } from "../Api/Component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./ComonColor";
import AntDesign from "@expo/vector-icons/AntDesign";

export const ShowData = (props) => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("NEWUSER");
      const ArrayData = JSON.parse(userData);
      setData(ArrayData);
    } catch (err) {
      console.log("err", err);
    }
  };
  const dataDelete = async (index) => {
    const tempData = data;
    const selectData = tempData.filter((item, ind) => {
      return ind != index;
    });
    setData(selectData);
    await AsyncStorage.setItem("NEWUSER", JSON.stringify(selectData));
  };
  useEffect(() => {
    getUser();
  }, []);

  const Press = () => {
    !data ? getUser() : setData("");
  };
  const onPressForm = () => {
    props.navigation.navigate("UserData");
  };
  const Return = () => {
    props.navigation.navigate("MainScreen");
  };

  const renderData = ({ item, index }) => {
    return (
      <View style={styles.mainviewdata}>
        <Text style={styles.datafont}>ID : {index + 1}</Text>
        <Text style={styles.datafont}>Name : {item.name}</Text>
        <Text style={styles.datafont}>Last Name: {item.lastName}</Text>
        <Text style={styles.datafont}>Email : {item.email}</Text>
        <Text style={styles.datafont}>Mobile No : {item.mobile}</Text>
        <Text style={styles.datafont}>Birth Date : {item.choosedate}</Text>
        <Text style={styles.datafont}>Gender : {item.radio}</Text>
        <Text style={styles.datafont}>City : {item.city}</Text>
        <Text style={styles.datafont}>State : {item.state}</Text>
        <Text style={styles.datafont}>PinCode : {item.pincode}</Text>
        <TouchableOpacity
          style={styles.deletesty}
          onPress={() => {
            dataDelete(index);
          }}
        >
          <AntDesign name="delete" style={styles.delete} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <View style={styles.titleview}>
        <Text style={styles.titlefont}>User's Data</Text>
        <AntDesign name="plus" style={styles.plusicon} onPress={onPressForm} />
      </View>
      <FlatList data={data} renderItem={renderData} />
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
  titleview: {
    width: "100%",
    backgroundColor: colors.button,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  titlefont: {
    fontSize: 25,
    color: colors.background1,
  },
  plusicon: {
    fontSize: 25,
    color: colors.background1,
  },
  mainviewdata: {
    backgroundColor: colors.background,
    marginVertical: 10,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    elevation: 4,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    gap: 5,
    padding: 15,
    backgroundColor: colors.button,
  },
  btnview: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnsty: {
    width: "40%",
    marginHorizontal: 20,
  },
  datafont: {
    fontSize: 16,
    color: colors.background,
    fontWeight: "500",
  },
  delete: {
    color: colors.button,
    fontSize: 25,
    alignSelf: "center",
  },
  deletesty: {
    height: 35,
    width: 35,
    backgroundColor: colors.background1,
    justifyContent: "center",
    marginHorizontal: "50%",
    borderRadius: 7,
    elevation: 10,
  },
});
