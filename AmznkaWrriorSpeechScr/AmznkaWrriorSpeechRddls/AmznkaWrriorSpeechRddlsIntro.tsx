import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';
import {
  amznkaWrriorSpeechRddlsPerSession,
  amznkaWrriorSpeechRddlsSwordsPerCorrect,
  amznkaWrriorSpeechRddlsTimerSeconds,
} from './AmznkaWrriorSpeechRddlsData';
import type {AmznkaWrriorSpeechRddlsNavigation} from './AmznkaWrriorSpeechRddlsTypes';

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

const amznkaWrriorSpeechRddlsOracleCardBorderGradient = [
  '#391B06',
  '#381C09',
  '#361C0C',
  '#341D0E',
  '#321D11',
  '#301D13',
  '#2F1E15',
  '#2D1E17',
  '#2B1E19',
  '#291F1B',
  '#271F1D',
  '#251F1E',
  '#231F20',
];

const amznkaWrriorSpeechRddlsOracleCardBorderLocations = [
  0,
  1 / 12,
  2 / 12,
  3 / 12,
  4 / 12,
  5 / 12,
  6 / 12,
  7 / 12,
  8 / 12,
  9 / 12,
  10 / 12,
  11 / 12,
  1,
];

type AmznkaWrriorSpeechRddlsIntroProps = {
  amznkaWrriorSpeechRddlsNavigation: AmznkaWrriorSpeechRddlsNavigation;
};

const amznkaWrriorSpeechRddlsRules = [
  {
    amznkaWrriorSpeechRddlsEmoji: '⏱️',
    amznkaWrriorSpeechRddlsTitle: `${amznkaWrriorSpeechRddlsTimerSeconds} seconds`,
    amznkaWrriorSpeechRddlsDesc: 'Per riddle — the Oracle waits for no one',
  },
  {
    amznkaWrriorSpeechRddlsEmoji: '⚔️',
    amznkaWrriorSpeechRddlsTitle: `${amznkaWrriorSpeechRddlsSwordsPerCorrect} swords`,
    amznkaWrriorSpeechRddlsDesc: 'Earned for each correct answer',
  },
  {
    amznkaWrriorSpeechRddlsEmoji: '🏆',
    amznkaWrriorSpeechRddlsTitle: `Up to ${
      amznkaWrriorSpeechRddlsPerSession *
      amznkaWrriorSpeechRddlsSwordsPerCorrect
    } swords`,
    amznkaWrriorSpeechRddlsDesc: 'Maximum reward for a perfect trial',
  },
  {
    amznkaWrriorSpeechRddlsEmoji: '🔢',
    amznkaWrriorSpeechRddlsTitle: '4 choices',
    amznkaWrriorSpeechRddlsDesc: 'Only one answer is correct',
  },
];

const AmznkaWrriorSpeechRddlsIntro = ({
  amznkaWrriorSpeechRddlsNavigation,
}: AmznkaWrriorSpeechRddlsIntroProps) => {
  const amznkaWrriorSpeechRddlsInsets = useSafeAreaInsets();

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechRddlsIntroContent,
          {paddingTop: amznkaWrriorSpeechRddlsInsets.top + 16},
        ]}>
        <Text style={styles.amznkaWrriorSpeechRddlsIntroKicker}>
          Amazon Voice
        </Text>
        <Text style={styles.amznkaWrriorSpeechRddlsIntroTitle}>
          Amazon Riddles
        </Text>
        <Text style={styles.amznkaWrriorSpeechRddlsIntroSubtitle}>
          Prove your wisdom to the Oracle of the Amazon
        </Text>

        <View style={styles.amznkaWrriorSpeechRddlsOracleCardOuter}>
          <LinearGradient
            colors={amznkaWrriorSpeechRddlsOracleCardBorderGradient}
            locations={amznkaWrriorSpeechRddlsOracleCardBorderLocations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.amznkaWrriorSpeechRddlsOracleCardBorder}>
            <View style={styles.amznkaWrriorSpeechRddlsOracleCard}>
              <View style={styles.amznkaWrriorSpeechRddlsOracleIconWrap}>
                <Text style={styles.amznkaWrriorSpeechRddlsOracleIcon}>🏺</Text>
              </View>
              <Text style={styles.amznkaWrriorSpeechRddlsOracleLabel}>
                The Amazon Oracle
              </Text>
              <Text style={styles.amznkaWrriorSpeechRddlsOracleQuote}>
                Three riddles stand between you and glory.{'\n'}
                Answer with wisdom — and the swords of the{'\n'}
                Amazon shall be yours.
              </Text>
            </View>
          </LinearGradient>
        </View>

        <Text style={styles.amznkaWrriorSpeechRddlsRulesTitle}>
          Rules of the Trial
        </Text>

        {amznkaWrriorSpeechRddlsRules.map(amznkaWrriorSpeechRddlsRule => (
          <View
            key={amznkaWrriorSpeechRddlsRule.amznkaWrriorSpeechRddlsTitle}
            style={styles.amznkaWrriorSpeechRddlsRuleCard}>
            <Text style={styles.amznkaWrriorSpeechRddlsRuleEmoji}>
              {amznkaWrriorSpeechRddlsRule.amznkaWrriorSpeechRddlsEmoji}
            </Text>
            <View style={styles.amznkaWrriorSpeechRddlsRuleBody}>
              <Text style={styles.amznkaWrriorSpeechRddlsRuleTitle}>
                {amznkaWrriorSpeechRddlsRule.amznkaWrriorSpeechRddlsTitle}
              </Text>
              <Text style={styles.amznkaWrriorSpeechRddlsRuleDesc}>
                {amznkaWrriorSpeechRddlsRule.amznkaWrriorSpeechRddlsDesc}
              </Text>
            </View>
          </View>
        ))}

        <Pressable
          onPress={() =>
            amznkaWrriorSpeechRddlsNavigation.navigate(
              'AmznkaWrriorSpeechRddlsPlay',
            )
          }
          style={({pressed}) => [
            styles.amznkaWrriorSpeechRddlsEnterWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amznkaWrriorSpeechRddlsBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amznkaWrriorSpeechRddlsEnterBtn}>
            <Text style={styles.amznkaWrriorSpeechRddlsEnterText}>
              Enter the Oracle
            </Text>
            <Text style={styles.amznkaWrriorSpeechRddlsEnterIcon}>⚔️</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechRddlsIntro;

const styles = StyleSheet.create({
  amznkaWrriorSpeechRddlsIntroContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amznkaWrriorSpeechRddlsIntroKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amznkaWrriorSpeechRddlsIntroTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechRddlsIntroSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amznkaWrriorSpeechRddlsOracleCardOuter: {
    marginBottom: 20,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 6,
  },
  amznkaWrriorSpeechRddlsOracleCardBorder: {
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.25)',
    overflow: 'hidden',
  },
  amznkaWrriorSpeechRddlsOracleCard: {
    padding: 20,
    alignItems: 'center',
  },
  amznkaWrriorSpeechRddlsOracleIconWrap: {
    backgroundColor: 'rgba(255, 153, 0, 0.13)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.45)',
  },
  amznkaWrriorSpeechRddlsOracleIcon: {
    fontSize: 28,
  },
  amznkaWrriorSpeechRddlsOracleLabel: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 10,
    letterSpacing: 1.5,
    color: '#FF9900',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amznkaWrriorSpeechRddlsOracleQuote: {
    fontSize: 13,
    lineHeight: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  amznkaWrriorSpeechRddlsRulesTitle: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amznkaWrriorSpeechRddlsRuleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 14,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.12)',
    padding: 14,
    marginBottom: 8,
  },
  amznkaWrriorSpeechRddlsRuleEmoji: {
    fontSize: 22,
    marginRight: 14,
    width: 28,
    textAlign: 'center',
  },
  amznkaWrriorSpeechRddlsRuleBody: {
    flex: 1,
  },
  amznkaWrriorSpeechRddlsRuleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  amznkaWrriorSpeechRddlsRuleDesc: {
    fontSize: 11,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechRddlsEnterWrap: {
    marginTop: 16,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amznkaWrriorSpeechRddlsEnterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 52,
    gap: 10,
  },
  amznkaWrriorSpeechRddlsEnterText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechRddlsEnterIcon: {
    fontSize: 16,
  },
});
