import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { CreditCardIcon, StarIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../../../components/constants";

export default function PhycardScreen() {
    const arrays = [
        { icon: <CreditCardIcon color={'#05A678'} size={22} />, txt: 'Detail' },
        { icon: <CreditCardIcon color={'#05A678'} size={22} />, txt: 'Card Settings' },
        { icon: <CreditCardIcon color={'#05A678'} size={22} />, txt: 'Manage Dispute' },
        { icon: <CreditCardIcon color={'#05A678'} size={22} />, txt: 'Manage Online Merchant' },
        { icon: <CreditCardIcon color={'#05A678'} size={22} />, txt: 'Transaction' },
    ]
    const numcolum = 3;
    const rows = [];
    for (i = 0; i < arrays.length; i += numcolum) {
        rows.push(arrays.slice(i, i + numcolum))
    }
    return (
        <ScrollView>
            <View >
                <Image source={require('../png/opayimg.jpeg')} style={styles.img} />
                <Pressable style={styles.press}>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 15 }}>23456*******3421 {'>'}</Text>
                </Pressable>
            </View>
            <View style={{backgroundColor: '#ffffff', width: '93%',alignSelf: 'center', padding: 10, marginTop: '2%',borderRadius: 10,}}>
                {rows.map((rowsItems, rowsIndex) => (
                    <View key={rowsIndex} style={styles.container}>
                        {rowsItems.map((items, index) => (
                            <View key={index} style={{ alignItems: 'center' }}>
                                <Pressable style={{ alignItems: 'center', padding: 10 }}>
                                    <Text style={{ backgroundColor: defaultColors.lighterGreen, padding: 7, borderRadius: 20 }}>{items.icon}</Text>
                                    <Text style={styles.txt}
                                        numberOfLines={2}
                                        ellipsizeMode="tail"
                                    >{items.txt}</Text>
                                </Pressable>
                            </View>
                        ))}

                        {rows.length < numcolum && Array(numcolum - rows.length).fill().map((contain, i) => (
                            <View />
                        ))} 
                    </View>
                ))}
            </View>

            <ScrollView horizontal={true} >
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../jpgs/png1.jpeg')} style={styles.scrollImg} />
                    <Image source={require('../jpgs/png2.jpeg')} style={styles.scrollImg} />
                    <Image source={require('../jpgs/png3.jpeg')} style={styles.scrollImg} />
                </View>
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding:7,
        width: '100%',
               
    },
    img: {
        width: '85%',
        height: 200,
        alignSelf: 'center',
        padding: 6,
        borderRadius: 10,
        marginTop: '2%',

    },
    press: {
        backgroundColor: '#ffffff',
        width: '50%',
        padding: 3,
        borderRadius: 10,
        marginTop: '2%',
        alignSelf: "center",
        alignItems: 'center'
    },
    txt: {
        color: defaultTextColors.fancyBlack,
        textAlign: 'center',
        fontSize: 12,
        padding: 4
    },
    scrollImg: {
         width: 330,
        height: 130,
        borderRadius: 9,
        padding: 5,
        marginTop:"1%",
        marginLeft:'1%'
    }
})
