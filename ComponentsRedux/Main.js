import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductWrapper } from "./ProductWrapper";
import { UserList } from "./UserList";

export const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductWrapper}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="User" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
