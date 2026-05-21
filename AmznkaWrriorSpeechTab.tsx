import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AmznkaWrriorSpeechSufl from './AmznkaWrriorSpeechScr/AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechSufl.tsx';
import AmznkaWrriorSpeechStrs from './AmznkaWrriorSpeechScr/AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechStrs.tsx';
import AmznkaWrriorSpeechTps from './AmznkaWrriorSpeechScr/AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechTps.tsx';
import AmznkaWrriorSpeechWrksh from './AmznkaWrriorSpeechScr/AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechWrksh.tsx';
import AmznkaWrriorSpeechRddls from './AmznkaWrriorSpeechScr/AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechRddls.tsx';
import AmznkaWrriorSpeechStore from './AmznkaWrriorSpeechScr/AmznkaWrriorSpeechScrn/AmznkaWrriorSpeechStore.tsx';

const Tab = createBottomTabNavigator();

const amznkaWrriorSpeechTabBg = '#1A1412';
const amznkaWrriorSpeechTabActive = '#FF9900';
const amznkaWrriorSpeechTabIdle = '#9B8E8F';
const amznkaWrriorSpeechTabActiveOval = 'rgba(255, 153, 0, 0.18)';

const amznkaWrriorSpeechTabCinzelBold = 'Cinzel-Bold';

type AmznkaWrriorSpeechTabConfig = {
  amznkaWrriorSpeechTabName: string;
  amznkaWrriorSpeechTabLabel: string;
  amznkaWrriorSpeechTabLabelFocused?: string;
  amznkaWrriorSpeechTabIcon: ImageSourcePropType;
  amznkaWrriorSpeechTabComponent: React.ComponentType;
};

const amznkaWrriorSpeechTabs: AmznkaWrriorSpeechTabConfig[] = [
  {
    amznkaWrriorSpeechTabName: 'AmznkaWrriorSpeechSufl',
    amznkaWrriorSpeechTabLabel: 'Sufleur',
    amznkaWrriorSpeechTabLabelFocused: 'SUFLEUR',
    amznkaWrriorSpeechTabIcon: require('./assets/i/amznkawrriorspeechtab1.png'),
    amznkaWrriorSpeechTabComponent: AmznkaWrriorSpeechSufl,
  },
  {
    amznkaWrriorSpeechTabName: 'AmznkaWrriorSpeechStrs',
    amznkaWrriorSpeechTabLabel: 'Stories',
    amznkaWrriorSpeechTabIcon: require('./assets/i/amznkawrriorspeechtab2.png'),
    amznkaWrriorSpeechTabComponent: AmznkaWrriorSpeechStrs,
  },
  {
    amznkaWrriorSpeechTabName: 'AmznkaWrriorSpeechTps',
    amznkaWrriorSpeechTabLabel: 'Tips',
    amznkaWrriorSpeechTabIcon: require('./assets/i/amznkawrriorspeechtab3.png'),
    amznkaWrriorSpeechTabComponent: AmznkaWrriorSpeechTps,
  },
  {
    amznkaWrriorSpeechTabName: 'AmznkaWrriorSpeechWrksh',
    amznkaWrriorSpeechTabLabel: 'Workshop',
    amznkaWrriorSpeechTabIcon: require('./assets/i/amznkawrriorspeechtab4.png'),
    amznkaWrriorSpeechTabComponent: AmznkaWrriorSpeechWrksh,
  },
  {
    amznkaWrriorSpeechTabName: 'AmznkaWrriorSpeechRddls',
    amznkaWrriorSpeechTabLabel: 'Riddles',
    amznkaWrriorSpeechTabIcon: require('./assets/i/amznkawrriorspeechtab5.png'),
    amznkaWrriorSpeechTabComponent: AmznkaWrriorSpeechRddls,
  },
  {
    amznkaWrriorSpeechTabName: 'AmznkaWrriorSpeechStore',
    amznkaWrriorSpeechTabLabel: 'Store',
    amznkaWrriorSpeechTabIcon: require('./assets/i/amznkawrriorspeechtab6.png'),
    amznkaWrriorSpeechTabComponent: AmznkaWrriorSpeechStore,
  },
];

type AmznkaWrriorSpeechTabItemProps = {
  amznkaWrriorSpeechTabLabel: string;
  amznkaWrriorSpeechTabLabelFocused?: string;
  amznkaWrriorSpeechTabFocused: boolean;
  amznkaWrriorSpeechTabIcon: ImageSourcePropType;
};

const AmznkaWrriorSpeechTabItem = ({
  amznkaWrriorSpeechTabLabel,
  amznkaWrriorSpeechTabLabelFocused,
  amznkaWrriorSpeechTabFocused,
  amznkaWrriorSpeechTabIcon,
}: AmznkaWrriorSpeechTabItemProps) => {
  const amznkaWrriorSpeechTabDisplayLabel = amznkaWrriorSpeechTabFocused
    ? amznkaWrriorSpeechTabLabelFocused ?? amznkaWrriorSpeechTabLabel
    : amznkaWrriorSpeechTabLabel;

  return (
    <View style={styles.amznkaWrriorSpeechTabItem}>
      <View
        style={[
          styles.amznkaWrriorSpeechTabIconWrap,
          amznkaWrriorSpeechTabFocused &&
            styles.amznkaWrriorSpeechTabIconWrapActive,
        ]}>
        <Image
          source={amznkaWrriorSpeechTabIcon}
          style={styles.amznkaWrriorSpeechTabIcon}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[
          styles.amznkaWrriorSpeechTabLabel,
          amznkaWrriorSpeechTabFocused
            ? styles.amznkaWrriorSpeechTabLabelActive
            : styles.amznkaWrriorSpeechTabLabelIdle,
        ]}
        numberOfLines={1}>
        {amznkaWrriorSpeechTabDisplayLabel}
      </Text>
    </View>
  );
};

const amznkaWrriorSpeechTabCreateIcon =
  (amznkaWrriorSpeechTabConfig: AmznkaWrriorSpeechTabConfig) =>
  ({focused}: {focused: boolean}) =>
    (
      <AmznkaWrriorSpeechTabItem
        amznkaWrriorSpeechTabLabel={
          amznkaWrriorSpeechTabConfig.amznkaWrriorSpeechTabLabel
        }
        amznkaWrriorSpeechTabLabelFocused={
          amznkaWrriorSpeechTabConfig.amznkaWrriorSpeechTabLabelFocused
        }
        amznkaWrriorSpeechTabFocused={focused}
        amznkaWrriorSpeechTabIcon={
          amznkaWrriorSpeechTabConfig.amznkaWrriorSpeechTabIcon
        }
      />
    );

const AmznkaWrriorSpeechTabBarBg = () => (
  <View pointerEvents="none" style={styles.amznkaWrriorSpeechTabBarFill} />
);

const AmznkaWrriorSpeechTab = () => {
  const amznkaWrriorSpeechTabInsets = useSafeAreaInsets();
  const amznkaWrriorSpeechTabBarH =
    64 + Math.max(amznkaWrriorSpeechTabInsets.bottom, 8);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.amznkaWrriorSpeechTabBar,
          {
            height: amznkaWrriorSpeechTabBarH,
            paddingBottom: Math.max(amznkaWrriorSpeechTabInsets.bottom, 8),
          },
        ],
        tabBarBackground: AmznkaWrriorSpeechTabBarBg,
      }}>
      {amznkaWrriorSpeechTabs.map(amznkaWrriorSpeechTab => (
        <Tab.Screen
          key={amznkaWrriorSpeechTab.amznkaWrriorSpeechTabName}
          name={amznkaWrriorSpeechTab.amznkaWrriorSpeechTabName}
          component={amznkaWrriorSpeechTab.amznkaWrriorSpeechTabComponent}
          options={{
            tabBarIcon: amznkaWrriorSpeechTabCreateIcon(amznkaWrriorSpeechTab),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AmznkaWrriorSpeechTab;

const styles = StyleSheet.create({
  amznkaWrriorSpeechTabBar: {
    elevation: 0,
    borderTopWidth: 0,
    backgroundColor: '#1A1718',
    paddingTop: 18,
    paddingHorizontal: 4,

    borderTopColor: 'rgba(255, 153, 0, 0.18)',
  },
  amznkaWrriorSpeechTabBarFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: amznkaWrriorSpeechTabBg,
  },
  amznkaWrriorSpeechTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 72,
    maxWidth: 72,
  },
  amznkaWrriorSpeechTabIconWrap: {
    width: 48,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  amznkaWrriorSpeechTabIconWrapActive: {
    backgroundColor: amznkaWrriorSpeechTabActiveOval,
  },
  amznkaWrriorSpeechTabIcon: {
    width: 24,
    height: 24,
  },
  amznkaWrriorSpeechTabLabel: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
  },
  amznkaWrriorSpeechTabLabelActive: {
    fontFamily: amznkaWrriorSpeechTabCinzelBold,
    fontSize: 10,

    color: amznkaWrriorSpeechTabActive,
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechTabLabelIdle: {
    fontSize: 10,
    fontWeight: '500',
    color: amznkaWrriorSpeechTabIdle,
  },
});
