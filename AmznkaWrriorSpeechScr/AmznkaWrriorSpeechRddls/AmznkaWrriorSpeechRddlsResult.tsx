import React, {useEffect, useRef} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  AmznkaWrriorSpeechRddlsNavigation,
  AmznkaWrriorSpeechRddlsResultRoute,
} from './AmznkaWrriorSpeechRddlsTypes';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';
import {amznkaWrriorSpeechStoreAddSwords} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreStorage';

const amznkaWrriorSpeechRddlsBtnGradient = [
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

type AmznkaWrriorSpeechRddlsResultProps = {
  amznkaWrriorSpeechRddlsNavigation: AmznkaWrriorSpeechRddlsNavigation;
  amznkaWrriorSpeechRddlsRoute: AmznkaWrriorSpeechRddlsResultRoute;
};

const AmznkaWrriorSpeechRddlsResult = ({
  amznkaWrriorSpeechRddlsNavigation,
  amznkaWrriorSpeechRddlsRoute,
}: AmznkaWrriorSpeechRddlsResultProps) => {
  const amznkaWrriorSpeechRddlsInsets = useSafeAreaInsets();
  const {
    amznkaWrriorSpeechRddlsCorrectCount,
    amznkaWrriorSpeechRddlsTotalCount,
    amznkaWrriorSpeechRddlsSwordsEarned,
  } = amznkaWrriorSpeechRddlsRoute.params;

  const amznkaWrriorSpeechRddlsSwordsCredited = useRef(false);

  useEffect(() => {
    if (
      amznkaWrriorSpeechRddlsSwordsCredited.current ||
      amznkaWrriorSpeechRddlsSwordsEarned <= 0
    ) {
      return;
    }
    amznkaWrriorSpeechRddlsSwordsCredited.current = true;
    amznkaWrriorSpeechStoreAddSwords(amznkaWrriorSpeechRddlsSwordsEarned);
  }, [amznkaWrriorSpeechRddlsSwordsEarned]);

  const amznkaWrriorSpeechRddlsShare = async () => {
    await Share.share({
      message: `I answered ${amznkaWrriorSpeechRddlsCorrectCount} out of ${amznkaWrriorSpeechRddlsTotalCount} riddles correctly and earned ${amznkaWrriorSpeechRddlsSwordsEarned} swords!`,
    });
  };

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechRddlsResultRoot,
          {paddingTop: amznkaWrriorSpeechRddlsInsets.top + 24},
        ]}>
        <LinearGradient
          colors={amznkaWrriorSpeechRddlsBtnGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.amznkaWrriorSpeechRddlsResultIconWrap}>
          <Text style={styles.amznkaWrriorSpeechRddlsResultIcon}>⚔️</Text>
        </LinearGradient>

        <Text style={styles.amznkaWrriorSpeechRddlsResultTitle}>
          Well Done, Warrior!
        </Text>
        <Text style={styles.amznkaWrriorSpeechRddlsResultSubtitle}>
          {amznkaWrriorSpeechRddlsCorrectCount} out of{' '}
          {amznkaWrriorSpeechRddlsTotalCount} riddles answered correctly
        </Text>

        <View style={styles.amznkaWrriorSpeechRddlsResultCard}>
          <Text style={styles.amznkaWrriorSpeechRddlsResultCardLabel}>
            Swords Earned
          </Text>
          <View style={styles.amznkaWrriorSpeechRddlsResultSwordsRow}>
            <Image source={require('../../assets/i/amznkawrtres.png')} />
            <Text style={styles.amznkaWrriorSpeechRddlsResultSwordsValue}>
              {amznkaWrriorSpeechRddlsSwordsEarned}
            </Text>
            <Image source={require('../../assets/i/amznkawrtres.png')} />
          </View>
          <Text style={styles.amznkaWrriorSpeechRddlsResultCardHint}>
            Spend them in the Text Store!
          </Text>
        </View>

        <Pressable
          onPress={amznkaWrriorSpeechRddlsShare}
          style={({pressed}) => [
            styles.amznkaWrriorSpeechRddlsShareWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amznkaWrriorSpeechRddlsBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amznkaWrriorSpeechRddlsShareBtn}>
            <Text style={styles.amznkaWrriorSpeechRddlsShareText}>Share</Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() =>
            amznkaWrriorSpeechRddlsNavigation.reset({
              index: 0,
              routes: [{name: 'AmznkaWrriorSpeechRddlsIntro'}],
            })
          }
          style={({pressed}) => [
            styles.amznkaWrriorSpeechRddlsBackBtn,
            pressed && {opacity: 0.88},
          ]}>
          <Text style={styles.amznkaWrriorSpeechRddlsBackText}>
            Back to Intro
          </Text>
        </Pressable>
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechRddlsResult;

const styles = StyleSheet.create({
  amznkaWrriorSpeechRddlsResultRoot: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  amznkaWrriorSpeechRddlsResultIconWrap: {
    width: 111,
    height: 111,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 12,
  },
  amznkaWrriorSpeechRddlsResultIcon: {
    fontSize: 40,
  },
  amznkaWrriorSpeechRddlsResultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  amznkaWrriorSpeechRddlsResultSubtitle: {
    fontSize: 14,
    color: '#9B8E8F',
    textAlign: 'center',
    marginBottom: 28,
  },
  amznkaWrriorSpeechRddlsResultCard: {
    width: '100%',
    backgroundColor: '#FF990026',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: '#FF9900',
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  amznkaWrriorSpeechRddlsResultCardLabel: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 12,
  },
  amznkaWrriorSpeechRddlsResultSwordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  amznkaWrriorSpeechRddlsResultSwordEmoji: {
    fontSize: 20,
  },
  amznkaWrriorSpeechRddlsResultSwordsValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#FF9900',
  },
  amznkaWrriorSpeechRddlsResultCardHint: {
    fontSize: 11,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechRddlsShareWrap: {
    width: '100%',
    marginBottom: 12,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amznkaWrriorSpeechRddlsShareBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechRddlsShareText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechRddlsBackBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    backgroundColor: '#2D2829',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechRddlsBackText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
