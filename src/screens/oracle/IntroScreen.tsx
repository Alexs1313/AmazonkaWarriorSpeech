import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SceneShell from '../../components/Shell';
import {
  oracleTrialsPerSession,
  oracleTokensPerCorrect,
  oracleTimerSeconds,
} from '../../data/oracle';
import type {OracleNavigation} from '../../types/oracle';

const oracleBtnGradient = [
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

const oracleOracleCardBorderGradient = [
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

const oracleOracleCardBorderLocations = [
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

type OracleIntroScreenProps = {
  oracleNavigation: OracleNavigation;
};

const oracleRules = [
  {
    oracleEmoji: '⏱️',
    oracleTitle: `${oracleTimerSeconds} seconds`,
    oracleDesc: 'Per trial — the Oracle waits for no one',
  },
  {
    oracleEmoji: '✦',
    oracleTitle: `${oracleTokensPerCorrect} tokens`,
    oracleDesc: 'Gained for each correct answer',
  },
  {
    oracleEmoji: '🏆',
    oracleTitle: `Up to ${
      oracleTrialsPerSession *
      oracleTokensPerCorrect
    } tokens`,
    oracleDesc: 'Most tokens for a perfect trial',
  },
  {
    oracleEmoji: '🔢',
    oracleTitle: '4 choices',
    oracleDesc: 'Only one answer is correct',
  },
];

const OracleIntroScreen = ({
  oracleNavigation,
}: OracleIntroScreenProps) => {
  const oracleInsets = useSafeAreaInsets();

  return (
    <SceneShell>
      <View
        style={[
          styles.oracleIntroContent,
          {paddingTop: oracleInsets.top + 16},
        ]}>
        <Text style={styles.oracleIntroKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.oracleIntroTitle}>
          Voice Oracle
        </Text>
        <Text style={styles.oracleIntroSubtitle}>
          Prove your wisdom to the Oracle of the Amazonka
        </Text>

        <View style={styles.oracleOracleCardOuter}>
          <LinearGradient
            colors={oracleOracleCardBorderGradient}
            locations={oracleOracleCardBorderLocations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.oracleOracleCardBorder}>
            <View style={styles.oracleOracleCard}>
              <View style={styles.oracleOracleIconWrap}>
                <Text style={styles.oracleOracleIcon}>🏺</Text>
              </View>
              <Text style={styles.oracleOracleLabel}>
                The Amazonka Oracle
              </Text>
              <Text style={styles.oracleOracleQuote}>
                Three trials stand between you and honor.{'\n'}
                Answer with wisdom — and the tokens of the{'\n'}
                Amazonka shall be yours.
              </Text>
            </View>
          </LinearGradient>
        </View>

        <Text style={styles.oracleRulesTitle}>
          Rules of the Trial
        </Text>

        {oracleRules.map(oracleRule => (
          <View
            key={oracleRule.oracleTitle}
            style={styles.oracleRuleCard}>
            <Text style={styles.oracleRuleEmoji}>
              {oracleRule.oracleEmoji}
            </Text>
            <View style={styles.oracleRuleBody}>
              <Text style={styles.oracleRuleTitle}>
                {oracleRule.oracleTitle}
              </Text>
              <Text style={styles.oracleRuleDesc}>
                {oracleRule.oracleDesc}
              </Text>
            </View>
          </View>
        ))}

        <Pressable
          onPress={() =>
            oracleNavigation.navigate(
              'OracleTrial',
            )
          }
          style={({pressed}) => [
            styles.oracleEnterWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={oracleBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.oracleEnterBtn}>
            <Text style={styles.oracleEnterText}>
              Enter the Oracle
            </Text>
            <Text style={styles.oracleEnterIcon}>✦</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </SceneShell>
  );
};

export default OracleIntroScreen;

const styles = StyleSheet.create({
  oracleIntroContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  oracleIntroKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  oracleIntroTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  oracleIntroSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  oracleOracleCardOuter: {
    marginBottom: 20,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 6,
  },
  oracleOracleCardBorder: {
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.25)',
    overflow: 'hidden',
  },
  oracleOracleCard: {
    padding: 20,
    alignItems: 'center',
  },
  oracleOracleIconWrap: {
    backgroundColor: 'rgba(255, 153, 0, 0.13)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.45)',
  },
  oracleOracleIcon: {
    fontSize: 28,
  },
  oracleOracleLabel: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 10,
    letterSpacing: 1.5,
    color: '#FF9900',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  oracleOracleQuote: {
    fontSize: 13,
    lineHeight: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  oracleRulesTitle: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  oracleRuleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 14,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.12)',
    padding: 14,
    marginBottom: 8,
  },
  oracleRuleEmoji: {
    fontSize: 22,
    marginRight: 14,
    width: 28,
    textAlign: 'center',
  },
  oracleRuleBody: {
    flex: 1,
  },
  oracleRuleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  oracleRuleDesc: {
    fontSize: 11,
    color: '#9B8E8F',
  },
  oracleEnterWrap: {
    marginTop: 16,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  oracleEnterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 52,
    gap: 10,
  },
  oracleEnterText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  oracleEnterIcon: {
    fontSize: 16,
  },
});
