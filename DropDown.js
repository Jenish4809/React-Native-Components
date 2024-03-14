import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "./AsyncStoreData.js/ComonColor";

export const data = [
  { id: "Andhra Pradesh", state: "Andhra Pradesh", search: "Andhra Pradesh" },
  {
    id: "Arunachal Pradesh",
    state: "Arunachal Pradesh",
    search: "Arunachal Pradesh",
  },
  { id: "Assam", state: "Assam", search: "Assam" },
  { id: "Bihar", state: "Bihar", search: "Bihar" },
  { id: "Chhattisgarh", state: "Chhattisgarh", search: "Chhattisgarh" },
  { id: "Goa", state: "Goa", search: "Goa" },
  { id: "Gujarat", state: "Gujarat", search: "Gujarat" },
  { id: "Haryana", state: "Haryana", search: "Haryana" },
  {
    id: "Himachal Pradesh",
    state: "Himachal Pradesh",
    search: "Himachal Pradesh",
  },
  {
    id: "Jammu and Kashmir",
    state: "Jammu and Kashmir",
    search: "Jammu and Kashmir",
  },
  { id: "Jharkhand", state: "Jharkhand", search: "Jharkhand" },
  { id: "Karnataka", state: "Karnataka", search: "Karnataka" },
  { id: "Kerala", state: "Kerala", search: "Kerala" },
  { id: "Madhya Pradesh", state: "Madhya Pradesh", search: "Madhya Pradesh" },
  { id: "Maharashtra", state: "Maharashtra", search: "Maharashtra" },
  { id: "Manipur", state: "Manipur", search: "Manipur" },
  { id: "Meghalaya", state: "Meghalaya", search: "Meghalaya" },
  { id: "Mizoram", state: "Mizoram", search: "Mizoram" },
  { id: "Nagaland", state: "Nagaland", search: "Nagaland" },
  { id: "Odisha", state: "Odisha", search: "Odisha" },
  { id: "Punjab", state: "Punjab", search: "Punjab" },
  { id: "Rajasthan", state: "Rajasthan", search: "Rajasthan" },
  { id: "Sikkim", state: "Sikkim", search: "Sikkim" },
  { id: "Tamil Nadu", state: "Tamil Nadu", search: "Tamil Nadu" },
  { id: "Telangana", state: "Telangana", search: "Telangana" },
  { id: "Tripura", state: "Tripura", search: "Tripura" },
  { id: "Uttarakhand", state: "Uttarakhand", search: "Uttarakhand" },
  { id: "Uttar Pradesh", state: "Uttar Pradesh", search: "Uttar Pradesh" },
  { id: "West Bengal", state: "West Bengal", search: "West Bengal" },
  {
    id: "Andaman and Nicobar Islands",
    state: "Andaman and Nicobar Islands",
    search: "Andaman and Nicobar Islands",
  },
  { id: "Chandigarh", state: "Chandigarh", search: "Chandigarh" },
  {
    id: "Dadra and Nagar Haveli and Daman and Diu",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    search: "Dadra and Nagar Haveli and Daman and Diu",
  },
  { id: "Delhi", state: "Delhi", search: "Delhi" },
  { id: "Lakshadweep", state: "Lakshadweep", search: "Lakshadweep" },
  { id: "Puducherry", state: "Puducherry", search: "Puducherry" },
];

export const DropdownComponent = () => {
  const [state, setState] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.containerstate}>
      <Text style={styles.label}>State</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: colors.button }]}
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
        onChange={(item) => {
          setState(item.state);
          setIsFocus(false);
        }}
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
  );
};

const styles = StyleSheet.create({
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
});
