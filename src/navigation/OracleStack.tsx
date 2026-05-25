import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OracleIntroScreen from '../screens/oracle/IntroScreen';
import OracleTrialScreen from '../screens/oracle/TrialScreen';
import OracleOutcomeScreen from '../screens/oracle/ResultScreen';
import type {OracleStackParams} from '../types/oracle';

const Stack = createStackNavigator<OracleStackParams>();

const Oracle = () => {
  return (
    <Stack.Navigator
      initialRouteName="OracleIntro"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OracleIntro">
        {({navigation}) => (
          <OracleIntroScreen
            oracleNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="OracleTrial"
        options={{gestureEnabled: false}}>
        {({navigation}) => (
          <OracleTrialScreen
            oracleNavigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="OracleOutcome">
        {({navigation, route}) => (
          <OracleOutcomeScreen
            oracleNavigation={navigation}
            oracleRoute={route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Oracle;
