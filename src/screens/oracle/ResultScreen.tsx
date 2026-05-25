import React, {useEffect, useRef} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  OracleNavigation,
  OracleOutcomeRoute,
} from '../../types/oracle';
import SceneShell from '../../components/Shell';
import {vaultAddTokens} from '../../data/vaultStorage';

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

type OracleOutcomeScreenProps = {
  oracleNavigation: OracleNavigation;
  oracleRoute: OracleOutcomeRoute;
};

const OracleOutcomeScreen = ({
  oracleNavigation,
  oracleRoute,
}: OracleOutcomeScreenProps) => {
  const oracleInsets = useSafeAreaInsets();
  const {
    oracleCorrectCount,
    oracleTotalCount,
    oracleTokensGained,
  } = oracleRoute.params;

  const oracleTokensCredited = useRef(false);

  useEffect(() => {
    if (
      oracleTokensCredited.current ||
      oracleTokensGained <= 0
    ) {
      return;
    }
    oracleTokensCredited.current = true;
    vaultAddTokens(oracleTokensGained);
  }, [oracleTokensGained]);

  const oracleShare = async () => {
    await Share.share({
      message: `I answered ${oracleCorrectCount} out of ${oracleTotalCount} trials correctly and gained ${oracleTokensGained} tokens!`,
    });
  };

  return (
    <SceneShell>
      <View
        style={[
          styles.oracleResultRoot,
          {paddingTop: oracleInsets.top + 24},
        ]}>
        <LinearGradient
          colors={oracleBtnGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.oracleResultIconWrap}>
          <Text style={styles.oracleResultIcon}>✦</Text>
        </LinearGradient>

        <Text style={styles.oracleResultTitle}>
          Well Done, Warrior!
        </Text>
        <Text style={styles.oracleResultSubtitle}>
          {oracleCorrectCount} out of{' '}
          {oracleTotalCount} trials answered correctly
        </Text>

        <View style={styles.oracleResultCard}>
          <Text style={styles.oracleResultCardLabel}>
            Tokens Collected
          </Text>
          <View style={styles.oracleResultTokensRow}>
            <Image source={require('../../../elements/images/crest-mark.png')} />
            <Text style={styles.oracleResultTokensValue}>
              {oracleTokensGained}
            </Text>
            <Image source={require('../../../elements/images/crest-mark.png')} />
          </View>
          <Text style={styles.oracleResultCardHint}>
            Use them in the Text Vault!
          </Text>
        </View>

        <Pressable
          onPress={oracleShare}
          style={({pressed}) => [
            styles.oracleShareWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={oracleBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.oracleShareBtn}>
            <Text style={styles.oracleShareText}>Share</Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() =>
            oracleNavigation.reset({
              index: 0,
              routes: [{name: 'OracleIntro'}],
            })
          }
          style={({pressed}) => [
            styles.oracleBackBtn,
            pressed && {opacity: 0.88},
          ]}>
          <Text style={styles.oracleBackText}>
            Back to Intro
          </Text>
        </Pressable>
      </View>
    </SceneShell>
  );
};

export default OracleOutcomeScreen;

const styles = StyleSheet.create({
  oracleResultRoot: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  oracleResultIconWrap: {
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
  oracleResultIcon: {
    fontSize: 40,
  },
  oracleResultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  oracleResultSubtitle: {
    fontSize: 14,
    color: '#9B8E8F',
    textAlign: 'center',
    marginBottom: 28,
  },
  oracleResultCard: {
    width: '100%',
    backgroundColor: '#FF990026',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: '#FF9900',
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  oracleResultCardLabel: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 12,
  },
  oracleResultTokensRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  oracleResultTokenEmoji: {
    fontSize: 20,
  },
  oracleResultTokensValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#FF9900',
  },
  oracleResultCardHint: {
    fontSize: 11,
    color: '#9B8E8F',
  },
  oracleShareWrap: {
    width: '100%',
    marginBottom: 12,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  oracleShareBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oracleShareText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  oracleBackBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    backgroundColor: '#2D2829',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oracleBackText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
