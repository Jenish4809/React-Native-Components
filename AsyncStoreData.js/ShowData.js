import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Btn } from "../Api/Component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./ComonColor";
import { CommonText } from "./CommonTextInput";

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

  const Return = () => {
    props.navigation.navigate("MainScreen");
  };
  return (
    <View style={styles.main}>
      <View style={styles.inmain}>
        <Text style={styles.font}>User's Data</Text>
      </View>
      <View style={styles.innerview}>
        <Image
          style={styles.image}
          source={require("../assets/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug-removebg-preview.png")}
        />
        <ScrollView style={styles.showdata}>
          <CommonText
            text={"Name"}
            datauser={`Name :  ${data.name ? data.name : ""}`}
          />
          <CommonText
            text={"Last Name"}
            datauser={`Last Name :  ${data.lastName ? data.lastName : ""}`}
          />
          <CommonText
            text={"Email"}
            datauser={`Email :  ${data.email ? data.email : ""}`}
          />
          <CommonText
            text={"Mobile No."}
            datauser={`Mo No :  ${data.mobile ? data.mobile : ""}`}
          />
          <CommonText
            text={"Birth Date"}
            datauser={`Birth Date :  ${data.chooseDate ? data.chooseDate : ""}`}
          />
          <CommonText
            text={"Gender"}
            datauser={`Gender :  ${data.radio ? data.radio : ""}`}
          />
          <CommonText
            text={"City"}
            datauser={`City :  ${data.city ? data.city : ""}`}
          />
          <CommonText
            text={"State"}
            datauser={`State :  ${data.state ? data.state : ""}`}
          />
          <CommonText
            text={"Pincode"}
            datauser={`Pincode :  ${data.pincode ? data.pincode : ""}`}
          />
        </ScrollView>
      </View>
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
    marginTop: 20,
    color: colors.background,
    fontWeight: "500",
    marginTop: 40,
  },

  inmain: {
    height: "25%",
    width: "100%",
    backgroundColor: colors.button,
    alignItems: "center",
    position: "relative",
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: "center",
    position: "absolute",
    top: -50,
  },
  innerview: {
    height: "60%",
    width: "80%",
    backgroundColor: colors.background,
    elevation: 5,
    bottom: 20,
    alignSelf: "center",
    borderRadius: 7,
    paddingBottom: 10,
  },
  btnview: {
    alignItems: "center",
    paddingVertical: 5,
    gap: 15,
  },
  btnsty: {
    width: "70%",
  },
});
