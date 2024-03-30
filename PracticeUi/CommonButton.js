import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

export const CommonButton = ({
  title,
  onpress,
  extra,
  LeftIcon,
  titleextra,
}) => {
  return (
    <TouchableOpacity style={[styles.btnsty, extra]} onPress={onpress}>
      {!!LeftIcon && <LeftIcon />}
      <Text style={[styles.text, titleextra]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const CommonLogin = ({ title, extra, extratext, Image }) => {
  return (
    <TouchableOpacity style={[styles.btnsty, extra]}>
      <View style={styles.imageview}>
        {!!Image && <Image />}
        <Text style={[styles.logintext, extratext]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const CommonInput = ({
  title,
  LeftIcon,
  extrasty,
  placeholderTextColor,
  RightIcon,
}) => {
  return (
    <View style={[styles.mainContainer, extrasty]}>
      <View style={styles.inputview}>
        {!!LeftIcon && <LeftIcon />}
        <TextInput
          placeholder={title}
          style={styles.input}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
      {!!RightIcon && <RightIcon />}
    </View>
  );
};
const styles = StyleSheet.create({
  btnsty: {
    height: 58,
    width: "100%",
    backgroundColor: "#9610FF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  logintext: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  imageview: {
    flexDirection: "row",
    gap: 10,
  },

  inputview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  mainContainer: {
    alignItems: "center",
    height: 60,
    width: "100%",
    borderRadius: 16,
    paddingHorizontal: 20,
    elevation: 1,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    justifyContent: "space-between",
  },
});
