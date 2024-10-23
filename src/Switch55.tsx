import React, { useState } from 'react';
import {Switch, Text, View} from 'react-native';

const Switch55 = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [textColor, setTextColor] = useState(false);
const changeTextColorFunc =()=>{
 setTextColor((prevState)=>!textColor)
 setDarkMode((prevState2)=>!darkMode)
}

  return (
    <View  
    style={{flex:1, alignItems:'center', justifyContent:'center'}}

    >
    <View 
    style={{backgroundColor: darkMode == true ?"lightblue" : "pink",
       width:'80%', flex:0.5,}}
    
    >
      <Text style={{color: textColor === true? "black" : "purple"
        ,fontSize:30, fontWeight:'bold'}}>Switch</Text>


      <Switch 
      value={darkMode} 
      // onvalueChange={()=>setDarkMode(prevState)=>!darkMode)}//if only one condition
      onValueChange={changeTextColorFunc}// if more condition change text 
      //and background make function line no 8
      // trackColor={{{false: 'pink', true: 'orange'}}}
      // thumbcolor='red'
  
      >

      </Switch>
    </View>
    </View>
  );
};

export default Switch55;
