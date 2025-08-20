import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";


export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {

    };

    const Navigation = useNavigation()
    
    function navigate(){
        Navigation.navigate('App')
    }
    return(
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
            
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable style={{alignItems:'flex-end', padding:10}}  onPress={navigate}>
                <Text 
                style={{textDecorationLine:'underline', fontWeight:'600', fontSize:22 }}
                >Sign Up</Text>
            </Pressable>

           
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:24,
        backgroundColor:'#ff'
    },
    title:{
        fontSize:24,
        fontWeight:'700',
        marginBottom:32,
        textAlign:'center',
        color:'#222'
    },
    input:{
       borderWidth:1,
       borderColor:"#ccc",
       color:'black' ,
       backgroundColor:'fff',
       fontSize:16,
       padding:12,
       marginBottom:16,
       borderRadius:8

    },
    button:{
        backgroundColor:'#009688',
        paddingVertical:14,
        borderRadius:8,
        alignItems:'center'
    },
    buttonText:{
      color:'#fff' ,
      fontSize:16,
      fontWeight:'700',
      
    }
})