import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Pressable, Button } from "react-native";


export default function SignUpScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {

    };

    const Navigation = useNavigation()
    const navigate = () => {
        Navigation.navigate('Login')
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor='#888'
            />

            <TextInput style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor='#888'
            />
            <Pressable
                style={styles.button}
            >
                <Text style={styles.buttonText}>SignUp</Text>
            </Pressable>

            { <Button  style={{backgroundColor:'none', flex:1}}
            onPress={navigate} title="have an account"/> }

            <Pressable style={{ backgroundColor: 'none', alignItems: 'flex-end' }}
                onPress={navigate}
            >
                <Text style={{
                    paddingTop: 20,
                    fontWeight: "900", fontSize: 21,
                    textDecorationLine: 'underline',
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




