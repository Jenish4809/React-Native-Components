import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import { Btn } from "../Api/Component";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonInput } from "./CommonTextInput";
import { colors } from "./ComonColor";

export const UserData = (props) => {
  const [chooseDate, setChooseDate] = useState("");
  const [dateVisible, setDateVisible] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [radio, setRadio] = useState(1);

  const Data = [
    {
      id: 1,
      title: "Male",
    },
    {
      id: 2,
      title: "Female",
    },
  ];

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        "user_data",
        JSON.stringify({
          name,
          lastName,
          email,
          city,
          state,
          chooseDate,
          radio,
          mobile,
          pincode,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleButton = () => {
    if (!name) {
      Alert.alert("Please enter your first name");
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      Alert.alert("First Name should contain only letters.");
    } else if (!lastName) {
      Alert.alert("Last name is required.");
    } else if (name !== lastName && !/^[a-zA-Z]+$/.test(lastName)) {
      Alert.alert("Both names should be same and contains only letters.");
    } else if (!email) {
      Alert.alert("please Enter Email Id");
    } else if (!mobile || mobile.length < 10) {
      Alert.alert("Mobile number is mandatory and it must be of length 10");
    } else if (!chooseDate) {
      Alert.alert("Select the date of birth.");
    } else if (!city || !state) {
      Alert.alert("City or State not selected.");
    } else if (!pincode || pincode.length < 6) {
      Alert.alert("Choose Pincode");
    } else {
      onPressUser();
    }
  };

  const onPressUser = () => {
    storeData();
    props.navigation.navigate("MainScreen");
  };

  const keyboardDisable = () => {
    Keyboard.dismiss();
    setNameError("");
    setLastNameError("");
    setEmailError("");
    setCityError("");
    setStateError("");
    setMobileError("");
    setPincodeError("");
  };

  const handleName = (text) => {
    !text ? setNameError("Enter Name") : setNameError("");
    setName(text);
  };
  const handleLastName = (text) => {
    !text ? setLastNameError("Enter Last NAme") : setLastNameError("");
    setLastName(text);
  };
  const handleEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text || !emailRegex.test(text)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    setEmail(text);
  };
  const handleCity = (text) => {
    !text ? setCityError("Enter City NAme") : setCityError("");
    setCity(text);
  };

  const handleState = (text) => {
    !text ? setStateError("Enter State NAme") : setStateError("");
    setState(text);
  };
  const showDatePicker = () => {
    setDateVisible(true);
  };
  const hideDatePicker = () => {
    setDateVisible(false);
  };
  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("_");
    setChooseDate(x1);
    hideDatePicker();
  };

  const handlePhoneNo = (text) => {
    if (!text || text.length !== 10) {
      setMobileError("Invalid Phone number and it must be 10 Digits");
    } else {
      setMobileError("");
    }
    setMobile(text);
  };

  const handlePinCode = (text) => {
    if (!text || text.length !== 6) {
      setPincodeError("Invalid PinCode");
    } else {
      setPincodeError("");
    }
    setPincode(text);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardDisable}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle={"default"} />
        <Text style={styles.font}>User Data</Text>
        <Image
          source={require("../assets/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug-removebg-preview.png")}
          style={styles.image}
        />

        <View style={styles.overallview}>
          <CommonInput
            astric={"*"}
            text={"Enter Name"}
            title={"Name"}
            onchange={handleName}
            value={name}
          />
          {nameError ? (
            <Text style={styles.errorcolor}>{nameError}</Text>
          ) : null}
          <CommonInput
            text={"Enter Last Name"}
            title={"Last Name"}
            onchange={handleLastName}
            value={lastName}
          />
          {lastNameError ? (
            <Text style={styles.errorcolor}>{lastNameError}</Text>
          ) : null}
          <CommonInput
            text={"Enter Email Id"}
            title={"Email Id"}
            onchange={handleEmail}
            value={email}
            keyboardType={"email-address"}
          />
          {emailError ? (
            <Text style={styles.errorcolor}>{emailError}</Text>
          ) : null}
          <CommonInput
            astric={"*"}
            title={"Phone No"}
            text={"Enter Phone No."}
            keyboardType={"numeric"}
            value={mobile}
            max={10}
            onchange={handlePhoneNo}
          />
          {mobileError ? (
            <Text style={styles.errorcolor}>{mobileError}</Text>
          ) : null}
          <DateTimePickerModal
            isVisible={dateVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={styles.genderview}>
            <Text style={styles.Bdlabeltext}>Birth Date</Text>
            <Text style={styles.astricsty}>*</Text>
          </View>
          <TouchableOpacity onPress={showDatePicker} style={styles.bdate}>
            <Text style={styles.bdatetext}>
              {chooseDate ? chooseDate : `Choose Birth Date`}
            </Text>
          </TouchableOpacity>
          <View style={styles.genderview}>
            <Text style={styles.gender}>Choose Gender</Text>
            <Text style={styles.astricsty}>*</Text>
          </View>
          <View style={styles.radioview}>
            {Data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setRadio(item.title);
                }}
              >
                <View style={styles.radiowrap}>
                  <View style={styles.radio}>
                    {radio === item.title ? (
                      <View style={styles.fill}></View>
                    ) : null}
                  </View>
                  <TouchableOpacity style={styles.radiotext}>
                    <Text style={styles.rt}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <CommonInput
            text={"Enter City"}
            title={"City"}
            onchange={handleCity}
            value={city}
          />
          {cityError ? (
            <Text style={styles.errorcolor}>{cityError}</Text>
          ) : null}
          <CommonInput
            text={"Enter State"}
            title={"State"}
            onchange={handleState}
            value={state}
          />
          {stateError ? (
            <Text style={styles.errorcolor}>{stateError}</Text>
          ) : null}
          <CommonInput
            astric={"*"}
            title={"Pincode"}
            text={"Enter Pincode"}
            keyboardType={"numeric"}
            max={6}
            value={pincode}
            onchange={handlePinCode}
          />
          {pincodeError ? (
            <Text style={styles.errorcolor}>{pincodeError}</Text>
          ) : null}
          <Btn
            text={"SUBMIT"}
            extraStyle={styles.btnsty}
            onPress={handleButton}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  font: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.fontblack,
    alignSelf: "center",
    marginTop: "3%",
    marginBottom: 30,
  },
  overallview: {
    gap: 12,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    resizeMode: "cover",
    alignSelf: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  bdate: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    marginBottom: 20,
    borderColor: colors.lightgray,
    alignSelf: "center",
  },
  bdatetext: {
    fontSize: 17,
    marginLeft: 15,
    color: colors.lightgray,
  },
  Bdlabeltext: {
    color: colors.button,
    fontSize: 17,
    marginLeft: 30,
    margin: 5,
    fontWeight: "400",
  },
  rt: {
    fontSize: 17,
    color: colors.lightgray,
  },
  radio: {
    height: 30,
    width: 30,
    borderColor: colors.lightgray,
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
  },
  radiowrap: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  fill: {
    backgroundColor: colors.button,
    height: 20,
    width: 20,
    borderRadius: 20,
    marginTop: 3,
  },
  radioview: {
    flexDirection: "row",
    gap: 30,
    marginLeft: 15,
    marginBottom: 5,
  },
  btnsty: {
    alignSelf: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    marginVertical: 15,
  },
  errorcolor: {
    fontSize: 14,
    color: colors.error,
    marginVertical: 2,
    alignSelf: "center",
  },
  gender: {
    color: colors.button,
    fontSize: 17,
    marginLeft: 30,
    fontWeight: "400",
  },
  genderview: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  astricsty: {
    fontSize: 17,
    color: colors.error,
    fontWeight: "bold",
  },
});
