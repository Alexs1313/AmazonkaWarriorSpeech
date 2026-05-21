import {createStackNavigator} from '@react-navigation/stack';

import AmznkaWrriorSpeechLoad from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLoad.tsx';
import AmznkaWrriorSpeechOnb from '../AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechOnb.tsx';
import AmznkaWrriorSpeechTab from '../../AmznkaWrriorSpeechTab.tsx';

const Stack = createStackNavigator();

const AmznkaWrriorSpeechStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AmznkaWrriorSpeechLoad"
        component={AmznkaWrriorSpeechLoad}
      />
      <Stack.Screen
        name="AmznkaWrriorSpeechOnb"
        component={AmznkaWrriorSpeechOnb}
      />
      <Stack.Screen
        name="AmznkaWrriorSpeechTab"
        component={AmznkaWrriorSpeechTab}
      />
    </Stack.Navigator>
  );
};

export default AmznkaWrriorSpeechStack;
