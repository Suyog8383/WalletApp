import SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import RootStack from "./components/Navigators/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return;
  }
  return <RootStack />;
}
