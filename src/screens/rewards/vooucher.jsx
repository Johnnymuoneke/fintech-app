import React, { useState } from "react"
import { Dimensions, Text, View } from "react-native"
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Bettingscreen from "./subScreens/betting";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
import { defaultTextColors } from "../../components/constants";

export default function VoucherScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'bettingscreen', title: 'Betting' }
    ])
    const renderScene = SceneMap({
        bettingscreen: Bettingscreen
    })
    return (
        <>
            <View>
                <Text style={{color:defaultTextColors.inactiveText, fontWeight:'700', fontSize:13, padding:7,
                    marginLeft:'4%'}}>Hot Vouchers</Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get("window").width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        scrollEnabled
                        indicatorStyle={{
                            backgroundColor: '#05A678',
                            height: 2,
                            borderRadius: 2,
                            marginHorizontal: 50,
                            marginbo:71,
                            width: 30,
                            
                        }}
                        style={{
                            backgroundColor: 'white',
                            elevation: 0,
                            borderRadius:5,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                            
                        }}
                        contentContainerStyle={{
                           
                            
                        }}
                        labelStyle={{ Color: 'black', fontWeight: '600',  }}
                        activeColor= '#9DA5A9'
                        inactiveColor="#4444"
                        
                    />
                )}
            />
        </>
    )

}