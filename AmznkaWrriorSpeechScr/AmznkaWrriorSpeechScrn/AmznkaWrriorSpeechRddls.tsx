import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AmznkaWrriorSpeechRddlsIntro from '../AmznkaWrriorSpeechRddls/AmznkaWrriorSpeechRddlsIntro';
import AmznkaWrriorSpeechRddlsPlay from '../AmznkaWrriorSpeechRddls/AmznkaWrriorSpeechRddlsPlay';
import AmznkaWrriorSpeechRddlsResult from '../AmznkaWrriorSpeechRddls/AmznkaWrriorSpeechRddlsResult';
import type {AmznkaWrriorSpeechRddlsStackParamList} from '../AmznkaWrriorSpeechRddls/AmznkaWrriorSpeechRddlsTypes';

const Stack = createStackNavigator<AmznkaWrriorSpeechRddlsStackParamList>();

const AmznkaWrriorSpeechRddls = () => {
  return (
    <Stack.Navigator
      initialRouteName="AmznkaWrriorSpeechRddlsIntro"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AmznkaWrriorSpeechRddlsIntro">
        {({navigation}) => (
          <AmznkaWrriorSpeechRddlsIntro
            amznkaWrriorSpeechRddlsNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="AmznkaWrriorSpeechRddlsPlay"
        options={{gestureEnabled: false}}>
        {({navigation}) => (
          <AmznkaWrriorSpeechRddlsPlay
            amznkaWrriorSpeechRddlsNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="AmznkaWrriorSpeechRddlsResult">
        {({navigation, route}) => (
          <AmznkaWrriorSpeechRddlsResult
            amznkaWrriorSpeechRddlsNavigation={navigation}
            amznkaWrriorSpeechRddlsRoute={route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AmznkaWrriorSpeechRddls;
