import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Cog8ToothIcon, ExclamationTriangleIcon, ShieldCheckIcon } from "react-native-heroicons/outline"
import { defaultColors, defaultTextColors } from "../../components/constants"
import Mecontainer2 from "./me2"
import MeContainer3 from "./me3"
import Mecontainer4 from "./me4"
import MeContainer5 from "./me5"





export default function Me() {
    return (
        <ScrollView style={{ backgroundColor: '#e6e6e6' }}>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Pressable>
                        <Image source={require('./png/john.jpg')} style={styles.img} />
                    </Pressable>
                    <Pressable style={styles.prs}>
                        <Text style={{ color: defaultTextColors.fancyBlack, fontSize: 13, fontWeight: '600'}}>Hi, jOHNNY</Text>
                        <Text style={{ color: defaultTextColors.inactiveText, fontSize: 11, fontWeight: '500',}}>upgrade to Tier 3</Text>
                    </Pressable>
                    <Pressable >
                        <Cog8ToothIcon color={defaultTextColors.fancyBlack} />
                    </Pressable>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={{ padding: 7 }}>
                        <Text style={{ color: defaultTextColors.inactiveText, fontSize: 13, fontWeight: '500', padding: 4 }}>Total Balance</Text>
                        <Text style={{ color: defaultTextColors.fancyBlack, fontSize: 20, fontWeight: '700', }}>₦1,090.88</Text>
                        <Text style={{ color: defaultTextColors.inactiveText, fontSize: 12, fontWeight: '500', padding: 4, backgroundColor: "#ffffff", padding: 5, borderRadius: 9, marginTop: 7, paddingBottom: 4 }}>Interest Credited Today + ₦0.00</Text>
                    </Pressable>

                    <Pressable style={{ alignSelf: "center", position: 'absolute', right: 20, backgroundColor: defaultColors.lightGreen, borderRadius: 50, padding: 4 }}>
                        <ShieldCheckIcon size={50} color={defaultColors.lighterGreen} />
                    </Pressable>
                </View>

            </View>
            <Mecontainer2 />
            <MeContainer3 />
            <Mecontainer4/>
            <MeContainer5/>

            <Text style={{width:'79%', alignSelf:'center', padding:10}}>
                <Text style={{color:defaultTextColors.inactiveText, fontSize:11}}>Licensed by the </Text>
                <Text style={{color: '#4B3F72', fontSize:13, fontWeight:'500'}}>CBN </Text>
                <Text style={{color:defaultTextColors.inactiveText, fontSize:11}}>and insured by the </Text>
                <Text style={{color: '#4B3F72', fontSize:13, fontWeight:'500'}}>|NDIC</Text>
            </Text>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
        borderRadius: 50

    },
    container: {
        backgroundColor: defaultColors.lighterGreen,
        padding: 10
    },
    container1: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'

    },
    prs: {
        position: "absolute", left: '18%',
        alignSelf: 'center'
    },
    btn: {
        color: defaultColors.lightGreen,
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 10,
        fontWeight: '700'
    }
})