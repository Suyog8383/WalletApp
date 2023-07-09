import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import Welcome from "../../screens/Welcome";
import Home from "../../screens/Home";
import { Colors } from "../Colors";
import Profile from "../Header/Profile";
import Greeting from "../Header/Greeting";
import Avi from "../../assets/avi/avatar.png";
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};
const Stack = createStackNavigator();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.greylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: Colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imgConatinerStyle={{ backgroundColor: Colors.tertiary }}
            />
          ),
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Suyog"
                subText="Welcome Back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
