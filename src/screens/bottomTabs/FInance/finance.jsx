import React from "react";
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, } from "react-native";
import { TabBar, TabView, SceneMap } from "react-native-tab-view";
import LoansScreen from "./subScreens/loan/loanScreen";
import SavingScreen from "./subScreens/savings/savingScreen";
import SaveScreen2 from "./subScreens/savings/saving2";
import { defaultColors, defaultTextColors } from "../../../components/constants";

export default function FinanceScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'savings', title: 'savings' },
        { key: 'loans', title: 'Loans' }
    ]);
    const renderScene = SceneMap({
        loans: LoansScreen,
        savings: SavingScreen,
    });
    return (
        <>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ color: defaultColors.fancyBlack, fontSize: 16, fontWeight: '600', }}>Finance </Text>
                    <Text style={{ color: defaultTextColors.inactiveText, fontSize: 11, alignSelf: 'center', marginTop: '1.3%' }}>From BlurRidge Microfinance Bank</Text>
                </View>
                <Image source={require('./png/opay.jpeg')} style={styles.img} />
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{
                            backgroundColor: 'black',
                            height: 3,
                            borderRadius: 2,
                            marginHorizontal: 75,
                            width: 30
                        }}

                        style={{
                            backgroundColor: 'white',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0
                        }}
                        labelStyle={{ color: 'black', fontWeight: '700' }}
                        activeColor="#009688"
                        inactiveColor="#4444"
                    />
                )}
            />


        </>
    )


}
const styles = StyleSheet.create({
    img: {
        width: '93%',
        alignSelf: 'center',
        height: 120,
        borderRadius: 8,

    },
    container: {
        width: "99%",
        alignSelf: 'center',
        padding: 2,
        backgroundColor: '#ffffff'
    }
})
