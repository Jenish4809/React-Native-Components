import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UiSplash } from "./Splash";
import { OnBoarding2, OnBoarding3 } from "./OnBoarding2";
import { OnBoarding4 } from "./OnBoarding4";
import { OnBoarding1 } from "./OnBoarding1";
import { Login1 } from "./Login/Screen1";

export const PracticeMain = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UiSplash" component={UiSplash} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
        <Stack.Screen name="Login1" component={Login1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
