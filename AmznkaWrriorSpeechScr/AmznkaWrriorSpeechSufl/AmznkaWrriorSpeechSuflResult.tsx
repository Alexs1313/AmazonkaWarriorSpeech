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
  AmznkaWrriorSpeechSuflNavigation,
  AmznkaWrriorSpeechSuflResultRoute,
} from './AmznkaWrriorSpeechSuflTypes';
import {
  amznkaWrriorSpeechStoreGetUnlockedSuflTextsForCategory,
} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreData';
import {amznkaWrriorSpeechStoreLoadUnlockedIds} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreStorage';
import {
  amznkaWrriorSpeechSuflGetText,
  type AmznkaWrriorSpeechSuflText,
} from './AmznkaWrriorSpeechSuflData';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';

type AmznkaWrriorSpeechSuflResultProps = {
  amznkaWrriorSpeechSuflNavigation: AmznkaWrriorSpeechSuflNavigation;
  amznkaWrriorSpeechSuflRoute: AmznkaWrriorSpeechSuflResultRoute;
};

const amznkaWrriorSpeechSuflBtnGradient = [
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

const AmznkaWrriorSpeechSuflResult = ({
  amznkaWrriorSpeechSuflNavigation,
  amznkaWrriorSpeechSuflRoute,
}: AmznkaWrriorSpeechSuflResultProps) => {
  const amznkaWrriorSpeechSuflInsets = useSafeAreaInsets();
  const {amznkaWrriorSpeechSuflCategoryId, amznkaWrriorSpeechSuflTextId} =
    amznkaWrriorSpeechSuflRoute.params;

  const [amznkaWrriorSpeechSuflStoreTexts, setAmznkaWrriorSpeechSuflStoreTexts] =
    useState<AmznkaWrriorSpeechSuflText[]>([]);

  useFocusEffect(
    useCallback(() => {
      amznkaWrriorSpeechStoreLoadUnlockedIds().then(
        amznkaWrriorSpeechSuflUnlockedIds =>
          setAmznkaWrriorSpeechSuflStoreTexts(
            amznkaWrriorSpeechStoreGetUnlockedSuflTextsForCategory(
              amznkaWrriorSpeechSuflUnlockedIds,
              amznkaWrriorSpeechSuflCategoryId,
            ),
          ),
      );
    }, [amznkaWrriorSpeechSuflCategoryId]),
  );

  const amznkaWrriorSpeechSuflText = amznkaWrriorSpeechSuflGetText(
    amznkaWrriorSpeechSuflCategoryId,
    amznkaWrriorSpeechSuflTextId,
    amznkaWrriorSpeechSuflStoreTexts,
  );

  if (!amznkaWrriorSpeechSuflText) {
    return null;
  }

  const amznkaWrriorSpeechSuflShare = async () => {
    await Share.share({
      message: `I completed "${amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextTitle}" on Amazonka Warrior Speech!`,
    });
  };

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechSuflResultScroll,
          {paddingTop: amznkaWrriorSpeechSuflInsets.top + 16},
        ]}>
        <LinearGradient
          colors={['rgba(255, 153, 0, 0.2)', 'rgba(255, 107, 53, 0.1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.amznkaWrriorSpeechSuflResultPortraitWrap}>
          <Image source={require('../../assets/i/amznkawrres.png')} />
        </LinearGradient>

        <Text style={styles.amznkaWrriorSpeechSuflResultTitle}>
          Excellent, Warrior!
        </Text>
        <Text style={styles.amznkaWrriorSpeechSuflResultMessage}>
          You completed "
          {amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextTitle}
          ". Your voice grows stronger with every session.
        </Text>

        <Pressable
          onPress={amznkaWrriorSpeechSuflShare}
          style={({pressed}) => [
            styles.amznkaWrriorSpeechSuflResultShareWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amznkaWrriorSpeechSuflBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amznkaWrriorSpeechSuflResultShareBtn}>
            <Text style={styles.amznkaWrriorSpeechSuflResultShareText}>
              Share
            </Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() =>
            amznkaWrriorSpeechSuflNavigation.reset({
              index: 1,
              routes: [
                {name: 'AmznkaWrriorSpeechSuflHome'},
                {
                  name: 'AmznkaWrriorSpeechSuflDiff',
                  params: {amznkaWrriorSpeechSuflCategoryId},
                },
              ],
            })
          }
          style={({pressed}) => [
            styles.amznkaWrriorSpeechSuflResultSecondaryBtn,
            pressed && {opacity: 0.88},
          ]}>
          <Text style={styles.amznkaWrriorSpeechSuflResultSecondaryText}>
            Choose Another Text
          </Text>
        </Pressable>
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechSuflResult;

const styles = StyleSheet.create({
  amznkaWrriorSpeechSuflResultRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amznkaWrriorSpeechSuflResultScroll: {
    alignItems: 'center',
    paddingHorizontal: 23,
    paddingBottom: 24,
    flex: 1,
    justifyContent: 'center',
  },
  amznkaWrriorSpeechSuflResultPortraitWrap: {
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
  amznkaWrriorSpeechSuflResultPortrait: {
    width: 220,
    height: 380,
    marginTop: 4,
  },
  amznkaWrriorSpeechSuflResultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  amznkaWrriorSpeechSuflResultMessage: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B8E8F',
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 8,
  },
  amznkaWrriorSpeechSuflResultShareWrap: {
    width: '100%',
    marginBottom: 12,
  },
  amznkaWrriorSpeechSuflResultShareBtn: {
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechSuflResultShareText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechSuflResultSecondaryBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechSuflResultSecondaryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
