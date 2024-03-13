import { View, StyleSheet, Text, StatusBar, Image } from "react-native";
import { Btn } from "./Api/Component";
import * as ImagePicker from "expo-image-picker";
import { colors } from "./AsyncStoreData.js/ComonColor";
import { useState } from "react";

export const GetImage = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (err) {
      alert("Error Uploading Image : " + err);
    }
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
      alert("Error Uploading Image : " + err);
    }
  };

  return (
    <View style={styles.titleview}>
      <StatusBar barStyle={"default"} />
      <View>
        <Text style={styles.title}>Image Picker!</Text>
        {image && <Image source={{ uri: image }} style={styles.imagesize} />}
        {/* {image && <Image source={{ uri: cameraImage }} style={styles.imagesize} />} */}
      </View>
      <View style={styles.main}>
        <Btn text={"Open Camera"} onPress={uploadImage} />
        <Btn text={"Open Gallery"} onPress={pickImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleview: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
  },
  imagesize: {
    width: 400,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});
