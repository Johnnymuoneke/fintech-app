import { Pressable, StyleSheet, Text, View } from "react-native";
import { PhoneIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../../components/constants";

export default function Bonus() {
    const arrays = [
        { icon: <PhoneIcon color={'#1DCF9F'} size={19}/>, tex1: 'Glo Airtime', txt2: '+up to 6%', txt3: 'Buy Airtime and get up to 6% Cashback', txt4:'Go' },
        { icon: <PhoneIcon color={'#1DCF9F'} size={19}/>, tex1: '9 Mobile Airtime', txt2: '+up to 5%', txt3: 'Buy Airtime and get up to 6% Cashback', txt4:'Go'  },
        { icon: <PhoneIcon color={'#1DCF9F'} size={19}/>, tex1: 'Mtn/Airtel', txt2: '+up to 3.5%', txt3: 'buy airtime and get up to 3.5% cashback', txt4:'Go'  },
        { HeadtxT: 'View All' }
    ]
    return (
        <View>
            <View>
                <Text style={{color:defaultTextColors.inactiveText, fontWeight:'700', fontSize:13, padding:7,marginLeft:'4%'}}>Daily Bonus</Text>
            </View>

            <View style={styles.container}>

                {arrays.map((items, index) => (
                    <View key={index}>
                        <Pressable style={{flexDirection:'row', justifyContent:"space-around", padding:10}}>
                            <Text style={{backgroundColor:defaultColors.lighterGreen, padding:9,borderRadius:15}}>{items.icon}</Text>
                            <View>
                                <Text>
                                    <Text style={styles.headertext }>{items.tex1}</Text>
                                    <Text style={{color:"#1DCF9F", fontSize:12,}}>  {items.txt2}</Text>
                                </Text>
                                <Text style={styles.text}>{items.txt3}</Text>
                            </View>
                                <Text style={{color:"#ffffff", backgroundColor:'#1DCF9F', padding:5,borderRadius:15,width:'14%',textAlign:'center', height:'75%', fontWeight:'600', fontSize:12.5}}>{items.txt4}</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
     backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 8,
   },
   headertext: {
           color: '#444444',
           fontSize: 12,
          
       },
        text: {
        color: defaultTextColors.inactiveText,
        fontSize: 10
    },
})