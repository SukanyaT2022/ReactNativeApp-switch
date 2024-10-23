import React from 'react'
import {Alert, Button, Switch, Text, TouchableOpacity, View} from 'react-native';
const BasicJavaS = () => {

    let age = 10;

    

    const buttonFunc =()=>{
// age >= 18 ?: 'you can work': 'not allow to  work';
let message = age >= 18 ? "you can vote " : "not eligible "
    Alert.alert(message)


   // shorter
    // Alert.alert(age >= 18 ? "You can vote" : "Not eligible");
    }

    function touchFunc(){
if(age >= 18){
    Alert.alert('you can vote')
}else{
    Alert.alert('not eligible')
}
    }
  return (
    <View>
     
       <Text>BasicJavaS</Text> 
       <TouchableOpacity
       onPress={touchFunc}
       
       ><Text>Click me</Text>
       </TouchableOpacity>
       <Button
       onPress={buttonFunc}
       title='click button'
       color="blue"
       >

       </Button>
        </View>
  )
}

export default BasicJavaS