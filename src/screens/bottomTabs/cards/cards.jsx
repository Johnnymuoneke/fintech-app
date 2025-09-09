import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import { defaultColors } from "../../../components/constants"
import React from "react"
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import VrtcardSreen from "./cardsScreen/vrtcard";
import PhycardScreen from "./cardsScreen/phycard";
export default function Card() {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'vrtcard', title: 'Virtual Card' },
        { key: 'phycard', title: 'Physical Card' }
    ])
    //  const [routes] = React.useState([
    //         { key: 'savings', title: 'savings' },
    //         { key: 'loans', title: 'Loans' }
    //     ]);
    const renderScene = SceneMap({
        vrtcard: VrtcardSreen,
        phycard: PhycardScreen
    });
    return (
        <>
            <View style={styles.container}>
                <Text style={{ color: defaultColors.fancyBlack, fontSize: 17, fontWeight: '700' }}>Cards</Text>
                <Pressable>
                    <Text style={{ color: '#05A678', fontSize: 14 }}>Q&A</Text>
                </Pressable>
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
                            height: 2,
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
    container: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff'
    }
})