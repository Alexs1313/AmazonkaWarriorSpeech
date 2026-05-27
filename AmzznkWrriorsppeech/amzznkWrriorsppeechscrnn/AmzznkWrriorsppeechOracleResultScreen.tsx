import React, {useEffect, useRef} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  AmzznkWrriorsppeechOracleNavigation,
  AmzznkWrriorsppeechOracleOutcomeRoute,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechoracleTypes';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';
import {amzznkWrriorsppeechVaultAddTokens} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultStorage';

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

type AmzznkWrriorsppeechOracleOutcomeScreenProps = {
  amzznkWrriorsppeechOracleNavigation: AmzznkWrriorsppeechOracleNavigation;
  amzznkWrriorsppeechOracleRoute: AmzznkWrriorsppeechOracleOutcomeRoute;
};

export function AmzznkWrriorsppeechOracleResultScreen({
  amzznkWrriorsppeechOracleNavigation,
  amzznkWrriorsppeechOracleRoute,
}: AmzznkWrriorsppeechOracleOutcomeScreenProps) {
  const amzznkWrriorsppeechOracleInsets = useSafeAreaInsets();
  const {
    oracleCorrectCount,
    amzznkWrriorsppeechOracleTotalCount,
    amzznkWrriorsppeechOracleTokensGained,
  } = amzznkWrriorsppeechOracleRoute.params;

  const amzznkWrriorsppeechOracleTokensCredited = useRef(false);

  useEffect(() => {
    if (
      amzznkWrriorsppeechOracleTokensCredited.current ||
      amzznkWrriorsppeechOracleTokensGained <= 0
    ) {
      return;
    }
    amzznkWrriorsppeechOracleTokensCredited.current = true;
    amzznkWrriorsppeechVaultAddTokens(amzznkWrriorsppeechOracleTokensGained);
  }, [amzznkWrriorsppeechOracleTokensGained]);

  const amzznkWrriorsppeechOracleShare = async () => {
    await Share.share({
      message: `I answered ${oracleCorrectCount} out of ${amzznkWrriorsppeechOracleTotalCount} trials correctly and gained ${amzznkWrriorsppeechOracleTokensGained} swords!`,
    });
  };

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechOracleResultRoot,
          {paddingTop: amzznkWrriorsppeechOracleInsets.top + 24},
        ]}>
        <LinearGradient
          colors={amzznkWrriorsppeechOracleBtnGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.amzznkWrriorsppeechOracleResultIconWrap}>
          <Text style={styles.amzznkWrriorsppeechOracleResultIcon}>✦</Text>
        </LinearGradient>

        <Text style={styles.amzznkWrriorsppeechOracleResultTitle}>
          Well Done, Warrior!
        </Text>
        <Text style={styles.amzznkWrriorsppeechOracleResultSubtitle}>
          {oracleCorrectCount} out of{' '}
          {amzznkWrriorsppeechOracleTotalCount} trials answered correctly
        </Text>

        <View style={styles.amzznkWrriorsppeechOracleResultCard}>
          <Text style={styles.amzznkWrriorsppeechOracleResultCardLabel}>
            Swords Collected
          </Text>
          <View style={styles.amzznkWrriorsppeechOracleResultTokensRow}>
            <Image source={require('../../assets/images/amzznkWrriorsppeechCrestMark.png')} />
            <Text style={styles.amzznkWrriorsppeechOracleResultTokensValue}>
              {amzznkWrriorsppeechOracleTokensGained}
            </Text>
            <Image source={require('../../assets/images/amzznkWrriorsppeechCrestMark.png')} />
          </View>
          <Text style={styles.amzznkWrriorsppeechOracleResultCardHint}>
            Use them in the Text Vault!
          </Text>
        </View>

        <Pressable
          onPress={amzznkWrriorsppeechOracleShare}
          style={({pressed}) => [
            styles.amzznkWrriorsppeechOracleShareWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amzznkWrriorsppeechOracleBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amzznkWrriorsppeechOracleShareBtn}>
            <Text style={styles.amzznkWrriorsppeechOracleShareText}>Share</Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() =>
            amzznkWrriorsppeechOracleNavigation.reset({
              index: 0,
              routes: [{name: 'OracleIntro'}],
            })
          }
          style={({pressed}) => [
            styles.amzznkWrriorsppeechOracleBackBtn,
            pressed && {opacity: 0.88},
          ]}>
          <Text style={styles.amzznkWrriorsppeechOracleBackText}>
            Back to Intro
          </Text>
        </Pressable>
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechOracleResultRoot: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  amzznkWrriorsppeechOracleResultIconWrap: {
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
  amzznkWrriorsppeechOracleResultIcon: {
    fontSize: 40,
  },
  amzznkWrriorsppeechOracleResultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  amzznkWrriorsppeechOracleResultSubtitle: {
    fontSize: 14,
    color: '#9B8E8F',
    textAlign: 'center',
    marginBottom: 28,
  },
  amzznkWrriorsppeechOracleResultCard: {
    width: '100%',
    backgroundColor: '#FF990026',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: '#FF9900',
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  amzznkWrriorsppeechOracleResultCardLabel: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 12,
  },
  amzznkWrriorsppeechOracleResultTokensRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  amzznkWrriorsppeechOracleResultTokenEmoji: {
    fontSize: 20,
  },
  amzznkWrriorsppeechOracleResultTokensValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#FF9900',
  },
  amzznkWrriorsppeechOracleResultCardHint: {
    fontSize: 11,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechOracleShareWrap: {
    width: '100%',
    marginBottom: 12,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amzznkWrriorsppeechOracleShareBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechOracleShareText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechOracleBackBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    backgroundColor: '#2D2829',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechOracleBackText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
