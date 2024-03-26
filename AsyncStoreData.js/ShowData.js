import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
  Keyboard,
  Image,
} from "react-native";
import { Btn } from "../Api/Component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./ComonColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CommonInput } from "./CommonTextInput";
import ActionSheet from "react-native-actions-sheet";
import Entypo from "@expo/vector-icons/Entypo";
import moment from "moment";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Loader } from "./Loader";
import { CommonStr } from "./commonStr";

export const ShowData = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [oldData, setOldData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let ref = useRef(null);
  const onPressSheet = () => {
    ref.current?.show();
  };

  const onSearch = (text) => {
    let tempList = data.filter((item) => {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setData(tempList);
  };

  const sortingDate2 = () => {
    ref.current.hide();
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedData);
  };
  const sortingDate1 = () => {
    ref.current.hide();
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setData(sortedData);
  };
  const sortByName1 = () => {
    ref.current.hide();
    let sortName = [...data].sort(
      (a, b) =>
        a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0)
    );
    setData(sortName);
  };
  const sortByName2 = () => {
    ref.current.hide();
    let sortName = [...data].sort(
      (a, b) =>
        b.name.toLowerCase().charCodeAt(0) - a.name.toLowerCase().charCodeAt(0)
    );
    setData(sortName);
  };
  const Reload = () => {
    setData(oldData);
  };
  const rateSort1 = () => {
    ref.current.hide();
    let sorting = [...data].sort((a, b) => b.rating - a.rating);
    setData(sorting);
  };
  const rateSort2 = () => {
    ref.current.hide();
    let sorting = [...data].sort((a, b) => a.rating - b.rating);
    setData(sorting);
  };

  const getUser = async () => {
    try {
      setIsLoading(true);
      const userData = await AsyncStorage.getItem("NEWUSER");
      const ArrayData = JSON.parse(userData);
      setData(ArrayData);
      setIsLoading(false);
      setOldData(ArrayData);
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
  const addUser = () => {
    Alert.alert("Sure You Want to add Yourself", "Tap OK to continue", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          onPressForm();
        },
      },
    ]);
  };
  const deleteData = () => {
    Alert.alert("Are you sure You want to Delete it", "Tap OK to continue", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          dataDelete(index);
        },
      },
    ]);
  };

  const valueSearch = (txt) => {
    onSearch(txt);
    setSearch(txt);
  };

  const clearSearch = () => {
    setSearch("");
    setData(oldData);
    Keyboard.dismiss();
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

  const renderData = ({ item, index }) => {
    return (
      <View style={styles.mainviewdata}>
        <View style={styles.iconimage}>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.icon} />
          ) : (
            <Image
              source={require("../assets/default_icon.png")}
              style={styles.icon}
            />
          )}

          <Text style={styles.datafont}> User : {item.userName} </Text>
        </View>
        <Text style={styles.datafont}>
          Fill Date : {moment(item.date).format("DD/MM/YYYY - HH:m")}
        </Text>
        <Text style={styles.datafont}>Name : {item.name}</Text>
        <Text style={styles.datafont}>Last Name: {item.lastName}</Text>
        <Text style={styles.datafont}>Email : {item.email}</Text>
        <Text style={styles.datafont}>Mobile No : {item.mobile}</Text>
        <Text style={styles.datafont}>Birth Date : {item.chooseDate}</Text>
        <Text style={styles.datafont}>Gender : {item.radio}</Text>
        <Text style={styles.datafont}>City : {item.city}</Text>
        <Text style={styles.datafont}>State : {item.state}</Text>
        <Text style={styles.datafont}>PinCode : {item.pincode}</Text>
        <View style={styles.starsty}>
          <Text style={styles.datafont}>Ratings :</Text>
          <View style={styles.numstar}>
            <Text style={styles.ratingsty}>{item.rating}</Text>
            <MaterialIcons name="star" size={25} style={styles.status} />
          </View>
        </View>
        <TouchableOpacity style={styles.deletesty} onPress={deleteData}>
          <AntDesign name="delete" style={styles.delete} />
        </TouchableOpacity>
      </View>
    );
  };

  const Common = ({ name, onPress1, onPress2 }) => {
    return (
      <View style={styles.sortview2}>
        <Text style={styles.sorttext}>{name}</Text>
        <View style={styles.sortview}>
          <TouchableOpacity onPress={onPress1}>
            <Entypo name="triangle-up" size={40} style={styles.iconsty} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress2}>
            <Entypo name="triangle-down" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <View style={styles.titleview}>
        <Text style={styles.titlefont}>User's Data</Text>
        <AntDesign name="plus" style={styles.plusicon} onPress={addUser} />
      </View>
      <View style={styles.searchview}>
        <CommonInput
          value={search}
          onchange={valueSearch}
          text={"Search"}
          extraview={styles.search}
          LeftIcon={() => (
            <AntDesign name="search1" size={25} style={styles.iconsearch} />
          )}
          RightIcon={() => (
            <MaterialIcons
              name="clear"
              size={25}
              style={styles.iconsearch}
              onPress={clearSearch}
            />
          )}
        />
        <AntDesign
          name="filter"
          style={styles.iconfilter}
          onPress={onPressSheet}
        />
        <ActionSheet ref={ref} containerStyle={styles.container12}>
          <Common
            name={CommonStr.sortname}
            onPress1={sortByName2}
            onPress2={sortByName1}
          />
          <Common
            name={CommonStr.sortrate}
            onPress1={rateSort1}
            onPress2={rateSort2}
          />
          <Common
            name={CommonStr.sortdate}
            onPress1={sortingDate1}
            onPress2={sortingDate2}
          />
        </ActionSheet>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderData}
        refreshing={isLoading}
        initialNumToRender={2}
      />
      <View style={styles.btnview}>
        <Btn
          text={data === "" ? "Show Data" : "Hide Data"}
          onPress={Press}
          extraStyle={styles.btnsty}
        />
        <Btn
          text={"Press for reload"}
          onPress={Reload}
          extraStyle={styles.btnsty}
        />
        <Btn
          text={"Return To Home"}
          onPress={Return}
          extraStyle={styles.btnsty}
        />
      </View>
      {!!isLoading && <Loader />}
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
    flex: 1,
    marginHorizontal: 10,
  },
  datafont: {
    fontSize: 16,
    color: colors.background,
    fontWeight: "500",
    marginRight: 10,
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
  search: {
    margin: 10,
    width: "85%",
    borderRadius: 10,
  },
  iconsearch: {
    color: colors.lightgray,
  },
  iconfilter: {
    color: colors.lightgray,
    alignSelf: "center",
    marginHorizontal: -10,
    fontSize: 30,
  },
  container12: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 10,
  },
  searchview: {
    flexDirection: "row",
  },
  iconimage: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 20,
    shadowColor: "black",
    marginRight: 15,
  },
  star: {
    color: colors.star,
  },
  starsty: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  ratingsty: {
    fontSize: 25,
    color: colors.button,
  },
  numstar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    width: 70,
    backgroundColor: colors.background1,
    justifyContent: "center",
    borderRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
  status: {
    color: colors.star,
  },
  sortview: {
    backgroundColor: colors.button,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  sortview2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconsty: {
    color: colors.background,
  },
  sorttext: {
    fontSize: 20,
  },
});
