import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./MainScreen";
import { ShowData } from "./ShowData";
import { UserData } from "./UserData";
import { Splash } from "./Splash";

export const NavigationUser = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="ShowData" component={ShowData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
