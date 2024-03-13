import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { colors } from "./AsyncStoreData.js/ComonColor";
import { useRef, useState } from "react";
import { Btn } from "./Api/Component";
import Slider from "@react-native-community/slider";
import { CommonInput } from "./AsyncStoreData.js/CommonTextInput";
import { AntDesign } from "@expo/vector-icons";

export const ActionSheetCreate = () => {
  const [sliderState, setSliderState] = useState(0);
  let ref = useRef(null);
  const onPress = () => {
    ref.current.show();
  };
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.font}>Action Sheet!</Text>
      <Btn onPress={onPress} />
      <Slider
        style={{
          width: "90%",
          height: 70,
          alignSelf: "center",
          margin: 50,
        }}
        minimumValue={5}
        maximumValue={100}
        minimumTrackTintColor="red"
        maximumTrackTintColor="#000000"
        thumbTintColor={colors.button}
        value={sliderState}
        onValueChange={(value) => setSliderState(value)}
      />
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>
        {sliderState.toFixed(0)}
      </Text>
      <CommonInput
        LeftIcon={() => <AntDesign name={"search1"} size={19} />}
        RightIcon={() => <AntDesign name={"search1"} size={19} />}
      />
      <ActionSheet ref={ref} containerStyle={styles.view}>
        <View style={styles.view}>
          <Btn text={"open"} extraStyle={styles.btn} />
          <Btn text={"Close"} extraStyle={styles.btn} />
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  font: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 15,
    color: colors.lightgray,
  },
  view: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    gap: 40,
    marginVertical: 20,
    // backgroundColor: colors.lightgray,
  },
  btn: {
    alignSelf: "center",
    width: "60%",
  },
});
