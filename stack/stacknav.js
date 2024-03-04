import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./second";
import { Login } from "./first";
import { Third } from "./Third";
import { Button } from "react-native";

export const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ffa500" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login Page",
            headerSearchBarOptions: true,
            headerLeft: () => {
              <Button title="jenish" />;
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home Page",
          }}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{ title: "Third Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
