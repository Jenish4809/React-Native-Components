import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import images from "../assets/slider/index";

export const Swipe = () => {
  const data = [
    {
      id: 1,
      image: images.img1,
    },
    {
      id: 2,
      image: images.img2,
    },
    {
      id: 3,
      image: images.img3,
    },
    {
      id: 4,
      image: images.img4,
    },
    {
      id: 5,
      image: images.img5,
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.title}>#Swiper</Text>
      <View style={styles.imageview}>
        <FlatList
          keyExtractor={(item) => item.id}
          horizontal
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EADFB4",
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    margin: 10,
    fontWeight: "800",
  },
  image: {
    height: 400,
    width: 400,
    margin: 10,
  },
  imageview: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
