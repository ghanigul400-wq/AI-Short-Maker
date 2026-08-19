import React,{useState}from'react';
import{SafeAreaView,View,Text,TextInput,Pressable,ScrollView,StyleSheet}from'react-native';

export default function App(){
 const[t,setT]=useState(''),[r,setR]=useState('');

 return <SafeAreaView style={s.root}>
  <ScrollView contentContainerStyle={s.wrap}>
   <Text style={s.logo}>AI Short Maker</Text>
   <Text style={s.sub}>Urdu • Sindhi • Hindi • English</Text>
   <Text style={s.hero}>Create viral short-form content with AI.</Text>

   <Text style={s.label}>Topic / Idea</Text>
   <TextInput
    value={t}
    onChangeText={setT}
    placeholder="Apni story ka topic likhein..."
    multiline
    style={s.input}
   />

   <Pressable
    style={s.btn}
    onPress={()=>setR(t?`Title: ${t}\n\nHook: Aaj ki kahani aapko zaroor pasand aayegi.\n\nScript: Ek dil ko chhoo lene wali kahani...\n\nCTA: Follow karein.\n#AIStory #Urdu #Shorts`:'Pehle topic likhein.')}
   >
    <Text style={s.bt}>✨ Generate Script</Text>
   </Pressable>

   {!!r&&<Text style={s.res}>{r}</Text>}

   {['Video Prompt','Image Prompt','Hashtags','History','Premium'].map(x=>
    <View key={x} style={s.card}>
     <Text style={s.ct}>{x}</Text>
    </View>
   )}
  </ScrollView>
 </SafeAreaView>
}

const s=StyleSheet.create({
 root:{flex:1,backgroundColor:'#fff'},
 wrap:{padding:24},
 logo:{fontSize:28,fontWeight:'800',marginTop:20},
 sub:{color:'#666',marginTop:5,marginBottom:25},
 hero:{fontSize:20,fontWeight:'700',marginBottom:20},
 label:{fontWeight:'700',marginBottom:8},
 input:{borderWidth:1,borderColor:'#ddd',borderRadius:14,padding:14,minHeight:120,textAlignVertical:'top'},
 btn:{backgroundColor:'#6750A4',padding:16,borderRadius:14,alignItems:'center',marginTop:18},
 bt:{color:'#fff',fontWeight:'800'},
 res:{backgroundColor:'#f5f2fa',padding:16,borderRadius:14,marginTop:18,lineHeight:23},
 card:{borderWidth:1,borderColor:'#eee',borderRadius:14,padding:18,marginTop:12},
 ct:{fontWeight:'700',fontSize:16}
});
