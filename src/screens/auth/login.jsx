import { firebase } from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from "react-native";
import firestore from '@react-native-firebase/firestore'
import HomeScreen from "../home/home";
import { defaultColors, defaultTextColors } from "../../components/constants";
import { userCollection } from "../../config/firebase";
import auth from '@firebase/auth'
import { EmailAuthCredential } from "@firebase/auth/web-extension";

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handleLogin = async () => {
        setLoading(true)
        try {
           
            await userCollection({
                email:EmailAuthProvider,
                password:password
            })
            await 
            
            if (email === '' || password === '') {
                Alert.alert('fill in your details')
            } else if (email === email && password=== password){
                navigation.navigate('Home')
                Alert.alert('signin successfull')
            } else{
                Alert.alert('sorry userdetail is incorrect')
            }
        } catch (error) {
            Alert.alert('an error has occured please check your code and try again', error) 
        }finally{
            setLoading(false)
         }


        // try {
        //     if(email==='' || password===''){
        //         Alert.alert('fill in your details')
        //     } else if(email===email&& password===password){
        //       Alert.alert('signin successfull')     
        //         navigation.navigate('Home')
        //     }
        // } catch (error) {
        //    Alert.alert('an error has occured please check your code and try again', error) 
        // } finally{
        //     setLoading(false)
        // }
    };

    const navigation = useNavigation()
    const navigate = () => {
        navigation.navigate('SignUp')
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor='#888'

            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor='#888'
            />
            <Pressable style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable style={{ alignItems: 'flex-end', padding: 10 }} onPress={navigate}>
                <Text
                    style={{ textDecorationLine: 'underline', fontWeight: '300', fontSize: 15, color: defaultTextColors.inactiveText, textDecorationColor: "none" }}
                >Sign Up</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#ff'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 32,
        textAlign: 'center',
        color: '#222'
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        color: 'black',
        backgroundColor: 'fff',
        fontSize: 16,
        padding: 12,
        marginBottom: 16,
        borderRadius: 8

    },
    button: {
        backgroundColor: '#009688',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',

    }
})