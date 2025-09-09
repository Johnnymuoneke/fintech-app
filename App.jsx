import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import DetalsScreen from "./src/screens/details/detals";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";
import AuthRoute from "./src/router/authRootStack";
import MainRoute from "./src/router/mainRoutes";
import firestore, { collection } from '@react-native-firebase/firestore'
import { Provider } from "react-redux";
import { store } from "./src/store/store";


const Navigation = createNativeStackNavigator()



function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Collection = firestore().collection('1')
  Collection.get().then(res =>
    res.forEach(document => {
      console.log(document.id, document.data())
    })
  )
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation.Navigator screenOptions={{ headerShown: false }}>
          <Navigation.Screen name="Auth" component={AuthRoute} />
           {<Navigation.Screen name="Home" component={MainRoute} /> } 
        </Navigation.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
export default App