import { Pressable, StyleSheet, Text, View } from "react-native";
import { CalendarDaysIcon, ClockIcon, CreditCardIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../components/constants";



export default function MeContainer3() {
    const arrays = [
        { icon: <CalendarDaysIcon color={defaultColors.green}  />, text: 'Transaction History', textarrow: '>' },
        { icon: <ClockIcon color={defaultColors.green} />, text: 'Account Limit', text2: 'View your transaction history', textarrow: '>' },
        { icon: <CreditCardIcon color={defaultColors.green}/>, text: 'Bank Card/Account', text2: 'Add payment option', textarrow: '>' }
    ]
    const containerInput = []
    for (i = 0; i < arrays.length; i++) {
        containerInput.push(arrays[i])
    }

    return (
        <View style={styles.contain}>
            {containerInput.map((item, rows) => (
                <View key={rows}>
                    <Pressable style={styles.container}>
                        {item.icon}
                        <View style={styles.viewcontianer}>
                            <Text style={{ color: '#161616', fontSize:14.4,padding:1 }}>{item.text}</Text>
                            <Text style={{ color: defaultTextColors.inactiveText, fontSize:12 }}>{item.text2}</Text>
                        </View>
                        <Text style={{ color: '#161616',  }}>{item.textarrow}</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#ffffff',
        padding: 10,
        width: '94%',
        alignSelf: 'center',
        marginTop: "1%",
        borderRadius: 10,

    },
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 13,


    },
    viewcontianer:{
        width:'70%',
        alignItems:'flex-start',
        alignSelf:'center'
    }
})