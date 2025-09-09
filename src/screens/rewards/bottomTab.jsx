import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BanknotesIcon, EllipsisHorizontalCircleIcon, GiftIcon, PuzzlePieceIcon, QuestionMarkCircleIcon, UserGroupIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../components/constants";
import VoucherScreen from "./vooucher";
import Bettingscreen from "./subScreens/betting";
import Bonus from "./subScreens/bonus";

export default function Rewards() {
    const arrays = [
        { icon: <BanknotesIcon size={19} color={defaultColors.lightGreen} />, txt: 'Friday Bonus' },
        { icon: <UserGroupIcon size={18} color={defaultColors.lightGreen} />, txt: 'Refer Friends' },
        { icon: <GiftIcon size={18} color={defaultColors.lightGreen} />, txt: 'Spin & Win' },
        { icon: <PuzzlePieceIcon size={18} color={defaultColors.lightGreen} />, txt: 'Play4aChild' }
    ]
    return (
        <View>

            <View style={styles.contianer}>
                <View style={styles.contianer1}>
                    <Text style={styles.headertxt}>Rewards</Text>
                    <EllipsisHorizontalCircleIcon color={defaultColors.fancyBlack} size={25} />
                </View>
            </View>
            <ScrollView>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around',
                    backgroundColor: defaultColors.lighterGreen, padding: 10, paddingBottom: 29
                }}>
                    <View >
                        <Pressable>
                            <Text>
                                <Text style={{ color: defaultTextColors.inactiveText, fontSize: 15 }}>Cashback</Text>
                                <QuestionMarkCircleIcon color={defaultTextColors.inactiveText} size={16} />
                            </Text>
                        </Pressable>
                        <Pressable>
                            <Text style={{ padding: 4 }}>
                                <BanknotesIcon color={'#05A678'} size={16} />
                                <Text style={{ color: defaultTextColors.fancyBlack, fontSize: 18, fontWeight: '490' }}>247.85</Text>
                            </Text>
                        </Pressable>
                    </View>

                    <View>
                        <Pressable>
                            <Text>
                                <Text style={{ color: defaultTextColors.inactiveText, fontSize: 15 }}>Cashback</Text>

                            </Text>
                        </Pressable>
                        <Pressable>
                            <Text style={{ padding: 4, }}>
                                <BanknotesIcon size={18} color={'#05A678'} />
                                <Text style={{ color: defaultTextColors.fancyBlack, fontSize: 18, fontWeight: '490' }}> 2 {'>'}</Text>
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.jsContianer}>
                    {arrays.map((items, index) => (
                        <View key={index} style={styles.jsContianer1}>
                            <Text style={{ backgroundColor: defaultColors.lighterGreen, padding: 5, borderRadius: 13 }}>{items.icon}</Text>
                            <Text style={{ color: defaultTextColors.inactiveText, fontSize: 10, padding: 2 }}>{items.txt}</Text>
                        </View>
                    ))}
                </View>
                <View style={{width:'93%', alignSelf:'center', borderRadius:15,}}>
                    <VoucherScreen />
                    <Bettingscreen/>
                </View>
                <View style={{width:'93%', alignSelf:'center', borderRadius:15,marginTop:'2%'}}>
                    <Bonus/>
                </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    contianer: {
        backgroundColor: defaultColors.lighterGreen,
        padding: 10,

    },
    contianer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        alignItems: 'center',


    },
    jsContianer1: {
        backgroundColor: '#ffffff',
        padding: 9,
        alignItems: 'center',
        borderRadius: 10,

    },
    jsContianer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: "center",

        gap: 10,
        position: 'relative',
        bottom: 18

    }
    ,
    headertxt: {
        color:'#444444',
        fontWeight: '600',
        fontSize: 25,
        padding: 2

    }
})

