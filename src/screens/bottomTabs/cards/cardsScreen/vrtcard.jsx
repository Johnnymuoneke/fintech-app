import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
import { defaultColors, defaultTextColors } from "../../../../components/constants";

export default function VrtcardSreen() {
    const arrays = [
        { icon: <StarIcon color={'#05A678'} />, txt1: 'Instant Access', txt2: 'Apply and activate instantly' },
        { icon: <StarIcon color={'#05A678'} />, txt1: 'Rep Your State Of Origin', txt2: 'Get a virtual opay card unique to your state of origin' },
        { icon: <StarIcon color={'#05A678'} />, txt1: 'Online Merchant Acceptance', txt2: 'Accept by 40,000+ online merchant including JUMIA, KONGA, NETFLIX,UBER, wallet funding and others' },
        { icon: <StarIcon color={'#05A678'} />, txt1: 'Security', txt2: 'CBN licenced, NDIC insured' },
        
       
      
    ]
    return (
        <View style={{backgroundColor:'#ffffff', flex:1}}>
        
            <View >
                <Image source={require('../png/opayimg.jpeg')} style={styles.img} />
            </View>

            <ScrollView style={{marginTop:'3%'}}>
                {arrays.map((items, index) => (
                    <View key={index}>
                        <Pressable style={styles.prs}>
                            <Text style={{ backgroundColor: defaultColors.lighterGreen, padding: 7, borderRadius: 15, }}>{items.icon}</Text>
                            <View style={{paddingLeft:4, marginLeft:'2%'}}>
                              <Text style={styles.headertxt}>{items.txt1}</Text>  
                              <Text style={styles.txt}
                              numberOfLines={2}
                              ellipsizeMode="tail" >{items.txt2}</Text>  
                            </View>
                        </Pressable>

                    </View>
                ))}
            </ScrollView>

            <View style={{padding:10,width:'94%', marginBottom:'2%'}}>
                <Text style={{width:'80%', alignSelf:'center',padding:6, }}>
                    <Text style={{color:defaultTextColors.inactiveText, fontSize:11, }}>Click the button bellow to accept</Text>
                    
                    <Text style={{color:'#05A678',fontSize:11 }}> Terms & Condition</Text>
                    
                </Text>

                <Pressable style={styles.prsBtn}>
                    <Text style={{color:'#ffffff', fontWeight:'700'}}>Get it Now</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '85%',
       height:200,
        alignSelf: 'center',
        padding: 6,
        borderRadius: 10,
        marginTop: '2%'
    },
    headertxt:{
        color:defaultColors.fancyBlack,
         fontSize: 14.5,
        padding: 1,
     
    },
    txt:{
        color:defaultTextColors.inactiveText,
        fontSize: 11,
    },
    prs:{
        flexDirection:'row',
       padding:8,
       marginTop:'1%',
       width:'94%',
       alignSelf:'center'
        
    },
    prsBtn:{
        backgroundColor:'#05A678',
        padding:13,
        width:'70%',
        alignSelf:'center',
        alignItems:'center',
        borderRadius:20
    }
})