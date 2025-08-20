import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { defaultColors, defaultTextColors } from "../../components/constants"
import { DevicePhoneMobileIcon } from 'react-native-heroicons/outline'
import {UserCircleIcon} from ''

export default function Voucher() {

    return (
        <ScrollView style={{ padding: 10, flex: 1 }}>
            <Text style={styles.headerTxt}>Daily Bonus</Text>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', padding: 5, alignItems:'center'}}>
                    <Pressable style={styles.icons} >
                        < DevicePhoneMobileIcon size={20} />
                    </Pressable>
                    <Pressable style={{ padding: 6 }}>
                        <Text style={styles.headerTxt}>Glo Airtime +Up to 6%</Text>
                        <Text style={styles.headerTxt2}>Buy airtime and get up to 6% Cashback</Text>
                    </Pressable>
                    
                    <Pressable style={styles.pressBtn}>
                        <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 10, textAlign: 'center' }}>GO</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', padding: 5, alignItems:'center' }}>
                    <Pressable style={styles.icons} >
                        < DevicePhoneMobileIcon size={20} />
                    </Pressable>
                    <Pressable style={{ padding: 6 }}>
                        <Text style={styles.headerTxt}>9 mobile +Up to %</Text>
                        <Text style={styles.headerTxt2}>Buy airtime and get up to 5% Cashback</Text>
                    </Pressable>
                    <Pressable style={styles.pressBtn}>
                        <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 10, textAlign: 'center' }}>GO</Text>
                    </Pressable>
                </View>
                
                
                <View style={{ flexDirection: 'row', padding: 5, alignItems:'center' }}>
                    <Pressable style={styles.icons} >
                        < DevicePhoneMobileIcon size={20} />
                    </Pressable>
                    <Pressable style={{ padding: 6 }}>
                        <Text style={styles.headerTxt}>Mtn +Up to 4%</Text>
                        <Text style={styles.headerTxt2}>Buy airtime and get up to 4% Cashback</Text>
                    </Pressable>
                    <Pressable style={styles.pressBtn}>
                        <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 12.1, textAlign: 'center' }}>GO</Text>
                    </Pressable>
                    
                </View>
                <Text style={{ color: defaultTextColors.lightBlack, fontWeight: '800', fontSize: 10.6, padding: 5, textAlign: 'center' }}>View All {'ⱱ'}</Text>
            </View>

            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable>
                        <Image source={require('./jpgs/png1.jpeg')} style={styles.img} />
                    </Pressable>

                    <Pressable>
                        <Image source={require('./jpgs/png2.jpeg')} style={styles.img} />
                    </Pressable>

                    <Pressable>
                        <Image source={require('./jpgs/png3.jpeg')} style={styles.img} />
                    </Pressable>

                </View>
            </ScrollView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 14,
        borderRadius: 10,
        alignItems:'center'



    },
    headerTxt: {
        color: defaultTextColors.fancyBlack,
       fontWeight:'600',
        fontSize: 12.6,
        marginBottom: '2%'



    },
    headerTxt2: {
        color: defaultTextColors.inactiveText,
        fontSize: 10.6,


    },
    pressBtn: {
        backgroundColor: defaultColors.lightGreen,
        borderRadius: 20,
        width:50,
        height:25,
        justifyContent: 'center'


    },
    icons: {
        backgroundColor: "#ddd",
        borderRadius: 900,
        justifyContent: 'center',
        padding: 10,
    },
    img: {
        width: 330,
        height: 160,
        borderRadius: 9,
        padding: 10,
        marginTop:"2%",
        marginLeft:'1%'
    }

})