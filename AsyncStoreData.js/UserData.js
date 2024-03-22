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
  KeyboardAvoidingView,
  Modal,
  Button,
} from "react-native";
import { Btn } from "../Api/Component";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonInput } from "./CommonTextInput";
import { colors } from "./ComonColor";
import { Dropdown } from "react-native-element-dropdown";
import { data } from "../DropDown";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StartRating } from "./Start";
import * as ImagePicker from "expo-image-picker";
import { CommonStr } from "./commonStr";

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
  const [mobileError, setMobileError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [radio, setRadio] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
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

  const storing = async () => {
    const user = {
      userName: userName,
      date: new Date(),
      name: name,
      email: email,
      chooseDate: chooseDate,
      lastName: lastName,
      radio: radio,
      city: city,
      pincode: pincode,
      state: state,
      mobile: mobile,
      rating: selectedRating,
      image: image,
    };

    let data = (await AsyncStorage.getItem("NEWUSER")) || JSON.stringify([]);
    let add = JSON.parse(data);
    user.id = data.length + 1;
    let mix = [...add, user];
    await AsyncStorage.setItem("NEWUSER", JSON.stringify(mix));
  };

  const handleButton = () => {
    if (!userName) {
      Alert.alert(CommonStr.useraleart);
    } else if (!name) {
      Alert.alert(CommonStr.namealeart);
    } else if (!lastName) {
      Alert.alert(CommonStr.lastnamealeart);
    } else if (!email) {
      Alert.alert(CommonStr.emailaleart);
    } else if (!mobile || mobile.length < 10) {
      Alert.alert(CommonStr.mobilealeart);
    } else if (!chooseDate) {
      Alert.alert(CommonStr.bdatealeart);
    } else if (!city || !state) {
      Alert.alert(CommonStr.citystatealeart);
    } else if (!pincode || pincode.length < 6) {
      Alert.alert(CommonStr.pincodealeart);
    } else if (!selectedRating) {
      Alert.alert(CommonStr.ratealeart);
    } else {
      onPressUser();
    }
  };

  const onPressUser = () => {
    storing();
    props.navigation.navigate("MainScreen");
  };

  const keyboardDisable = () => {
    Keyboard.dismiss();
    setNameError("");
    setLastNameError("");
    setEmailError("");
    setCityError("");
    setMobileError("");
    setPincodeError("");
    setUserNameErr("");
  };

  const Userid = (text) => {
    const userReg = /^[0-9A-Za-z]{6,16}$/;
    if (!text || !userReg.test(text)) {
      setUserNameErr(CommonStr.usererr);
    } else {
      setUserNameErr("");
    }
    setUserName(text);
  };
  const handleName = (text) => {
    !text ? setNameError(CommonStr.nameerr) : setNameError("");
    setName(text);
  };
  const handleLastName = (text) => {
    !text ? setLastNameError(CommonStr.lastnameerr) : setLastNameError("");
    setLastName(text);
  };
  const handleEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text || !emailRegex.test(text)) {
      setEmailError(CommonStr.emailerr);
    } else {
      setEmailError("");
    }
    setEmail(text);
  };
  const handleCity = (text) => {
    !text ? setCityError(CommonStr.cityerr) : setCityError("");
    setCity(text);
  };

  const handleState = (item) => {
    setState(item.state);
    setIsFocus(false);
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
      setMobileError(CommonStr.mobileerr);
    } else {
      setMobileError("");
    }
    setMobile(text);
  };

  const handlePinCode = (text) => {
    if (!text || text.length !== 6) {
      setPincodeError(CommonStr.pincodeerr);
    } else {
      setPincodeError("");
    }
    setPincode(text);
  };

  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (err) {
      alert(CommonStr.erruploadimg + err);
    }
    setOpen(false);
  };

  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (err) {
      alert(CommonStr.erruploadimg + err);
    }
    setOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardDisable}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView>
          <StatusBar barStyle={"default"} />
          <Text style={styles.font}>User Data</Text>
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
          >
            <Image
              source={
                !image ? require("../assets/default_icon.png") : { uri: image }
              }
              style={styles.image}
            />
          </TouchableOpacity>
          <Modal visible={open} transparent={true} animationType="slide">
            <View style={styles.centerview}>
              <View style={styles.innerview}>
                <Text style={styles.choose}>Choose Photo</Text>
                <View style={styles.photos}>
                  <Entypo
                    name="camera"
                    style={styles.galleryicon}
                    onPress={uploadImage}
                  />
                  <MaterialIcons
                    name="add-to-photos"
                    style={styles.galleryicon}
                    onPress={pickImage}
                  />
                </View>
                <Button
                  title={CommonStr.closedialog}
                  onPress={() => setOpen(false)}
                />
              </View>
            </View>
          </Modal>
          <View style={styles.overallview}>
            <CommonInput
              astric={CommonStr.astric}
              title={CommonStr.username}
              text={CommonStr.textusername}
              value={userName}
              onchange={Userid}
            />
            {userNameErr ? (
              <Text style={styles.errorcolor}>{userNameErr}</Text>
            ) : null}
            <CommonInput
              astric={CommonStr.astric}
              text={CommonStr.textname}
              title={CommonStr.name}
              onchange={handleName}
              value={name}
            />
            {nameError ? (
              <Text style={styles.errorcolor}>{nameError}</Text>
            ) : null}
            <CommonInput
              text={CommonStr.textlastname}
              title={CommonStr.lastname}
              onchange={handleLastName}
              value={lastName}
            />
            {lastNameError ? (
              <Text style={styles.errorcolor}>{lastNameError}</Text>
            ) : null}
            <CommonInput
              text={CommonStr.textemail}
              title={CommonStr.mail}
              onchange={handleEmail}
              value={email}
              keyboardType={"email-address"}
            />
            {emailError ? (
              <Text style={styles.errorcolor}>{emailError}</Text>
            ) : null}
            <CommonInput
              astric={CommonStr.astric}
              title={CommonStr.mobile}
              text={CommonStr.textmobile}
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
              maximumDate={new Date()}
            />
            <View style={styles.genderview}>
              <Text style={styles.Bdlabeltext}>Birth Date</Text>
              <Text style={styles.astricsty}>*</Text>
            </View>
            <TouchableOpacity onPress={showDatePicker} style={styles.bdate}>
              <Text style={styles.bdatetext}>
                {chooseDate ? chooseDate : CommonStr.birthdate}
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
              text={CommonStr.textcity}
              title={CommonStr.city}
              onchange={handleCity}
              value={city}
            />
            {cityError ? (
              <Text style={styles.errorcolor}>{cityError}</Text>
            ) : null}
            <View style={styles.containerstate}>
              <Text style={styles.label}>State</Text>
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { borderColor: colors.button },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                minHeight={100}
                labelField="id"
                valueField="state"
                searchField="search"
                placeholder={"State"}
                searchPlaceholder="Search"
                value={state}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={handleState}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isFocus ? colors.button : colors.lightgray}
                    name="folderopen"
                    size={20}
                  />
                )}
              />
            </View>
            <CommonInput
              astric={CommonStr.astric}
              title={CommonStr.pincode}
              text={CommonStr.textpincode}
              keyboardType={"numeric"}
              max={6}
              value={pincode}
              onchange={handlePinCode}
            />
            {pincodeError ? (
              <Text style={styles.errorcolor}>{pincodeError}</Text>
            ) : null}
            <StartRating onSelectRating={handleSelectRating} />
            <Btn
              text={"SUBMIT"}
              extraStyle={styles.btnsty}
              onPress={handleButton}
            />
          </View>
        </KeyboardAvoidingView>
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
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
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
  containerstate: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: colors.lightgray,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: "5%",
  },
  icon: {
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 17,
  },
  selectedTextStyle: {
    fontSize: 17,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 17,
    backgroundColor: colors.background1,
    color: colors.lightgray,
  },
  label: {
    fontSize: 15,
    color: colors.button,
    marginHorizontal: 15,
    padding: 2,
  },
  centerview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  innerview: {
    backgroundColor: "skyblue",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
  },
  photos: {
    flexDirection: "row",
  },
  galleryicon: {
    fontSize: 35,
    margin: 35,
  },
  choose: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "600",
  },
});
