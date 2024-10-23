import React, {useState} from 'react';

// https://www.youtube.com/watch?v=UcJyQ5MOoJo

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

const Firstbutton = () => {
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
    keyboardVerticalOffset={50}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView  contentContainerStyle={{flexGrow:1}}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmljJTIwZG9nfGVufDB8fDB8fHww',
        }}
        style={{    width: '40%',
          height: 150,
          alignSelf: 'center',
          marginVertical: 20,
          borderRadius: 100,
      }}
      />

          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput
        
          placeholder="Type something --input box"
          placeholderTextColor="blue"
          onChangeText={setValueInput}
          value={valueInput}
        />

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </ScrollView>
      {/* <View style={{height:'40%'}}>

      </View> */}
    </KeyboardAvoidingView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default Firstbutton;
