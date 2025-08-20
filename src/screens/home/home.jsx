import { Text, View, SafeAreaView, StyleSheet, Pressable, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PuzzlePieceIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline"
import { QrCodeIcon } from "react-native-heroicons/outline"
import { BellAlertIcon } from 'react-native-heroicons/outline'
import { UserIcon } from 'react-native-heroicons/outline'
import { BanknotesIcon } from 'react-native-heroicons/outline'
import { ArrowDownOnSquareIcon } from 'react-native-heroicons/outline'
import { CalculatorIcon } from 'react-native-heroicons/outline'
import { WifiIcon } from 'react-native-heroicons/outline'
import { CurrencyDollarIcon } from 'react-native-heroicons/outline'
import { TvIcon } from 'react-native-heroicons/outline'
import { WalletIcon } from 'react-native-heroicons/outline'
import { EllipsisHorizontalIcon } from 'react-native-heroicons/outline'
import { HomeIcon } from 'react-native-heroicons/outline'
import { UserCircleIcon } from 'react-native-heroicons/outline'
import { CreditCardIcon } from 'react-native-heroicons/outline'
import { GiftIcon } from 'react-native-heroicons/outline'
import { defaultColors } from "../../components/constants"
import { NestedButtons } from "../../components/buttons/navigationGroup"
import { bottombtn } from "../rewards/bottomTab" 
import { HeaderBtn } from "../rewards/bottomTab"


// function HomeScreen() 
//     const navigation = useNavigation()
//     function navigate(){
//         navigation.navigate("Details")
//     }
//     return (
//         <View>
//             <Text>Home Screen</Text>
//             <Button


function HomeScreen() {

    return (
        <View style={{ padding: 9, backgroundColor: '#e6e6e6', flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.tabs}>


                    <Text style={styles.text}>Hi, John</Text>
                </SafeAreaView>

                <View style={styles.tab2}>
                    <Pressable>
                        <Text style={styles.text}>
                            <QuestionMarkCircleIcon size={20} color={`black`}
                                style={styles.icon1} />
                        </Text>

                    </Pressable>

                    <Pressable>
                        <Text style={styles.text}>
                            <QrCodeIcon size={20} color={`black`}
                                style={styles.icon1} />
                        </Text>


                    </Pressable>

                    <Pressable>
                        <Text style={styles.text}>
                            <BellAlertIcon size={20} color={`black`}
                                style={styles.icon1}
                            />
                        </Text>

                        {/* <Text style={styles.text}>notification</Text> */}
                    </Pressable>
                </View>

            </SafeAreaView>


            <View style={styles.container2}>
                <View style={styles.whole2}>
                    <Text style={[styles.text, textstyle]}>Available Balance</Text>
                    <Pressable>
                        <Text style={[styles.text, textstyle]}>Transaction History {`>`}</Text>
                    </Pressable>
                </View>

                <View style={styles.whole2}>
                    <Text style={[styles.text, textstyle]}>12,000</Text>
                    <Pressable style={{ borderRadius: 50, padding: 9, backgroundColor: '#fff', }}>
                        <Text style={{ fontWeight: '400', color: defaultColors.lightGreen, fontSize:10 }}>+ Add Money</Text>
                    </Pressable>

                </View>
            </View>

            <SafeAreaView style={styles.container3}>
                <View>
                    <Pressable>
                        <Text style={[styles.text, styles.iconbackg]}>
                            <UserIcon size={20} color={`#008875`} />
                        </Text>

                        <Text style={styles.text}>To Opay</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable>
                        <Text style={[styles.text, styles.iconbackg]}>
                            <BanknotesIcon size={20} color={`#008875`} />
                        </Text>
                        <Text style={styles.text}>To Bank</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable>
                        <Text style={[styles.text, styles.iconbackg]}>
                            <ArrowDownOnSquareIcon size={20} color={`#008875`} />
                        </Text>
                        <Text style={styles.text}>Withdraw</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
            <NestedButtons />
            


            {/* <SafeAreaView style={styles.container5}>

                <View>
                    <Text style={styles.icon2}>
                        <HomeIcon size={30} color={'green'} />
                    </Text>
                    <Pressable>
                        <Text style={styles.ic2txt}>Home</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={styles.icon2}>
                        <GiftIcon size={30} color={'green'} />
                    </Text>
                    <Pressable>
                        <Text style={styles.ic2txt}>Rewards</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={styles.icon2}>
                        <BanknotesIcon size={30} color={'green'} />
                    </Text>
                    <Pressable>
                        <Text style={styles.ic2txt}>Finance</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={styles.icon2}>
                        <CreditCardIcon size={30} color={'green'} />
                    </Text>

                    <Pressable>
                        <Text style={styles.ic2txt}>Cards</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={styles.icon2}>
                        <UserCircleIcon size={30} color={'green'} />
                    </Text>
                    <Pressable>
                        <Text style={[styles.ic2txt, ic2tx2]}>Me</Text>
                    </Pressable>
                </View>

            </SafeAreaView> */}

        </View>
    )

}

const textstyle = { color: '#fff' }
const ic2tx2 = { marginLeft: 9 }
const styles = StyleSheet.create({
    container: {
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,

    },
    tabs: {
        //  marginTop:30,
        flexDirection: 'row',

    },
    tab2: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    icon1: {
        padding: 4
    },

    text: {
        padding: 5,
        fontWeight: '400',
        color: '#507561',
        textAlign: "center",
        fontSize: 10
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 200
    },
    container2: {
        backgroundColor: defaultColors.lightGreen,
        padding: 4,
        borderRadius: 10,
        marginTop: 15,
    },
    whole2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,

    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 15,
        borderRadius: 10,
       
    },

    container4: {
        backgroundColor: '#fff',

        marginTop: 15,
        borderRadius: 15
    },

    container5: {
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 15,
        position: 'absolute',
        position: 'absolute',
        bottom: 1,
        width: '100%',

    },
    iconbackg: {
        backgroundColor: 'defaultColors.lighterGreen',
        borderRadius: 9999,
        width: 44,
        textAlign:'center',
        backgroundColor:defaultColors.lighterGreen,
        padding:6

    },
    icon2: {
        backgroundColor: '#cdf5dd',
        borderRadius: 20,
        width: 44,
        padding: 7,
        //   marginLeft:5
        justifyContent: 'flex-start',
    },
    ic2txt: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        padding: 4,
        justifyContent: ''
    },



})


export default HomeScreen