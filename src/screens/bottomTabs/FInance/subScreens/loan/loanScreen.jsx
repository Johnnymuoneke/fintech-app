import { Pressable, StyleSheet, Text, View } from "react-native";
import { defaultColors, defaultTextColors } from "../../../../../components/constants";
import { Button } from "@react-navigation/elements";
import { BanknotesIcon } from "react-native-heroicons/outline";
import { LinearGradient } from 'react-native-linear-gradient';


export default function LoansScreen() {
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <LinearGradient style={styles.contianer}
                colors={['#1DCF9F', '#7DE9CD', '#BFF6EA']}
            >
                <View style={styles.viewcontainer}>
                    <BanknotesIcon color={'white'} size={30}/>
                    <Text style={{ color: '#ffffff', fontSize: 15, padding: 2.3, fontWeight: '800',  marginRight:'3%'}}>EaseMoni</Text>
                </View>

                <View style={styles.view2}>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 12, padding: 3, textAlign: 'center' }}>Get a loan up to </Text>
                    <Text style={{ color: defaultColors.green, fontSize: 23, padding: 4, textAlign: 'center', fontWeight: '700' }}>2,000,000</Text>
                    <Pressable style={styles.Pressable}>
                        <Text style={{ color: '#ffffff', fontWeight: '700', textAlign: 'center' }}>Apply</Text>
                    </Pressable>
                </View>
            </LinearGradient>
            <Text style={{ color: defaultTextColors.inactiveText, fontSize: 10, padding: 1, fontWeight: '500', alignSelf: 'center' }}>All loan services are provided by BlueRidge MicroFinance Bank Ltd. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
      
        marginTop: "2%",
        paddingBottom: 10
    },
    viewcontainer: {
        flexDirection: 'row',
        width: '78%',
        padding: 10

    },
    view2: {

        padding: 12,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#FFFFFFB3",
        width: '80%',
        margin: "auto"
    },
    Pressable: {
        width: '70%',
        alignSelf: 'center',
        backgroundColor: '#05A678',
        padding: 8,
        borderRadius: 15,
        marginTop: '1%'
    }
})