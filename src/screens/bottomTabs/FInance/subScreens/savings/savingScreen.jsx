import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { defaultColors, defaultTextColors } from "../../../../../components/constants";
import SaveScreen2 from "./saving2";
import { WalletIcon } from "react-native-heroicons/outline";

export default function SaviningScreen() {
   

    return (
        <>
           

            <View style={styles.container}>
                <View>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 12, padding: 1 }}>Total Balance</Text>
                    <Text style={{ color: '#4B3F72', fontSize: 12 }}>₦5,000</Text>
                </View>
                <View>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 12, padding: 1 }}>Total Interest</Text>
                    <Text style={{ color: '#4B3F72', alignSelf: 'flex-end', fontSize: 12, }}>₦2,000</Text>
                </View>

            </View>

            <SaveScreen2/>
        
             

        </>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:'#ffffff',
        width:'97%',
        alignSelf:'center'
    },
    container2:{
        width:'97%',
        alignSelf:'center',
        padding:10
    },
    container2sub:{
        width:'40%',
        padding:7,
        
        
    }
})