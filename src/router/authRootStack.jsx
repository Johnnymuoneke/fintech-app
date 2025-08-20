import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login";
import SignUpScreen from "../screens/auth/signup";

export default function AuthRoute() {
    const Navigation = createNativeStackNavigator()
    return (
        
        <Navigation.Navigator screenOptions={{headerShown:false}}>
            <Navigation.Screen name='SignUp' component={SignUpScreen}/>
            <Navigation.Screen name='Login' component={LoginScreen} />
        </Navigation.Navigator>
            
        
    )
}