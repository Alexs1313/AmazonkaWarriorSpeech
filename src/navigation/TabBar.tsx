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
import Flux from './FluxStack';
import Chronicle from './ChronicleStack';
import Notebook from './NotebookStack';
import Studio from './StudioStack';
import Oracle from './OracleStack';
import Vault from './VaultStack';

const Tab = createBottomTabNavigator();

const mainTabBg = '#1A1412';
const mainTabActive = '#FF9900';
const mainTabIdle = '#9B8E8F';
const mainTabActiveOval = 'rgba(255, 153, 0, 0.18)';

const mainTabCinzelBold = 'Cinzel-Bold';

type MainTabsConfig = {
  mainTabName: string;
  mainTabLabel: string;
  mainTabLabelFocused?: string;
  mainTabIcon: ImageSourcePropType;
  mainTabComponent: React.ComponentType;
};

const mainTabs: MainTabsConfig[] = [
  {
    mainTabName: 'Flux',
    mainTabLabel: 'Flow',
    mainTabLabelFocused: 'FLOW',
    mainTabIcon: require('../../elements/images/tab-flow.png'),
    mainTabComponent: Flux,
  },
  {
    mainTabName: 'Chronicle',
    mainTabLabel: 'Chronicles',
    mainTabIcon: require('../../elements/images/tab-chronicle.png'),
    mainTabComponent: Chronicle,
  },
  {
    mainTabName: 'Notebook',
    mainTabLabel: 'Notes',
    mainTabIcon: require('../../elements/images/tab-notes.png'),
    mainTabComponent: Notebook,
  },
  {
    mainTabName: 'Studio',
    mainTabLabel: 'Lab',
    mainTabIcon: require('../../elements/images/tab-studio.png'),
    mainTabComponent: Studio,
  },
  {
    mainTabName: 'Oracle',
    mainTabLabel: 'Oracle',
    mainTabIcon: require('../../elements/images/tab-oracle.png'),
    mainTabComponent: Oracle,
  },
  {
    mainTabName: 'Vault',
    mainTabLabel: 'Vault',
    mainTabIcon: require('../../elements/images/tab-vault.png'),
    mainTabComponent: Vault,
  },
];

type MainTabsItemProps = {
  mainTabLabel: string;
  mainTabLabelFocused?: string;
  mainTabFocused: boolean;
  mainTabIcon: ImageSourcePropType;
};

const MainTabsItem = ({
  mainTabLabel,
  mainTabLabelFocused,
  mainTabFocused,
  mainTabIcon,
}: MainTabsItemProps) => {
  const mainTabDisplayLabel = mainTabFocused
    ? mainTabLabelFocused ?? mainTabLabel
    : mainTabLabel;

  return (
    <View style={styles.mainTabItem}>
      <View
        style={[
          styles.mainTabIconWrap,
          mainTabFocused &&
            styles.mainTabIconWrapActive,
        ]}>
        <Image
          source={mainTabIcon}
          style={styles.mainTabIcon}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[
          styles.mainTabLabel,
          mainTabFocused
            ? styles.mainTabLabelActive
            : styles.mainTabLabelIdle,
        ]}
        numberOfLines={1}>
        {mainTabDisplayLabel}
      </Text>
    </View>
  );
};

const mainTabCreateIcon =
  (mainTabConfig: MainTabsConfig) =>
  ({focused}: {focused: boolean}) =>
    (
      <MainTabsItem
        mainTabLabel={
          mainTabConfig.mainTabLabel
        }
        mainTabLabelFocused={
          mainTabConfig.mainTabLabelFocused
        }
        mainTabFocused={focused}
        mainTabIcon={
          mainTabConfig.mainTabIcon
        }
      />
    );

const MainTabsBarBg = () => (
  <View pointerEvents="none" style={styles.mainTabBarFill} />
);

const MainTabs = () => {
  const mainTabInsets = useSafeAreaInsets();
  const mainTabBarH =
    64 + Math.max(mainTabInsets.bottom, 8);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.mainTabBar,
          {
            height: mainTabBarH,
            paddingBottom: Math.max(mainTabInsets.bottom, 8),
          },
        ],
        tabBarBackground: MainTabsBarBg,
      }}>
      {mainTabs.map(mainTab => (
        <Tab.Screen
          key={mainTab.mainTabName}
          name={mainTab.mainTabName}
          component={mainTab.mainTabComponent}
          options={{
            tabBarIcon: mainTabCreateIcon(mainTab),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({
  mainTabBar: {
    elevation: 0,
    borderTopWidth: 0,
    backgroundColor: '#1A1718',
    paddingTop: 18,
    paddingHorizontal: 4,

    borderTopColor: 'rgba(255, 153, 0, 0.18)',
  },
  mainTabBarFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: mainTabBg,
  },
  mainTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 72,
    maxWidth: 72,
  },
  mainTabIconWrap: {
    width: 48,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  mainTabIconWrapActive: {
    backgroundColor: mainTabActiveOval,
  },
  mainTabIcon: {
    width: 24,
    height: 24,
  },
  mainTabLabel: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
  },
  mainTabLabelActive: {
    fontFamily: mainTabCinzelBold,
    fontSize: 10,

    color: mainTabActive,
    textTransform: 'uppercase',
  },
  mainTabLabelIdle: {
    fontSize: 10,
    fontWeight: '500',
    color: mainTabIdle,
  },
});
