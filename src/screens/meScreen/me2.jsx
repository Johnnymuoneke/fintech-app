import { Pressable, StyleSheet, Text, View } from "react-native"
import { ExclamationTriangleIcon } from "react-native-heroicons/outline"
import { defaultColors } from "../../components/constants"
import { useNavigation } from "@react-navigation/native"

export default function Mecontainer2(){
  const navigate = useNavigation()
  const containerInputs=[
    {icon: <ExclamationTriangleIcon color={'red'} size={15}/>,text1:'7 Safety Tips', text2:'Make your account more secure', btn:"View", link:"Home"}
  ] 
  const array=[]
    for(i=0; i<containerInputs.length;i++){
        array.push(containerInputs[i])
    }
    return(
        <View style={{backgroundColor:defaultColors.lightGreen,padding:10, width:'92%', alignSelf:'center', borderRadius:10, position:'relative', bottom:7}}>
          {array.map((detail)=>(
            <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
                <Pressable onPress={()=> navigate.navigate(detail.link)} style={{alignSelf:'center'}}>
                    {detail.icon}
                </Pressable>
                <Pressable>
                   <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: '500',  }}>{detail.text1}</Text>
                   <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '500',}}>{detail.text2}</Text> 
                </Pressable>
                <Pressable style={{alignSelf:'center', width:'20%'}}>
                    <Text style={styles.btn}>{detail.btn}</Text> 
                </Pressable>
            </View>
          ))}
        </View>
    )
}
const styles= StyleSheet.create({
      btn:{
        color:defaultColors.lightGreen,
        backgroundColor:'#ffffff',
        padding:3,
        borderRadius:10,
        fontWeight:'700',
        textAlign:'center'
       
    }
})