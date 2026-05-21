import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AmznkaWrriorSpeechSuflDiff from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflDiff';
import AmznkaWrriorSpeechSuflHome from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflHome';
import AmznkaWrriorSpeechSuflRead from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflRead';
import AmznkaWrriorSpeechSuflResult from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflResult';
import type {AmznkaWrriorSpeechSuflStackParamList} from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflTypes';

const Stack = createStackNavigator<AmznkaWrriorSpeechSuflStackParamList>();

const AmznkaWrriorSpeechSufl = () => {
  return (
    <Stack.Navigator
      initialRouteName="AmznkaWrriorSpeechSuflHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AmznkaWrriorSpeechSuflHome">
        {({navigation}) => (
          <AmznkaWrriorSpeechSuflHome
            amznkaWrriorSpeechSuflNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="AmznkaWrriorSpeechSuflDiff">
        {({navigation, route}) => (
          <AmznkaWrriorSpeechSuflDiff
            amznkaWrriorSpeechSuflNavigation={navigation}
            amznkaWrriorSpeechSuflRoute={route}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="AmznkaWrriorSpeechSuflRead"
        options={{gestureEnabled: false}}>
        {({navigation, route}) => (
          <AmznkaWrriorSpeechSuflRead
            amznkaWrriorSpeechSuflNavigation={navigation}
            amznkaWrriorSpeechSuflRoute={route}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="AmznkaWrriorSpeechSuflResult">
        {({navigation, route}) => (
          <AmznkaWrriorSpeechSuflResult
            amznkaWrriorSpeechSuflNavigation={navigation}
            amznkaWrriorSpeechSuflRoute={route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AmznkaWrriorSpeechSufl;
