import { Pressable, StyleSheet, Text, View } from "react-native"
import { HomeIcon } from "react-native-heroicons/outline"
import { defaultColors, defaultTextColors } from "../../components/constants"

export default function MeContainer5() {
    const array = [
        { icon: <HomeIcon color={defaultColors.green} />, text1: 'Transfer to Me', text2: 'Receive payment for your business', arrortext: '>' },
    ]
    const containerinput = []
    for (i = 0; i < array.length; i++) {
        containerinput.push(array[i])
    }
    return (
        <View style={styles.container}>
            {containerinput.map((item, index) => (
                <View key={index}>
                    <Pressable style={styles.pressable}>
                        {item.icon}
                        <View style={styles.View}>
                            <Text style={styles.headertext}>{item.text1}</Text>
                            <Text style={styles.text}>{item.text2}</Text>
                        </View>
                        <Text style={{ color: defaultColors.fancyBlack }}>{item.arrortext}</Text>
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
    headertext: {
        color: defaultColors.fancyBlack,
        fontSize: 14.4,
        padding: 1
    },
    text: {
        color: defaultTextColors.inactiveText,
        fontSize: 12
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
     View: {
        width:'70%',
        
    },
})