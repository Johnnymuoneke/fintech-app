import { Pressable, StyleSheet, Text, View } from "react-native";
import { GifIcon, PhoneArrowUpRightIcon, PhoneIcon, ShieldCheckIcon, StarIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../components/constants";

export default function Mecontainer4() {
    const arrays = [
        { icon: <ShieldCheckIcon color={defaultColors.green}/>, text1: 'Security Center', text2: 'Protect your funds', arrortext: '>' },
        { icon: <PhoneIcon color={defaultColors.green}/>, text1: 'Customer Service Center', arrortext: '>' },
        { icon: <GifIcon color={defaultColors.green}/>, text1: 'Invitation', text2: 'Invite friends and earn up to ₦5,600 Bonus', arrortext: '>' },
        { icon: <PhoneArrowUpRightIcon color={defaultColors.green}/>, text1: 'Opay USSD', arrortext: '>' },
        { icon: <StarIcon color={defaultColors.green}/>, text1: 'Rate Us', arrortext: '>' },
         
    ]

    const containerinput = []
    for (i = 0; i < arrays.length; i++) {
        containerinput.push(arrays[i])
    }
    return (
        <View style={styles.container}>
            {containerinput.map((items, index) => (
                <View style={styles.container2}>
                    <Pressable style={styles.pressable}>
                        {items.icon}
                    <View style={styles.View}>
                        <Text style={styles.headertext}>{items.text1}</Text>
                        <Text style={styles.text}>{items.text2}</Text>
                    </View>
                    <Text style={{ color: defaultColors.fancyBlack }} >{items.arrortext}</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '94%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: '2%',
    },
    container2: {
        
    },
    pressable:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:10
    },
    View: {
        width:'70%',
        
    },
    headertext: {
        color: defaultColors.fancyBlack,
        fontSize:14.4,
        padding:1
    },
    text: {
        color: defaultTextColors.inactiveText,
        fontSize:12
    }
})