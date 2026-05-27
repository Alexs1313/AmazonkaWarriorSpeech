import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Image,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AmzznkWrriorsppeechBootScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechBootScreen';
import {AmzznkWrriorsppeechWalkScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechWalkScreen';
import {AmzznkWrriorsppeechFluxHomeScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechFluxHomeScreen';
import {AmzznkWrriorsppeechFluxTierScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechFluxTierScreen';
import {AmzznkWrriorsppeechFluxReadScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechFluxReadScreen';
import {AmzznkWrriorsppeechFluxOutcomeScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechFluxOutcomeScreen';
import {AmzznkWrriorsppeechChronicleHomeScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechChronicleHomeScreen';
import {AmzznkWrriorsppeechChronicleDetailScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechChronicleDetailScreen';
import {AmzznkWrriorsppeechNotebookHomeScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechNotebookHomeScreen';
import {AmzznkWrriorsppeechStudioHomeScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechStudioHomeScreen';
import {AmzznkWrriorsppeechOracleIntroScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechOracleIntroScreen';
import {AmzznkWrriorsppeechOracleTrialScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechOracleTrialScreen';
import {AmzznkWrriorsppeechOracleResultScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechOracleResultScreen';
import {AmzznkWrriorsppeechVaultHomeScreen} from '../amzznkWrriorsppeechscrnn/AmzznkWrriorsppeechVaultHomeScreen';
import type {AmzznkWrriorsppeechFluxStackParams} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxTypes';
import type {AmzznkWrriorsppeechChronicleStackParams} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleTypes';
import type {AmzznkWrriorsppeechOracleStackParams} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechoracleTypes';

const RootStack = createStackNavigator();
const FluxStack = createStackNavigator<AmzznkWrriorsppeechFluxStackParams>();
const ChronicleStack =
  createStackNavigator<AmzznkWrriorsppeechChronicleStackParams>();
const OracleStack = createStackNavigator<AmzznkWrriorsppeechOracleStackParams>();
const Tab = createBottomTabNavigator();

const amzznkWrriorsppeechMainTabBg = '#1A1412';
const amzznkWrriorsppeechMainTabActive = '#FF9900';
const amzznkWrriorsppeechMainTabIdle = '#9B8E8F';
const amzznkWrriorsppeechMainTabActiveOval = 'rgba(255, 153, 0, 0.18)';
const amzznkWrriorsppeechMainTabCinzelBold = 'Cinzel-Bold';

type AmzznkWrriorsppeechMainTabsConfig = {
  amzznkWrriorsppeechMainTabName: string;
  amzznkWrriorsppeechMainTabLabel: string;
  amzznkWrriorsppeechMainTabLabelFocused?: string;
  amzznkWrriorsppeechMainTabIcon: ImageSourcePropType;
  amzznkWrriorsppeechMainTabComponent: React.ComponentType;
};

const amzznkWrriorsppeechMainTabs: AmzznkWrriorsppeechMainTabsConfig[] = [
  {
    amzznkWrriorsppeechMainTabName: 'Flux',
    amzznkWrriorsppeechMainTabLabel: 'Flow',
    amzznkWrriorsppeechMainTabLabelFocused: 'FLOW',
    amzznkWrriorsppeechMainTabIcon: require('../../assets/images/amzznkWrriorsppeechTabFlow.png'),
    amzznkWrriorsppeechMainTabComponent: AmzznkWrriorsppeechFluxStack,
  },
  {
    amzznkWrriorsppeechMainTabName: 'Chronicle',
    amzznkWrriorsppeechMainTabLabel: 'Chronicles',
    amzznkWrriorsppeechMainTabIcon: require('../../assets/images/amzznkWrriorsppeechTabChronicle.png'),
    amzznkWrriorsppeechMainTabComponent: AmzznkWrriorsppeechChronicleStack,
  },
  {
    amzznkWrriorsppeechMainTabName: 'Notebook',
    amzznkWrriorsppeechMainTabLabel: 'Notes',
    amzznkWrriorsppeechMainTabIcon: require('../../assets/images/amzznkWrriorsppeechTabNotes.png'),
    amzznkWrriorsppeechMainTabComponent: AmzznkWrriorsppeechNotebookHomeScreen,
  },
  {
    amzznkWrriorsppeechMainTabName: 'Studio',
    amzznkWrriorsppeechMainTabLabel: 'Lab',
    amzznkWrriorsppeechMainTabIcon: require('../../assets/images/amzznkWrriorsppeechTabStudio.png'),
    amzznkWrriorsppeechMainTabComponent: AmzznkWrriorsppeechStudioHomeScreen,
  },
  {
    amzznkWrriorsppeechMainTabName: 'Oracle',
    amzznkWrriorsppeechMainTabLabel: 'Oracle',
    amzznkWrriorsppeechMainTabIcon: require('../../assets/images/amzznkWrriorsppeechTabOracle.png'),
    amzznkWrriorsppeechMainTabComponent: AmzznkWrriorsppeechOracleStack,
  },
  {
    amzznkWrriorsppeechMainTabName: 'Vault',
    amzznkWrriorsppeechMainTabLabel: 'Vault',
    amzznkWrriorsppeechMainTabIcon: require('../../assets/images/amzznkWrriorsppeechTabVault.png'),
    amzznkWrriorsppeechMainTabComponent: AmzznkWrriorsppeechVaultHomeScreen,
  },
];

function AmzznkWrriorsppeechFluxStack() {
  return (
    <FluxStack.Navigator
      initialRouteName="FluxHome"
      screenOptions={{headerShown: false}}>
      <FluxStack.Screen name="FluxHome">
        {({navigation}) => (
          <AmzznkWrriorsppeechFluxHomeScreen
            amzznkWrriorsppeechFluxNavigation={navigation}
          />
        )}
      </FluxStack.Screen>
      <FluxStack.Screen name="FluxTier">
        {({navigation, route}) => (
          <AmzznkWrriorsppeechFluxTierScreen
            amzznkWrriorsppeechFluxNavigation={navigation}
            amzznkWrriorsppeechFluxRoute={route}
          />
        )}
      </FluxStack.Screen>
      <FluxStack.Screen name="FluxRead" options={{gestureEnabled: false}}>
        {({navigation, route}) => (
          <AmzznkWrriorsppeechFluxReadScreen
            amzznkWrriorsppeechFluxNavigation={navigation}
            amzznkWrriorsppeechFluxRoute={route}
          />
        )}
      </FluxStack.Screen>
      <FluxStack.Screen name="FluxOutcome">
        {({navigation, route}) => (
          <AmzznkWrriorsppeechFluxOutcomeScreen
            amzznkWrriorsppeechFluxNavigation={navigation}
            amzznkWrriorsppeechFluxRoute={route}
          />
        )}
      </FluxStack.Screen>
    </FluxStack.Navigator>
  );
}

function AmzznkWrriorsppeechChronicleStack() {
  return (
    <ChronicleStack.Navigator
      initialRouteName="ChronicleHome"
      screenOptions={{headerShown: false}}>
      <ChronicleStack.Screen name="ChronicleHome">
        {({navigation}) => (
          <AmzznkWrriorsppeechChronicleHomeScreen
            amzznkWrriorsppeechChronicleNavigation={navigation}
          />
        )}
      </ChronicleStack.Screen>
      <ChronicleStack.Screen name="ChronicleDetail">
        {({navigation, route}) => (
          <AmzznkWrriorsppeechChronicleDetailScreen
            amzznkWrriorsppeechChronicleNavigation={navigation}
            amzznkWrriorsppeechChronicleRoute={route}
          />
        )}
      </ChronicleStack.Screen>
    </ChronicleStack.Navigator>
  );
}

function AmzznkWrriorsppeechOracleStack() {
  return (
    <OracleStack.Navigator
      initialRouteName="OracleIntro"
      screenOptions={{headerShown: false}}>
      <OracleStack.Screen name="OracleIntro">
        {({navigation}) => (
          <AmzznkWrriorsppeechOracleIntroScreen
            amzznkWrriorsppeechOracleNavigation={navigation}
          />
        )}
      </OracleStack.Screen>
      <OracleStack.Screen name="OracleTrial" options={{gestureEnabled: false}}>
        {({navigation}) => (
          <AmzznkWrriorsppeechOracleTrialScreen
            amzznkWrriorsppeechOracleNavigation={navigation}
          />
        )}
      </OracleStack.Screen>
      <OracleStack.Screen name="OracleOutcome">
        {({navigation, route}) => (
          <AmzznkWrriorsppeechOracleResultScreen
            amzznkWrriorsppeechOracleNavigation={navigation}
            amzznkWrriorsppeechOracleRoute={route}
          />
        )}
      </OracleStack.Screen>
    </OracleStack.Navigator>
  );
}

type AmzznkWrriorsppeechMainTabsItemProps = {
  amzznkWrriorsppeechMainTabLabel: string;
  amzznkWrriorsppeechMainTabLabelFocused?: string;
  amzznkWrriorsppeechMainTabFocused: boolean;
  amzznkWrriorsppeechMainTabIcon: ImageSourcePropType;
};

const AmzznkWrriorsppeechMainTabsItem = ({
  amzznkWrriorsppeechMainTabLabel,
  amzznkWrriorsppeechMainTabLabelFocused,
  amzznkWrriorsppeechMainTabFocused,
  amzznkWrriorsppeechMainTabIcon,
}: AmzznkWrriorsppeechMainTabsItemProps) => {
  const amzznkWrriorsppeechMainTabDisplayLabel = amzznkWrriorsppeechMainTabFocused
    ? amzznkWrriorsppeechMainTabLabelFocused ?? amzznkWrriorsppeechMainTabLabel
    : amzznkWrriorsppeechMainTabLabel;

  return (
    <View style={styles.amzznkWrriorsppeechMainTabItem}>
      <View
        style={[
          styles.amzznkWrriorsppeechMainTabIconWrap,
          amzznkWrriorsppeechMainTabFocused &&
            styles.amzznkWrriorsppeechMainTabIconWrapActive,
        ]}>
        <Image
          source={amzznkWrriorsppeechMainTabIcon}
          style={styles.amzznkWrriorsppeechMainTabIcon}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[
          styles.amzznkWrriorsppeechMainTabLabel,
          amzznkWrriorsppeechMainTabFocused
            ? styles.amzznkWrriorsppeechMainTabLabelActive
            : styles.amzznkWrriorsppeechMainTabLabelIdle,
        ]}
        numberOfLines={1}>
        {amzznkWrriorsppeechMainTabDisplayLabel}
      </Text>
    </View>
  );
};

const amzznkWrriorsppeechMainTabCreateIcon =
  (amzznkWrriorsppeechMainTabConfig: AmzznkWrriorsppeechMainTabsConfig) =>
  ({focused}: {focused: boolean}) =>
    (
      <AmzznkWrriorsppeechMainTabsItem
        amzznkWrriorsppeechMainTabLabel={
          amzznkWrriorsppeechMainTabConfig.amzznkWrriorsppeechMainTabLabel
        }
        amzznkWrriorsppeechMainTabLabelFocused={
          amzznkWrriorsppeechMainTabConfig.amzznkWrriorsppeechMainTabLabelFocused
        }
        amzznkWrriorsppeechMainTabFocused={focused}
        amzznkWrriorsppeechMainTabIcon={
          amzznkWrriorsppeechMainTabConfig.amzznkWrriorsppeechMainTabIcon
        }
      />
    );

const AmzznkWrriorsppeechMainTabsBarBg = () => (
  <View pointerEvents="none" style={styles.amzznkWrriorsppeechMainTabBarFill} />
);

function AmzznkWrriorsppeechMainTabNavigator() {
  const amzznkWrriorsppeechMainTabInsets = useSafeAreaInsets();
  const amzznkWrriorsppeechMainTabBarH =
    64 + Math.max(amzznkWrriorsppeechMainTabInsets.bottom, 8);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.amzznkWrriorsppeechMainTabBar,
          {
            height: amzznkWrriorsppeechMainTabBarH,
            paddingBottom: Math.max(amzznkWrriorsppeechMainTabInsets.bottom, 8),
          },
        ],
        tabBarBackground: AmzznkWrriorsppeechMainTabsBarBg,
      }}>
      {amzznkWrriorsppeechMainTabs.map(amzznkWrriorsppeechMainTab => (
        <Tab.Screen
          key={amzznkWrriorsppeechMainTab.amzznkWrriorsppeechMainTabName}
          name={amzznkWrriorsppeechMainTab.amzznkWrriorsppeechMainTabName}
          component={amzznkWrriorsppeechMainTab.amzznkWrriorsppeechMainTabComponent}
          options={{
            tabBarIcon: amzznkWrriorsppeechMainTabCreateIcon(amzznkWrriorsppeechMainTab),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export function AmzznkWrriorsppeechMainRoutesStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Boot" component={AmzznkWrriorsppeechBootScreen} />
        <RootStack.Screen name="Walk" component={AmzznkWrriorsppeechWalkScreen} />
        <RootStack.Screen
          name="MainTabs"
          component={AmzznkWrriorsppeechMainTabNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechMainTabBar: {
    elevation: 0,
    borderTopWidth: 0,
    backgroundColor: '#1A1718',
    paddingTop: 18,
    paddingHorizontal: 4,
    borderTopColor: 'rgba(255, 153, 0, 0.18)',
  },
  amzznkWrriorsppeechMainTabBarFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: amzznkWrriorsppeechMainTabBg,
  },
  amzznkWrriorsppeechMainTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 72,
    maxWidth: 72,
  },
  amzznkWrriorsppeechMainTabIconWrap: {
    width: 48,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  amzznkWrriorsppeechMainTabIconWrapActive: {
    backgroundColor: amzznkWrriorsppeechMainTabActiveOval,
  },
  amzznkWrriorsppeechMainTabIcon: {
    width: 24,
    height: 24,
  },
  amzznkWrriorsppeechMainTabLabel: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
  },
  amzznkWrriorsppeechMainTabLabelActive: {
    fontFamily: amzznkWrriorsppeechMainTabCinzelBold,
    fontSize: 10,
    color: amzznkWrriorsppeechMainTabActive,
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechMainTabLabelIdle: {
    fontSize: 10,
    fontWeight: '500',
    color: amzznkWrriorsppeechMainTabIdle,
  },
});
