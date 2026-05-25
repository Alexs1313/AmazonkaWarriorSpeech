import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChronicleDetailScreen from '../screens/chronicle/DetailScreen';
import ChronicleHomeScreen from '../screens/chronicle/HomeScreen';
import type {ChronicleStackParams} from '../types/chronicle';

const Stack = createStackNavigator<ChronicleStackParams>();

const Chronicle = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChronicleHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChronicleHome">
        {({navigation}) => (
          <ChronicleHomeScreen
            chronicleNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ChronicleDetail">
        {({navigation, route}) => (
          <ChronicleDetailScreen
            chronicleNavigation={navigation}
            chronicleRoute={route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Chronicle;
