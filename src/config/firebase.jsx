import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export const userCollection = firestore().collection('users')
export async function createUser(name, email, phonenumber, password) {
    try {
        const resp = await userCollection.add({
            name,
            email,
            password,
            phonenumber
        })
        console.log(resp)
        Alert.alert("Sucess", "Signup successful")
    } catch (error) {
        console.log(error)
        Alert.alert("Error", error)
    }
}