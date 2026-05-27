import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AmzznkWrriorsppeechMainRoutesStack} from './AmzznkWrriorsppeech/amzznkWrriorsppeechroutts/AmzznkWrriorsppeechMainRoutesStack';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AmzznkWrriorsppeechMainRoutesStack />
    </GestureHandlerRootView>
  );
}

export default App;
