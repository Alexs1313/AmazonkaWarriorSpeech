import {createStackNavigator} from '@react-navigation/stack';

import BootScreen from '../screens/BootScreen';
import WalkScreen from '../screens/WalkScreen';
import MainTabs from './TabBar';

const Stack = createStackNavigator();

const VoiceFlowNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Boot"
        component={BootScreen}
      />
      <Stack.Screen
        name="Walk"
        component={WalkScreen}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
      />
    </Stack.Navigator>
  );
};

export default VoiceFlowNavigator;
