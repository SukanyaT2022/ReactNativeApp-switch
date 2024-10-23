import React from 'react'
import { Text, View ,} from 'react-native'
// step 1 install npm i @react-native-vector-icons/common
// https://www.npmjs.com/package/@react-native-vector-icons/common
// step 2 terminal cd ios
// step 3 put command in terminal--npx pod-install 
//then y
//step 4 go to xcode
//file open that file
//go to ios
// go to .xcworkspace
//look for node model --- react native vertor icons
//right click in font --then revel in finder
//npm i --save-dev @types/react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome';
const Icon55 = () => {
  return (
    <View>
        <Text>Hello Icon</Text>
        <Icon name="rocket" size={30} color="#900" />
        
        </View>
  )
}

export default Icon55