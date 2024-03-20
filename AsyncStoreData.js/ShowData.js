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
} from "react-native";
import { Btn } from "../Api/Component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./ComonColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CommonInput } from "./CommonTextInput";
import ActionSheet from "react-native-actions-sheet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import moment from "moment";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export const ShowData = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [oldData, setOldData] = useState([]);

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

  const sortingDate = () => {
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
      const userData = await AsyncStorage.getItem("NEWUSER");
      const ArrayData = JSON.parse(userData);
      setData(ArrayData);
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
        <Text style={styles.datafont}>
          Name : {moment(item.date).format("DD/MM/YYYY - HH:m")}
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
        <Text style={styles.datafont}>Ratings : {item.rating}</Text>
        <TouchableOpacity
          style={styles.deletesty}
          onPress={() => {
            Alert.alert(
              "Are you sure You want to Delete it",
              "Tap OK to continue",
              [
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
              ]
            );
          }}
        >
          <AntDesign name="delete" style={styles.delete} />
        </TouchableOpacity>
      </View>
    );
  };
  const Common = ({ name, sort, onPress1, onPress2 }) => {
    return (
      <View style={styles.sortstyle}>
        <TouchableOpacity style={styles.main12} onPress={onPress1}>
          <Text style={styles.text12}>{name}</Text>
        </TouchableOpacity>
        <FontAwesome name="exchange" style={styles.exchange} />
        <TouchableOpacity style={styles.main12} onPress={onPress2}>
          <Text style={styles.text12}>{sort}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <View style={styles.titleview}>
        <Text style={styles.titlefont}>User's Data</Text>
        <AntDesign
          name="plus"
          style={styles.plusicon}
          onPress={() => {
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
          }}
        />
      </View>
      <View style={styles.searchview}>
        <CommonInput
          value={search}
          onchange={(txt) => {
            onSearch(txt);
            setSearch(txt);
          }}
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
              onPress={() => {
                setSearch("");
                setData(oldData);
                Keyboard.dismiss();
              }}
            />
          )}
        />
        <AntDesign
          name="filter"
          size={30}
          style={styles.iconfilter}
          onPress={onPressSheet}
        />
        <ActionSheet ref={ref} containerStyle={styles.container12}>
          <Common
            name={"Sort by Decending Name"}
            sort={"Sort by Acending Name"}
            onPress1={sortByName2}
            onPress2={sortByName1}
          />
          <Common
            name={"Sort by Decending Rating"}
            sort={"Sort by Acending Rating"}
            onPress1={rateSort1}
            onPress2={rateSort2}
          />
          <Common
            name={"Sort by Decending Date"}
            sort={"Sort by Acending Date"}
            onPress1={sortingDate}
            onPress2={sortingDate}
          />
        </ActionSheet>
      </View>
      <FlatList data={data} renderItem={renderData} />
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
  },
  main12: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 24,
    width: "40%",
    height: 70,
    margin: 20,
    alignSelf: "center",
  },
  container12: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 10,
  },
  text12: {
    fontSize: 15,
  },
  sortstyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  exchange: {
    fontSize: 20,
  },
  searchview: {
    flexDirection: "row",
  },
});
