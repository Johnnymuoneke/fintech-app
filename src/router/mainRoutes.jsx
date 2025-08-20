import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/home";
import { createBottomTabNavigator, TransitionPresets } from "@react-navigation/bottom-tabs";
import Rewards from "../screens/rewards/bottomTab";
import FinanceScreen from "../screens/bottomTabs/FInance/finance";
import Card from "../screens/bottomTabs/cards/cards";
import Me from "../screens/meScreen/me";
import { HomeIcon, UserCircleIcon } from "react-native-heroicons/outline";
import { GiftIcon } from 'react-native-heroicons/outline'
import { BanknotesIcon } from 'react-native-heroicons/outline'
import { CreditCardIcon } from 'react-native-heroicons/outline'
import { defaultTextColors } from "../components/constants";


export default function MainRoute() {
    const Navigation = createNativeStackNavigator()
    const ButtomTabNavigation = createBottomTabNavigator()
    
    return (
        <ButtomTabNavigation.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            ...TransitionPresets.FadeTransition,
            tabBarIcon: ({ color }) => {
                let icon;
                switch (route.name) {
                    case 'Home':
                        icon = <HomeIcon color={defaultTextColors.inactiveText} size={20} />
                        break;

                    case 'Rewards':
                        icon = <GiftIcon color={defaultTextColors.inactiveText} size={20} />
                        break;

                    case 'Finance':
                        icon = <BanknotesIcon color={defaultTextColors.inactiveText} size={20} />
                        break;

                    case 'Cards':
                        icon = <CreditCardIcon color={defaultTextColors.inactiveText} size={20} />
                        break;

                    case 'Me':
                        icon = <UserCircleIcon color={defaultTextColors.inactiveText} size={20} />

                    default:
                        break;
                }
                return icon
            }

        })} >
            <ButtomTabNavigation.Screen name='Home' component={HomeScreen} />
            <ButtomTabNavigation.Screen name='Rewards' component={Rewards} />
            <ButtomTabNavigation.Screen name='Finance' component={FinanceScreen} />
            <ButtomTabNavigation.Screen name="Cards" component={Card} />
            <ButtomTabNavigation.Screen name="Me" component={Me} />
        </ButtomTabNavigation.Navigator>



    )

}