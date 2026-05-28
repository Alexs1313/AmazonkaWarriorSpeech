import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';
import {
  amzznkWrriorsppeechOracleTrialsPerSession,
  amzznkWrriorsppeechOracleTokensPerCorrect,
  amzznkWrriorsppeechOracleTimerSeconds,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechoracleCatalog';
import type {AmzznkWrriorsppeechOracleNavigation} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechoracleTypes';

const amzznkWrriorsppeechOracleBtnGradient = [
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

export const amzznkWrriorsppeechOracleOracleCardBorderGradient = [
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

const amzznkWrriorsppeechOracleOracleCardBorderLocations = [
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

type AmzznkWrriorsppeechOracleIntroScreenProps = {
  amzznkWrriorsppeechOracleNavigation: AmzznkWrriorsppeechOracleNavigation;
};

const amzznkWrriorsppeechOracleRules = [
  {
    amzznkWrriorsppeechOracleEmoji: '⏱️',
    amzznkWrriorsppeechOracleTitle: `${amzznkWrriorsppeechOracleTimerSeconds} seconds`,
    amzznkWrriorsppeechOracleDesc: 'Per trial — the Oracle waits for no one',
  },
  {
    amzznkWrriorsppeechOracleEmoji: '✦',
    amzznkWrriorsppeechOracleTitle: `${amzznkWrriorsppeechOracleTokensPerCorrect} swords`,
    amzznkWrriorsppeechOracleDesc: 'Gained for each correct answer',
  },
  {
    amzznkWrriorsppeechOracleEmoji: '🏆',
    amzznkWrriorsppeechOracleTitle: `Up to ${
      amzznkWrriorsppeechOracleTrialsPerSession *
      amzznkWrriorsppeechOracleTokensPerCorrect
    } swords`,
    amzznkWrriorsppeechOracleDesc: 'Most swords for a perfect trial',
  },
  {
    amzznkWrriorsppeechOracleEmoji: '🔢',
    amzznkWrriorsppeechOracleTitle: '4 choices',
    amzznkWrriorsppeechOracleDesc: 'Only one answer is correct',
  },
];

export function AmzznkWrriorsppeechOracleIntroScreen({
  amzznkWrriorsppeechOracleNavigation,
}: AmzznkWrriorsppeechOracleIntroScreenProps) {
  const amzznkWrriorsppeechOracleInsets = useSafeAreaInsets();

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechOracleIntroContent,
          {paddingTop: amzznkWrriorsppeechOracleInsets.top + 16},
        ]}>
        <Text style={styles.amzznkWrriorsppeechOracleIntroKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.amzznkWrriorsppeechOracleIntroTitle}>
          Voice Oracle
        </Text>
        <Text style={styles.amzznkWrriorsppeechOracleIntroSubtitle}>
          Prove your wisdom to the Oracle of the Amazonka
        </Text>

        <View style={styles.amzznkWrriorsppeechOracleOracleCardOuter}>
          <LinearGradient
            colors={amzznkWrriorsppeechOracleOracleCardBorderGradient}
            locations={amzznkWrriorsppeechOracleOracleCardBorderLocations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.amzznkWrriorsppeechOracleOracleCardBorder}>
            <View style={styles.amzznkWrriorsppeechOracleOracleCard}>
              <View style={styles.amzznkWrriorsppeechOracleOracleIconWrap}>
                <Text style={styles.amzznkWrriorsppeechOracleOracleIcon}>
                  🏺
                </Text>
              </View>
              <Text style={styles.amzznkWrriorsppeechOracleOracleLabel}>
                The Amazonka Oracle
              </Text>
              <Text style={styles.amzznkWrriorsppeechOracleOracleQuote}>
                Three trials stand between you and honor.{'\n'}
                Answer with wisdom — and the swords of the{'\n'}
                Amazonka shall be yours.
              </Text>
            </View>
          </LinearGradient>
        </View>

        <Text style={styles.amzznkWrriorsppeechOracleRulesTitle}>
          Rules of the Trial
        </Text>

        {amzznkWrriorsppeechOracleRules.map(amzznkWrriorsppeechOracleRule => (
          <View
            key={amzznkWrriorsppeechOracleRule.amzznkWrriorsppeechOracleTitle}
            style={styles.amzznkWrriorsppeechOracleRuleCard}>
            <Text style={styles.amzznkWrriorsppeechOracleRuleEmoji}>
              {amzznkWrriorsppeechOracleRule.amzznkWrriorsppeechOracleEmoji}
            </Text>
            <View style={styles.amzznkWrriorsppeechOracleRuleBody}>
              <Text style={styles.amzznkWrriorsppeechOracleRuleTitle}>
                {amzznkWrriorsppeechOracleRule.amzznkWrriorsppeechOracleTitle}
              </Text>
              <Text style={styles.amzznkWrriorsppeechOracleRuleDesc}>
                {amzznkWrriorsppeechOracleRule.amzznkWrriorsppeechOracleDesc}
              </Text>
            </View>
          </View>
        ))}

        <Pressable
          onPress={() =>
            amzznkWrriorsppeechOracleNavigation.navigate('OracleTrial')
          }
          style={({pressed}) => [
            styles.amzznkWrriorsppeechOracleEnterWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amzznkWrriorsppeechOracleBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amzznkWrriorsppeechOracleEnterBtn}>
            <Text style={styles.amzznkWrriorsppeechOracleEnterText}>
              Enter the Oracle
            </Text>
            <Text style={styles.amzznkWrriorsppeechOracleEnterIcon}>✦</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechOracleIntroContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amzznkWrriorsppeechOracleIntroKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amzznkWrriorsppeechOracleIntroTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechOracleIntroSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amzznkWrriorsppeechOracleOracleCardOuter: {
    marginBottom: 20,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 6,
  },
  amzznkWrriorsppeechOracleOracleCardBorder: {
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.25)',
    overflow: 'hidden',
  },
  amzznkWrriorsppeechOracleOracleCard: {
    padding: 20,
    alignItems: 'center',
  },
  amzznkWrriorsppeechOracleOracleIconWrap: {
    backgroundColor: 'rgba(255, 153, 0, 0.13)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.45)',
  },
  amzznkWrriorsppeechOracleOracleIcon: {
    fontSize: 28,
  },
  amzznkWrriorsppeechOracleOracleLabel: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 10,
    letterSpacing: 1.5,
    color: '#FF9900',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amzznkWrriorsppeechOracleOracleQuote: {
    fontSize: 13,
    lineHeight: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  amzznkWrriorsppeechOracleRulesTitle: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amzznkWrriorsppeechOracleRuleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 14,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.12)',
    padding: 14,
    marginBottom: 8,
  },
  amzznkWrriorsppeechOracleRuleEmoji: {
    fontSize: 22,
    marginRight: 14,
    width: 28,
    textAlign: 'center',
  },
  amzznkWrriorsppeechOracleRuleBody: {
    flex: 1,
  },
  amzznkWrriorsppeechOracleRuleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  amzznkWrriorsppeechOracleRuleDesc: {
    fontSize: 11,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechOracleEnterWrap: {
    marginTop: 16,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amzznkWrriorsppeechOracleEnterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 52,
    gap: 10,
  },
  amzznkWrriorsppeechOracleEnterText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechOracleEnterIcon: {
    fontSize: 16,
  },
});
