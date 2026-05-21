import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AmznkaWrriorSpeechStrsDetail from '../AmznkaWrriorSpeechStrs/AmznkaWrriorSpeechStrsDetail';
import AmznkaWrriorSpeechStrsHome from '../AmznkaWrriorSpeechStrs/AmznkaWrriorSpeechStrsHome';
import type {AmznkaWrriorSpeechStrsStackParamList} from '../AmznkaWrriorSpeechStrs/AmznkaWrriorSpeechStrsTypes';

const Stack = createStackNavigator<AmznkaWrriorSpeechStrsStackParamList>();

const AmznkaWrriorSpeechStrs = () => {
  return (
    <Stack.Navigator
      initialRouteName="AmznkaWrriorSpeechStrsHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AmznkaWrriorSpeechStrsHome">
        {({navigation}) => (
          <AmznkaWrriorSpeechStrsHome
            amznkaWrriorSpeechStrsNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="AmznkaWrriorSpeechStrsDetail">
        {({navigation, route}) => (
          <AmznkaWrriorSpeechStrsDetail
            amznkaWrriorSpeechStrsNavigation={navigation}
            amznkaWrriorSpeechStrsRoute={route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AmznkaWrriorSpeechStrs;
