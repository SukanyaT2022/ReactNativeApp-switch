
import { useState } from 'react'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'
import { Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, Platform } from 'react-native'



const Keybavoid55 = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS === "ios" ? 100: 0}
    style=
    {{flex:1, backgroundColor:'lightgray', height:30, justifyContent:'center'

    }}>
        <Text style={{textAlign:'center', fontWeight:'bold'}}>Keybavoid55</Text>
        <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwZnVubnl8ZW58MHx8MHx8fDA%3D',
        }}
        style={{    width: '40%',
          height: 150,
          alignSelf: 'center',
          marginVertical: 20,
          borderRadius: 100,
      }}
      />
        <TextInput
        style={{borderColor:'orange', borderWidth: 2, borderRadius: 30, width:'80%', alignSelf:'center', paddingVertical:10, textAlign:'center', marginVertical:20}}
        placeholder='User Name'  
        value={username} 
        onChangeText={setUsername}
        />
        <TextInput
        style={{borderColor:'orange', borderWidth: 2, borderRadius: 30, width:'80%', alignSelf:'center', paddingVertical:10, textAlign:'center', marginVertical:20}}
        placeholder='Password' 
        value={password} 
        onChangeText={setPassword}  
        /> 
        <TouchableOpacity style={{alignSelf:'center', backgroundColor:'orange', width:'80%', borderRadius: 30,paddingVertical:10, marginVertical:20, }}>
<Text style={{textAlign:'center'}}>Click Me</Text>
        </TouchableOpacity>

        
        
        </KeyboardAvoidingView>
  )
}

export default Keybavoid55