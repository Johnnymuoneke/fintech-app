import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { WalletIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../../../../components/constants";

export default function SaveScreen2() {
    const array = [
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'Wallet', txt2: 'You can deposit this amount in your owealth and earn daily interests', txt3: '₦5000' },
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'Owealth', txt2: 'Your daily returns. you can withdraw at anytime', txt3: '₦5000' },
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'Targets', txt2: 'Save daily weekly or montly towards your goal' },
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'SafeBox', txt2: 'Your daily weekly or montly automatic savings.' },
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'Fixed', txt2: 'Plan:0', txt3: '₦5000' },
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'Spend & Save', txt2: 'Your percentage savings every time you spend or tranfer' },
        { icon: <WalletIcon color={'#CDB4FF'} size={17} />, txt1: 'Savings Report', txt2: 'check out your savings journey so far', },
    ]


    return (
        <ScrollView style={{ backgroundColor: '#ffffff', }}>

            <View style={{ padding: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, }}>
                {array.map((items, index) => (
                    <View key={index} style={{ width: '48%', padding: 9, backgroundColor: '#F6F4FF', borderRadius: 8, }}>
                        <Pressable>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 3 }}>
                                {items.icon}
                                <Text style={styles.headerTxt}>{items.txt1}</Text>
                            </View>
                            <Text style={styles.txt}
                                numberOfLines={3}
                                ellipsizeMode="tail"
                            >{items.txt2}</Text>
                            <Text style={styles.txt3}>{items.txt3}</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
            <Text style={{ alignSelf: 'center', padding: 10 }}>
                <Text style={{ color: defaultTextColors.inactiveText, fontSize: 11 }}>Licensed by the </Text>
                <Text style={{ color: '#4B3F72', fontSize: 13, fontWeight: '500' }}>|NDIC</Text>
            </Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Pressable: {

        padding: 15,
        backgroundColor: defaultColors.lighterGreen,
        borderRadius: 10,
        margin: 5
    },
    viewContainer: {
        padding: 2,
        flexDirection: 'row',

    },
    headerTxt: {
        color: defaultColors.fancyBlack,
        padding: 1,
        fontSize: 12,
        bottom: 1,
        textAlign: 'center',



    },
    txt: {
        color: defaultTextColors.inactiveText,
        padding: 1,
        fontSize: 9,
        textAlign: 'center'
    },
    txt3: {
        color: defaultTextColors.inactiveText,
        padding: 1,
        fontSize: 9,
        textAlign: 'center'
    }
})