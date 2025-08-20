import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import DetalsScreen from "./src/screens/details/detals";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";
import AuthRoute from "./src/router/authRootStack";
import MainRoute from "./src/router/mainRoutes";


const Navigation = createNativeStackNavigator()



function App() {
  const isDarkMode = useColorScheme() === 'dark';
   

  return (
    <NavigationContainer>
       <Navigation.Navigator screenOptions={{headerShown:false}}>
        <Navigation.Screen name="Home" component={MainRoute}/>
        <Navigation.Screen name="Auth" component={AuthRoute}/>
       </Navigation.Navigator>
    </NavigationContainer>

  );
}
export default App