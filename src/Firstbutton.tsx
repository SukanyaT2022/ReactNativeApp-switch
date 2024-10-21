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
} from 'react-native';

const Firstbutton = () => {
  const [ison, setIson] = useState(false);

  const  changeBGFunc = () => setIson(previousState => !previousState);
  
    // setIson(previousState => !ison);

    // if (ison === true){
    //   setIson(false)
    // }else{
    //   setIson(true)
    // }
  // };

  return (
    <View
    style={{
backgroundColor: ison === true ? 'black' : 'pink' ,
                                  



    }}
    
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmljJTIwZG9nfGVufDB8fDB8fHww',
        }}
        style={styles.imagestyle}
      />
      <Text style={styles.textstyle}>Where does he come from?</Text>
      {/* <KeyboardAvoidingView
          behavior="padding"
          style={{
            flex: 0.5,
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
          }}>  */}
      <View style={styles.wrapAll}>
        <TextInput
          style={styles.inputstyle}
          placeholder="Type something --input box"
          placeholderTextColor="blue"
        />
        <TouchableOpacity style={styles.inputstyle}>
          <Text style={styles.textopacitystyle}>Click me - touchOpaCity</Text>
        </TouchableOpacity>
      </View>
      {/* </KeyboardAvoidingView>  */}

      <View
        style={{
          width: '30%',
          alignSelf: 'center',
        }}>
        <Switch
          thumbColor={ison ? 'white' : 'red'}
          trackColor={{false: 'blue', true: 'green'}}
          onValueChange={changeBGFunc}
          value={ison}></Switch>

      </View>
    </View>
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
export default Firstbutton;
