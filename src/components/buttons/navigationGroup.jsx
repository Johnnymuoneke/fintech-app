import { Pressable, View, Text, StyleSheet } from "react-native";
import { CalculatorIcon } from "react-native-heroicons/outline";
import { CurrencyDollarIcon } from "react-native-heroicons/outline";
import { WifiIcon } from "react-native-heroicons/outline";
import { TvIcon } from "react-native-heroicons/outline";
import { WalletIcon } from "react-native-heroicons/outline";
import { BanknotesIcon } from "react-native-heroicons/outline";
import { EllipsisHorizontalIcon } from "react-native-heroicons/outline";
import { DevicePhoneMobileIcon } from "react-native-heroicons/outline";
import { UserGroupIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../constants";



export function NestedButtons() {
    const buttons = [
        { name: 'Airtime', Link: '', icon: <DevicePhoneMobileIcon size={20} color={defaultColors.green} /> },
        { name: 'Data', Link: '', icon: <WifiIcon size={20} color={defaultColors.green} /> },
        { name: 'Betting', Link: '', icon: <CurrencyDollarIcon size={20} color={defaultColors.green} /> },
        { name: 'Tv', Link: '', icon: <TvIcon size={20} color={defaultColors.green} /> },
        { name: 'SafeBox', Link: '', icon: <WalletIcon size={20} color={defaultColors.green} /> },
        { name: 'Loan', Link: '', icon: <BanknotesIcon size={20} color={defaultColors.green} /> },
        { name: 'Invitation', Link: '', icon: <UserGroupIcon size={20} color={defaultColors.green} /> },
        { name: 'More', Link: '', icon: <EllipsisHorizontalIcon size={20} color={defaultColors.green} /> },
    ]

    const numColums = 4;
    const rows = [];
    for (let i = 0; i < buttons.length; i += numColums) {
        rows.push(buttons.slice(i, i + numColums))
    }

    return (
        <View style={{ backgroundColor: 'white', marginVertical: 5, borderRadius: 15 }}>
            {rows.map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', marginTop: 10, padding: 10, justifyContent: 'space-evenly' }}>
                   
                    {row.map((data, index) => (
                        <View key={index}>
                            <Pressable style={{ borderRadius: 9999, backgroundColor: defaultColors.lighterGreen, padding: 10 }}>
                                {data.icon}
                            </Pressable >
                            <Text style={{ fontSize: 10, color: defaultTextColors.lightBlack, textAlign: 'center' }}>{data.name}</Text>
                        </View>
                    ))}

                    {row.length < numColums &&
                        Array(numColums - row.length).fill().map((_, i) => (
                            <View />
                        ))
                    }
                </View>
            ))}
        </View>

    )

}
