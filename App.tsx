/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Firstbutton from './src/Firstbutton';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import KeyboardAvoidingComponent from './src/KeyboardAvoidingComponent';
import NewKeyboardAvoid from './src/NewKeyboardAvoid';
import KeyboardAvoid5 from './src/keyboardAvoid5';
import Keybavoid55 from './src/Keybavoid55';
import Switch55 from './src/Switch55';
import BasicJavaS from './src/BasicJavaS';
import Icon from './src/Icon55';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>

//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      {/* <Firstbutton /> */}
      {/* <KeyboardAvoidingComponent/> */}
      {/* <NewKeyboardAvoid/> */}
    {/* <Keybavoid55/> */}
{/* <Switch55/> */}
{/* <BasicJavaS/> */}
<Icon/>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({});

export default App;
