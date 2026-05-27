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
  AmzznkWrriorsppeechFluxNavigation,
  AmzznkWrriorsppeechFluxOutcomeRoute,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxTypes';
import {
  amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultCatalog';
import {amzznkWrriorsppeechVaultLoadUnlockedIds} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultStorage';
import {
  amzznkWrriorsppeechFluxGetText,
  type AmzznkWrriorsppeechFluxPassage,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxCatalog';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';

type AmzznkWrriorsppeechFluxOutcomeScreenProps = {
  amzznkWrriorsppeechFluxNavigation: AmzznkWrriorsppeechFluxNavigation;
  amzznkWrriorsppeechFluxRoute: AmzznkWrriorsppeechFluxOutcomeRoute;
}

const amzznkWrriorsppeechFluxBtnGradient = [
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

export function AmzznkWrriorsppeechFluxOutcomeScreen({
  amzznkWrriorsppeechFluxNavigation,
  amzznkWrriorsppeechFluxRoute,
}: AmzznkWrriorsppeechFluxOutcomeScreenProps) {
  const amzznkWrriorsppeechFluxInsets = useSafeAreaInsets();
  const {amzznkWrriorsppeechFluxCategoryId, amzznkWrriorsppeechFluxPassageId} =
    amzznkWrriorsppeechFluxRoute.params;

  const [fluxStoreTexts, setFluxStoreTexts] =
    useState<AmzznkWrriorsppeechFluxPassage[]>([]);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechVaultLoadUnlockedIds().then(
        amzznkWrriorsppeechFluxUnlockedIds =>
          setFluxStoreTexts(
            amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm(
              amzznkWrriorsppeechFluxUnlockedIds,
              amzznkWrriorsppeechFluxCategoryId,
            ),
          ),
      );
    }, [amzznkWrriorsppeechFluxCategoryId]),
  );

  const amzznkWrriorsppeechFluxPassage = amzznkWrriorsppeechFluxGetText(
    amzznkWrriorsppeechFluxCategoryId,
    amzznkWrriorsppeechFluxPassageId,
    fluxStoreTexts,
  );

  if (!amzznkWrriorsppeechFluxPassage) {
    return null;
  }

  const amzznkWrriorsppeechFluxShare = async () => {
    await Share.share({
      message: `I completed "${amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageTitle}" on Amazonka Warrior Speech!`,
    });
  };

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechFluxResultScroll,
          {paddingTop: amzznkWrriorsppeechFluxInsets.top + 16},
        ]}>
        <LinearGradient
          colors={['rgba(255, 153, 0, 0.2)', 'rgba(255, 107, 53, 0.1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.amzznkWrriorsppeechFluxResultPortraitWrap}>
          <Image source={require('../../assets/images/amzznkWrriorsppeechOutcomeSuccess.png')} />
        </LinearGradient>

        <Text style={styles.amzznkWrriorsppeechFluxResultTitle}>
          Excellent, Warrior!
        </Text>
        <Text style={styles.amzznkWrriorsppeechFluxResultMessage}>
          You completed "
          {amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageTitle}
          ". Your voice grows stronger with every session.
        </Text>

        <Pressable
          onPress={amzznkWrriorsppeechFluxShare}
          style={({pressed}) => [
            styles.amzznkWrriorsppeechFluxResultShareWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amzznkWrriorsppeechFluxBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amzznkWrriorsppeechFluxResultShareBtn}>
            <Text style={styles.amzznkWrriorsppeechFluxResultShareText}>
              Share
            </Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() =>
            amzznkWrriorsppeechFluxNavigation.reset({
              index: 1,
              routes: [
                {name: 'FluxHome'},
                {
                  name: 'FluxTier',
                  params: {amzznkWrriorsppeechFluxCategoryId},
                },
              ],
            })
          }
          style={({pressed}) => [
            styles.amzznkWrriorsppeechFluxResultSecondaryBtn,
            pressed && {opacity: 0.88},
          ]}>
          <Text style={styles.amzznkWrriorsppeechFluxResultSecondaryText}>
            Choose Another Text
          </Text>
        </Pressable>
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechFluxResultRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechFluxResultScroll: {
    alignItems: 'center',
    paddingHorizontal: 23,
    paddingBottom: 24,
    flex: 1,
    justifyContent: 'center',
  },
  amzznkWrriorsppeechFluxResultPortraitWrap: {
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
  amzznkWrriorsppeechFluxResultPortrait: {
    width: 220,
    height: 380,
    marginTop: 4,
  },
  amzznkWrriorsppeechFluxResultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  amzznkWrriorsppeechFluxResultMessage: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B8E8F',
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 8,
  },
  amzznkWrriorsppeechFluxResultShareWrap: {
    width: '100%',
    marginBottom: 12,
  },
  amzznkWrriorsppeechFluxResultShareBtn: {
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechFluxResultShareText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechFluxResultSecondaryBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechFluxResultSecondaryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
