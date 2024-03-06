// import { Text, View, StyleSheet, StatusBar, Button } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import AntDesign from "@expo/vector-icons/AntDesign";
// const Tab = createMaterialTopTabNavigator();
// export const BottomNav = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Login"
//           component={Login}
//           options={{
//             tabBarLabel: "Hello",
//             tabBarShowIcon: true,
//             tabBarIcon: () => {
//               return <AntDesign name="login" size={20} color={"blue"} />;
//             },
//           }}
//         />
//         <Tab.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{
//             tabBarIcon: () => {
//               return <AntDesign name="home" size={25} color={"red"} />;
//             },
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const Login = () => {
//   return (
//     <View style={styles.main}>
//       <StatusBar barStyle={"default"} />
//       <Text style={styles.font}>Login Page</Text>
//     </View>
//   );
// };

// const SignUp = () => {
//   return (
//     <View style={styles.main1}>
//       <Text style={styles.font1}>SignUp Page</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: "#e9967a",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   font: {
//     fontSize: 30,
//     color: "black",
//   },
//   main1: {
//     flex: 1,
//     backgroundColor: "#963c1e",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   font1: {
//     fontSize: 30,
//     color: "#fff",
//   },
// });

import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const CustomeTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -50,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#e32f45",
          ...styles.shadow,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
export const NavigateTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 15,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#fff",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Find"
          component={Find}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/search-interface-symbol.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Search
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/plus.png")}
                resizeMode="contain"
                style={{ height: 30, width: 30, tintColor: "#fff" }}
              />
            ),
            tabBarButton: (props) => <CustomeTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/gear.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Setting
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/bubble-chat.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Chat
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.font}>Home Page</Text>
    </View>
  );
};

const Find = () => {
  return (
    <View style={styles.main1}>
      <Text style={styles.font}>FInd Page</Text>
    </View>
  );
};
const Post = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#800080",
      }}
    >
      <Text style={styles.font}>Post Page</Text>
    </View>
  );
};
const Setting = () => {
  return (
    <View style={styles.main1}>
      <Text style={styles.font}>Setting Page</Text>
    </View>
  );
};
const Chat = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.font}>Chat Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#5f9ea0",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 30,
    color: "#fff",
  },
  main1: {
    flex: 1,
    backgroundColor: "#da70d6",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#60de32",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 2,
    shadowRadius: 4,
  },
});
