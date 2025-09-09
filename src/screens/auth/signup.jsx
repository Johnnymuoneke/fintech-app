import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Pressable, Button, Alert } from "react-native";
// import { createUser, userCollection } from "../../config/firebase";
import firestore from "@react-native-firebase/firestore"


export default function SignUpScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)



    const handleSignup = async () => {
        setLoading(true)
        try {
            const userCollection = firestore().collection('users')
            await userCollection.add({
                username: name,
                password: password,
                phoneNumber: phonenumber,
                email: email
            })
            Alert.alert("Success", "Sign up successful")
            navigation.navigate('Login')


        }
        catch (e) {
            Alert.alert("Error", e)
            console.log(e)
        } finally {
            setLoading(false)
        }
    };

    const navigation = useNavigation()
    const navigate = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput style={styles.input}
                placeholder="Username"
                value={name}
                onChangeText={setName}
                placeholderTextColor='#888'
            />
            <TextInput style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor='#888'
            />

            <TextInput style={styles.input}
                placeholder="PhoneNumber"
                value={phonenumber}
                onChangeText={setphonenumber}
                placeholderTextColor={'#888'}
            />

            <TextInput style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor='#888'
            />

            <Pressable
                style={[styles.button, loading && { opacity: 0.7 }]}
                onPress={handleSignup}
            >
                <Text style={styles.buttonText}>SignUp</Text>
            </Pressable>


            <Pressable style={{ backgroundColor: 'none', alignItems: 'flex-end' }}
                onPress={navigate}
            >
                <Text style={{
                    paddingTop: 20,
                    fontWeight: "900", fontSize: 21,
                    textDecorationLine: 'underline',
                    color: "black"
                }}>Log In?</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 32,
        color: "#222",
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        color: 'black',
        backgroundColor: '#fff',

    },
    button: {
        backgroundColor: '#009688',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    logg: {
        padding: 22,
        marginTop: 33,
        borderRadius: 12,
        color: 'black',
        backgroundColor: '#000',

    }
})




