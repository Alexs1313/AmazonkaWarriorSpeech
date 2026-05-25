import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  FluxNavigation,
  FluxOutcomeRoute,
} from '../../types/flux';
import {
  vaultUnlockedFluxPassagesForRealm,
} from '../../data/vault';
import {vaultLoadUnlockedIds} from '../../data/vaultStorage';
import {
  fluxGetText,
  type FluxPassage,
} from '../../data/flux';
import SceneShell from '../../components/Shell';

type FluxOutcomeScreenProps = {
  fluxNavigation: FluxNavigation;
  fluxRoute: FluxOutcomeRoute;
};

const fluxBtnGradient = [
  '#FF9900',
  '#FF960A',
  '#FF9311',
  '#FF9017',
  '#FF8D1C',
  '#FF8A21',
  '#FF8726',
  '#FF842B',
  '#FF8130',
  '#FF7E34',
  '#FF7B38',
  '#FF783C',
  '#FF7540',
  '#FF7244',
  '#FF6B35',
];

const FluxOutcomeScreen = ({
  fluxNavigation,
  fluxRoute,
}: FluxOutcomeScreenProps) => {
  const fluxInsets = useSafeAreaInsets();
  const {fluxCategoryId, fluxPassageId} =
    fluxRoute.params;

  const [fluxStoreTexts, setFluxStoreTexts] =
    useState<FluxPassage[]>([]);

  useFocusEffect(
    useCallback(() => {
      vaultLoadUnlockedIds().then(
        fluxUnlockedIds =>
          setFluxStoreTexts(
            vaultUnlockedFluxPassagesForRealm(
              fluxUnlockedIds,
              fluxCategoryId,
            ),
          ),
      );
    }, [fluxCategoryId]),
  );

  const fluxPassage = fluxGetText(
    fluxCategoryId,
    fluxPassageId,
    fluxStoreTexts,
  );

  if (!fluxPassage) {
    return null;
  }

  const fluxShare = async () => {
    await Share.share({
      message: `I completed "${fluxPassage.fluxPassageTitle}" on Amazonka Warrior Speech!`,
    });
  };

  return (
    <SceneShell>
      <View
        style={[
          styles.fluxResultScroll,
          {paddingTop: fluxInsets.top + 16},
        ]}>
        <LinearGradient
          colors={['rgba(255, 153, 0, 0.2)', 'rgba(255, 107, 53, 0.1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.fluxResultPortraitWrap}>
          <Image source={require('../../../elements/images/outcome-success.png')} />
        </LinearGradient>

        <Text style={styles.fluxResultTitle}>
          Excellent, Warrior!
        </Text>
        <Text style={styles.fluxResultMessage}>
          You completed "
          {fluxPassage.fluxPassageTitle}
          ". Your voice grows stronger with every session.
        </Text>

        <Pressable
          onPress={fluxShare}
          style={({pressed}) => [
            styles.fluxResultShareWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={fluxBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.fluxResultShareBtn}>
            <Text style={styles.fluxResultShareText}>
              Share
            </Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() =>
            fluxNavigation.reset({
              index: 1,
              routes: [
                {name: 'FluxHome'},
                {
                  name: 'FluxTier',
                  params: {fluxCategoryId},
                },
              ],
            })
          }
          style={({pressed}) => [
            styles.fluxResultSecondaryBtn,
            pressed && {opacity: 0.88},
          ]}>
          <Text style={styles.fluxResultSecondaryText}>
            Choose Another Text
          </Text>
        </Pressable>
      </View>
    </SceneShell>
  );
};

export default FluxOutcomeScreen;

const styles = StyleSheet.create({
  fluxResultRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  fluxResultScroll: {
    alignItems: 'center',
    paddingHorizontal: 23,
    paddingBottom: 24,
    flex: 1,
    justifyContent: 'center',
  },
  fluxResultPortraitWrap: {
    width: 280,
    height: 280,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 153, 0, 0.3)',
    overflow: 'hidden',
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fluxResultPortrait: {
    width: 220,
    height: 380,
    marginTop: 4,
  },
  fluxResultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  fluxResultMessage: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B8E8F',
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 8,
  },
  fluxResultShareWrap: {
    width: '100%',
    marginBottom: 12,
  },
  fluxResultShareBtn: {
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fluxResultShareText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  fluxResultSecondaryBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fluxResultSecondaryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
