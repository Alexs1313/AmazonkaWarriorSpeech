import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FluxTierScreen from '../screens/flux/DiffScreen';
import FluxHomeScreen from '../screens/flux/HomeScreen';
import FluxReadScreen from '../screens/flux/ReadScreen';
import FluxOutcomeScreen from '../screens/flux/ResultScreen';
import type {FluxStackParams} from '../types/flux';

const Stack = createStackNavigator<FluxStackParams>();

const Flux = () => {
  return (
    <Stack.Navigator
      initialRouteName="FluxHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FluxHome">
        {({navigation}) => (
          <FluxHomeScreen
            fluxNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="FluxTier">
        {({navigation, route}) => (
          <FluxTierScreen
            fluxNavigation={navigation}
            fluxRoute={route}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="FluxRead"
        options={{gestureEnabled: false}}>
        {({navigation, route}) => (
          <FluxReadScreen
            fluxNavigation={navigation}
            fluxRoute={route}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="FluxOutcome">
        {({navigation, route}) => (
          <FluxOutcomeScreen
            fluxNavigation={navigation}
            fluxRoute={route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Flux;
