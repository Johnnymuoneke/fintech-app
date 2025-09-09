import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import { defaultColors, defaultTextColors } from "../../../components/constants"

export default function Bettingscreen() {

    return (
        <View style={styles.container}>
            <View style={styles.press}>
                <Pressable style={styles.press2}>
                    <Text style={{ color: '#1DCF9F', fontWeight: '800', fontSize: 17 }}>₦100</Text>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 12 }}>Bangbet ₦100 off</Text>
                </Pressable>
                <Pressable style={styles.press2}>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 10, padding: 2 }}>₦500 available</Text>
                    <Pressable style={{backgroundColor: '#1DCF9F',padding: 4,borderRadius: 9, width: '55%',alignItems: 'center'}}>
                        <Text style={{color:'#ffffff', fontWeight:'700' }}>Use</Text>
                    </Pressable>
                </Pressable>
                <Pressable >
                    <Text style={{color:defaultTextColors.inactiveText, fontWeight:'500', fontSize:13, padding:7, margin:'auto'}}>View My Voucher {'>'}</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    press: {
        


    },
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 8,

    },
    press2: {
        padding: 13,
        marginTop: 2,
        backgroundColor: defaultColors.lighterGreen,
        borderRadius: 10,
        alignItems: 'center',
        width: '46%',
    }
})