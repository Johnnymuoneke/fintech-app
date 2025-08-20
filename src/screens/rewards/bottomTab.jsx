import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { BanknotesIcon, EllipsisHorizontalCircleIcon, LifebuoyIcon, PuzzlePieceIcon, UserGroupIcon } from 'react-native-heroicons/outline'
import { defaultColors, defaultTextColors } from "../../components/constants";
import { Background } from "@react-navigation/elements";
import Voucher from "./vooucher";

function Rewards() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#e6e6e6', alignItems: 'center', flex: 1, alignItems: 'center', }}>
           

                <View style={{ backgroundColor: defaultColors.lighterGreen, padding: 14, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: defaultTextColors.lightBlack, fontWeight: '600', fontSize: 22 }}>Rewards</Text>
                        <Pressable>
                            <EllipsisHorizontalCircleIcon fontSize={20} color={'black'} />
                        </Pressable>
                    </View >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                        < >
                            <Pressable style={{ padding: 5 }}>
                                <Text style={{ color: 'black', flexDirection: 'column', padding: 4, fontSize: 12, color: defaultTextColors.lightBlack }}>Cashback</Text>
                                <Text style={{ color: 'black', flexDirection: 'column', fontSize: 16, fontWeight: '500', textAlign: 'left', padding: 3, color: defaultTextColors.lightBlack }}>₦ 160.10 {'>'}</Text>
                            </Pressable>
                        </>

                        < >
                            <Pressable style={{ padding: 5 }}>
                                <Text style={{ color: 'black', flexDirection: 'column', padding: 4, fontSize: 12, color: defaultTextColors.lightBlack }}>Voucher ₦100</Text>
                                <Text style={{ color: 'black', flexDirection: 'column', fontSize: 16, fontWeight: '500', textAlign: 'left', padding: 3, color: defaultTextColors.lightBlack }}>1 {'>'}</Text>
                            </Pressable>
                        </>
                    </View>

                    <View style={{ flexDirection: 'row', width: '32.8%', position: 'relative', bottom: -40 }}>

                        <Pressable style={styles.pressstyle}>
                            <BanknotesIcon fontSize={20} color={defaultColors.lightGreen} style={styles.pressicon} />
                            <Text style={styles.presstext}>Friday Bonus</Text>
                        </Pressable>

                        <Pressable style={styles.pressstyle}>
                            <UserGroupIcon fontSize={20} color={'#ff5733'} style={styles.pressicon} />
                            <Text style={styles.presstext}>Refer Freinds</Text>
                        </Pressable>

                        <Pressable style={styles.pressstyle}>
                            <LifebuoyIcon fontSize={20} color={'#386caf'} style={styles.pressicon} />
                            <Text style={styles.presstext}>Spin & Win</Text>
                        </Pressable>

                        <Pressable style={styles.pressstyle}>
                            <PuzzlePieceIcon fontSize={20} color={'#ffc107'} style={styles.pressicon} />
                            <Text style={styles.presstext}>Play4aChild</Text>
                        </Pressable>

                    </View>
                </View>


                <View style={{ width: '95%', paddingBottom: 10, marginTop: '8%' }}>
                    <Text style={{ color: defaultTextColors.lightBlack, padding: 13, fontWeight: '800', fontSize: 10.6 }}>Hot Vouchers</Text>
                    <View style={{ backgroundColor: '#ffffff', padding: 15, width: '95%', alignItems: "flex-start", borderRadius: 10, alignSelf: 'center' }}>
                        <Text style={{ color: defaultTextColors.inactiveText, fontWeight: 600, textAlign: 'center', padding: 3 }}>Betting</Text>
                        <View style={{ backgroundColor: defaultColors.lighterGreen, padding: 10, width: '35%', borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ color: defaultColors.lightGreen, fontWeight: '500', fontSize: 15 }}>₦100</Text>
                            <Text style={{ color: defaultTextColors.inactiveText, fontSize: 10, }}>Bangbet ₦100 off</Text>
                        </View>
                        <View style={{ backgroundColor: defaultColors.lighterGreen, padding: 10, width: '35%', borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ color: defaultTextColors.inactiveText, fontWeight: '500', fontSize: 10 }}>₦500 available</Text>
                            <Pressable style={{ backgroundColor: defaultColors.lightGreen, padding: 5, width: '50%', borderRadius: 10, color: 'ffffff', alignItems: 'center' }}>
                                <Text style={{ color: '#ffffff' }}>Use</Text>
                            </Pressable>
                        </View>

                        <Pressable style={{ alignSelf: 'center' }}>
                            <Text style={styles.presstext2}>View My Voucher {'>'}</Text>
                        </Pressable>
                    </View>
                </View>

                <Voucher />

           

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    pressstyle: {
        backgroundColor: "#ffffff",
        padding: 3,
        color: 'black',
        marginLeft: '2%',
        borderRadius: 10,
        width: "30", height: 80,
        justifyContent: 'center'




    },
    presstext: {
        color: defaultTextColors.inactiveText,
        padding: 8,
        fontWeight: '800',
        fontSize: 9.6
    },
    presstext2: {
        color: defaultTextColors.lightBlack,
        // padding: 8,
        fontWeight: '800',
        fontSize: 10.6,
        textAlign: "center",
        alignSelf: 'center'
    },

    pressicon: {
        alignSelf: 'center',
        padding: 7
    }
})

export default Rewards