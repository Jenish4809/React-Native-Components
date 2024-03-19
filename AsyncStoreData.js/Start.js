import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "./ComonColor";

export const StartRating = ({ onSelectRating }) => {
  const [starRating, setStarRating] = useState("");

  const handleStarPress = (rating) => {
    setStarRating(rating);
    onSelectRating(rating);
  };
  const ratings = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {starRating ? `${starRating}*` : "Tap to rate"}
      </Text>
      <View style={styles.stars}>
        {ratings.map((rating, index) => (
          <TouchableOpacity key={index} onPress={() => handleStarPress(rating)}>
            <MaterialIcons
              name={starRating >= rating ? "star" : "star-border"}
              size={32}
              style={
                starRating >= rating
                  ? styles.starSelected
                  : styles.starUnselected
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  starUnselected: {
    color: colors.lightgray,
  },
  starSelected: {
    color: colors.star,
  },
});
