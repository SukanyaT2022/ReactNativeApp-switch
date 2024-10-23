
import React, {useState} from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Switch,
  Platform,
} from 'react-native';

const NewKeyboardAvoid = () => {
  // const [ison, setIson] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const inputFunc = () => {
    setValueInput;
  };

  // const changeBGFunc = () => {
  //   setIson(previousState => !previousState); // this word with true or false only - not work with string and number
  // };

  // setIson(previousState => !ison);

  // if (ison === true){
  //   setIson(false)
  // }else{
  //   setIson(true)
  // }
  // };

  return (
    

<KeyboardAvoidingView
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// keyboardVerticalOffset={Platform.OS === "ios" ? 100: 0}
style={{
  flex: 1,

}}
>
  <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom:100,}}>
<Image
  source={{
    uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmljJTIwZG9nfGVufDB8fDB8fHww',
  }}
  style={styles.imagestyle}
/>
<Text style={styles.textstyle}>Where does he come from?</Text>


  <TextInput
    style={styles.inputstyle}
    placeholder="Type something --input box"
    placeholderTextColor="blue"
    onChangeText={setValueInput}
    value={valueInput}
  />
   <TextInput
    style={styles.inputstyle}
    placeholder="Type something --input box"
    placeholderTextColor="blue"
    onChangeText={setValueInput}
    value={valueInput}
  />
   <TextInput
    style={styles.inputstyle}
    placeholder="Type something --input box"
    placeholderTextColor="blue"
    onChangeText={setValueInput}
    value={valueInput}
  />
   <TextInput
    style={styles.inputstyle}
    placeholder="Type something --input box"
    placeholderTextColor="blue"
    onChangeText={setValueInput}
    value={valueInput}
  />
   <TextInput
    style={styles.inputstyle}
    placeholder="Type something --input box-last "
    placeholderTextColor="blue"
    onChangeText={setValueInput}
    value={valueInput}
  />
  <TouchableOpacity style={styles.inputstyle}>
    <Text style={styles.textopacitystyle}>Click me - touchOpaCity</Text>
  </TouchableOpacity>
  </ScrollView>
</KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
textstyle: {
fontSize: 30,
fontWeight: 'bold',
paddingHorizontal: 30,
textAlign: 'left',
},

imagestyle: {
width: '40%',
height: 150,
alignSelf: 'center',
marginVertical: 20,
borderRadius: 100,
},

wrapAll: {
backgroundColor: 'green',
},

inputstyle: {
marginHorizontal: 20,
backgroundColor: 'orange',
paddingVertical: 20,
borderRadius: 30,
marginVertical: 20,
fontSize: 20,
textAlign: 'center',
},
textopacitystyle: {
textAlign: 'center',
fontWeight: 'bold',
color: 'blue',
},
});


export default NewKeyboardAvoid;