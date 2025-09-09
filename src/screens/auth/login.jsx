import { firebase } from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from "react-native";
import firestore from '@react-native-firebase/firestore'
import {  defaultTextColors } from "../../components/constants";



export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handleLogin = async () => {
        setLoading(true)
            // try {    
            //     const userCollection = firestore().collection('users')
            //     const querySnapshot = await userCollection
            //         .where('email', '==', email)
            //         .where('password', '==', password)
            //         .get();
            //     if (querySnapshot.empty) {
            //         Alert.alert('Error', 'Invalid email or password');
            //     } else {
            //         Alert.alert('Success', 'Login successful');
            //         navigation.navigate('Home');
            //     }
            // } catch (error) {
            //     console.log(error, 'error looging in')
            // }
            try {
                const userCollection= firestore().collection("users");
                const cloneUsercollection = await userCollection
                .where('email', '==', email)
                .where('password', '==', password)
                .get();
                if(cloneUsercollection.empty){
                    Alert.alert('invalid username or password')
                }else {
                    Alert.alert('login successful')
                    navigation.navigate('Home')
                }
            } catch (error) {
                Alert.alert('an error has occured')
            }


       
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