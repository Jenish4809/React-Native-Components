import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Ionions from "@expo/vector-icons/Entypo";
const Drawer = createDrawerNavigator();

export const Drawers = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomeDrawer {...props} />}>
        <Drawer.Screen name="HomeHere" component={HomeHere} />
        <Drawer.Screen name="LoginHere" component={LoginHere} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const HomeHere = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="default" />
      <Text style={styles.font}>Home Drawer!</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Press Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomeDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.label1}>
        <View style={styles.label2}>
          <Ionions name="user" size={30} color={"#dcdcdc"} />
          <Text style={styles.label3}>User Info</Text>
        </View>
      </View>
      <DrawerItem
        label={"Home"}
        activeBackgroundColor="#cd5c5c"
        activeTintColor="#f0e68c"
        inactiveBackgroundColor="#f0e68c"
        inactiveTintColor="#cd5c5c"
        labelStyle={styles.label4}
        onPress={() => props.navigation.navigate("HomeHere")}
      />
      <DrawerItem
        label={"Login"}
        labelStyle={styles.label4}
        activeBackgroundColor="#cd5c5c"
        activeTintColor="#f0e68c"
        inactiveBackgroundColor="#f0e68c"
        inactiveTintColor="#cd5c5c"
        onPress={() => props.navigation.navigate("LoginHere")}
      />
    </DrawerContentScrollView>
  );
};
const LoginHere = () => {
  return (
    <View style={styles.main1}>
      <StatusBar barStyle="default" />
      <Text style={styles.font1}>Login Drawer!</Text>
      <TouchableOpacity style={styles.btn1}>
        <Text style={styles.btntext1}>Press Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008b8b",
  },
  font: {
    fontSize: 30,
    color: "#fff8dc",
    margin: 15,
  },
  btn: {
    height: 40,
    width: "40%",
    backgroundColor: "#b8860b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#fff8dc",
  },
  btntext: {
    fontSize: 20,
  },
  main1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006400",
  },
  font1: {
    fontSize: 30,
    color: "#fff8dc",
    margin: 15,
  },
  btn1: {
    height: 40,
    width: "40%",
    backgroundColor: "#b8860b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#fff8dc",
  },
  btntext1: {
    fontSize: 20,
  },
  label1: {
    flex: 1,
    backgroundColor: "#dc143c",
  },
  label2: {
    padding: 20,
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 3,
    borderColor: "#a9a9a9",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
  },
  label3: {
    fontSize: 18,
    color: "#dcdcdc",
    fontWeight: "700",
  },
  label4: {
    fontSize: 20,
    fontWeight: "500",
  },
});
