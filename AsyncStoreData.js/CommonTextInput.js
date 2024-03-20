import { TextInput, View, Text, StyleSheet } from "react-native";
import { colors } from "./ComonColor";

export const CommonInput = ({
  text,
  extraStyle,
  title,
  value,
  onchange,
  Colors,
  ref,
  LeftIcon,
  RightIcon,
  keyboardType,
  astric,
  extraastric,
  extraview,
  max,
}) => {
  return (
    <View>
      <View style={styles.mainAstricStyle}>
        {!!title && <Text style={styles.text}>{title}</Text>}
        {!!astric && <Text style={styles.asterisk}>{astric}</Text>}
      </View>
      <View style={[styles.view, extraview]}>
        <View style={styles.outerContainerStyle}>
          {!!LeftIcon && <LeftIcon />}
          <TextInput
            ref={ref}
            placeholder={text || "Name"}
            placeholderTextColor={Colors || colors.lightgray}
            style={[styles.input, extraStyle]}
            value={value}
            onChangeText={onchange}
            keyboardType={keyboardType}
            maxLength={max}
            onClear
          />
        </View>
        {!!RightIcon && <RightIcon />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    width: "90%",
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingLeft: 20,
    alignSelf: "center",
    borderRadius: 25,
    borderColor: colors.lightgray,
  },
  input: {
    borderColor: colors.lightgray,
    paddingLeft: 15,
    fontSize: 20,
  },
  text: {
    color: colors.button,
    fontSize: 17,
    marginLeft: 30,
    margin: 5,
    fontWeight: "400",
  },
  textmain: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderRadius: 20,
    borderBlockColor: colors.lightgray,
    justifyContent: "center",
    paddingLeft: 15,
    alignSelf: "center",
  },
  titletext: {
    fontSize: 17,
    color: colors.lightgray,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginBottom: 3,
  },
  datacolor: {
    fontSize: 15,
    color: colors.lightgray,
  },
  maincont: {
    marginTop: 20,
  },
  asterisk: {
    fontSize: 17,
    color: colors.error,
    fontWeight: "bold",
  },
  mainAstricStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  outerContainerStyle: {
    flexDirection: "row",
  },
});

export const CommonText = ({ text, datauser, extra }) => {
  return (
    <View style={styles.maincont}>
      <Text style={[styles.titletext, extra]}>{text}</Text>
      <View style={styles.textmain}>
        <Text style={styles.datacolor}>{datauser}</Text>
      </View>
    </View>
  );
};
