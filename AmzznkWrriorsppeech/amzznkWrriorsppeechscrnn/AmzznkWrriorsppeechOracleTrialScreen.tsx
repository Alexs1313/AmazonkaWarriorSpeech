import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  amzznkWrriorsppeechOracleGetChoiceLabel,
  amzznkWrriorsppeechOracleTrialsPerSession,
  amzznkWrriorsppeechOraclePickSession,
  amzznkWrriorsppeechOracleTokensPerCorrect,
  amzznkWrriorsppeechOracleTimerSeconds,
  type AmzznkWrriorsppeechOracleChoiceId,
  type AmzznkWrriorsppeechOraclePrompt,
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

type AmzznkWrriorsppeechOracleTrialScreenProps = {
  amzznkWrriorsppeechOracleNavigation: AmzznkWrriorsppeechOracleNavigation;
};

export function AmzznkWrriorsppeechOracleTrialScreen({
  amzznkWrriorsppeechOracleNavigation,
}: AmzznkWrriorsppeechOracleTrialScreenProps) {
  const amzznkWrriorsppeechOracleInsets = useSafeAreaInsets();
  const amzznkWrriorsppeechOracleSession = useMemo(
    () => amzznkWrriorsppeechOraclePickSession(),
    [],
  );

  const [oracleIndex, setOracleIndex] =
    useState(0);
  const [oracleSelected, setOracleSelected] =
    useState<AmzznkWrriorsppeechOracleChoiceId | null>(null);
  const [oracleAnswered, setOracleAnswered] =
    useState(false);
  const [
    oracleCorrectCount,
    setOracleCorrectCount,
  ] = useState(0);
  const [oracleTimeLeft, setOracleTimeLeft] =
    useState(amzznkWrriorsppeechOracleTimerSeconds);

  const amzznkWrriorsppeechOracleCurrent =
    amzznkWrriorsppeechOracleSession[oracleIndex];

  const amzznkWrriorsppeechOracleIsCorrect =
    oracleSelected ===
    amzznkWrriorsppeechOracleCurrent?.amzznkWrriorsppeechOraclePromptCorrectId;

  const amzznkWrriorsppeechOracleIsLast =
    oracleIndex === amzznkWrriorsppeechOracleSession.length - 1;

  const amzznkWrriorsppeechOracleSubmitAnswer = useCallback(
    (
      amzznkWrriorsppeechOracleChoiceId: AmzznkWrriorsppeechOracleChoiceId | null,
      amzznkWrriorsppeechOraclePrompt: AmzznkWrriorsppeechOraclePrompt,
    ) => {
      if (oracleAnswered) {
        return;
      }
      setOracleSelected(amzznkWrriorsppeechOracleChoiceId);
      setOracleAnswered(true);
      if (
        amzznkWrriorsppeechOracleChoiceId ===
        amzznkWrriorsppeechOraclePrompt.amzznkWrriorsppeechOraclePromptCorrectId
      ) {
        setOracleCorrectCount(
          amzznkWrriorsppeechOraclePrev => amzznkWrriorsppeechOraclePrev + 1,
        );
      }
    },
    [oracleAnswered],
  );

  useEffect(() => {
    if (!amzznkWrriorsppeechOracleCurrent || oracleAnswered) {
      return;
    }
    setOracleTimeLeft(amzznkWrriorsppeechOracleTimerSeconds);
    const amzznkWrriorsppeechOracleInterval = setInterval(() => {
      setOracleTimeLeft(amzznkWrriorsppeechOraclePrev => {
        if (amzznkWrriorsppeechOraclePrev <= 1) {
          clearInterval(amzznkWrriorsppeechOracleInterval);
          amzznkWrriorsppeechOracleSubmitAnswer(
            null,
            amzznkWrriorsppeechOracleCurrent,
          );
          return 0;
        }
        return amzznkWrriorsppeechOraclePrev - 1;
      });
    }, 1000);
    return () => clearInterval(amzznkWrriorsppeechOracleInterval);
  }, [
    oracleIndex,
    oracleAnswered,
    amzznkWrriorsppeechOracleCurrent,
    amzznkWrriorsppeechOracleSubmitAnswer,
  ]);

  if (!amzznkWrriorsppeechOracleCurrent) {
    return null;
  }

  const amzznkWrriorsppeechOracleGoNext = () => {
    if (amzznkWrriorsppeechOracleIsLast) {
      const amzznkWrriorsppeechOracleTokens =
        oracleCorrectCount *
        amzznkWrriorsppeechOracleTokensPerCorrect;
      amzznkWrriorsppeechOracleNavigation.replace(
        'OracleOutcome',
        {
          oracleCorrectCount,
          amzznkWrriorsppeechOracleTotalCount:
            amzznkWrriorsppeechOracleSession.length,
          amzznkWrriorsppeechOracleTokensGained: amzznkWrriorsppeechOracleTokens,
        },
      );
      return;
    }
    setOracleIndex(
      amzznkWrriorsppeechOraclePrev => amzznkWrriorsppeechOraclePrev + 1,
    );
    setOracleSelected(null);
    setOracleAnswered(false);
  };

  const amzznkWrriorsppeechOracleGetChoiceStyle = (
    amzznkWrriorsppeechOracleChoiceId: AmzznkWrriorsppeechOracleChoiceId,
  ) => {
    if (!oracleAnswered) {
      return styles.amzznkWrriorsppeechOracleChoice;
    }
    const amzznkWrriorsppeechOracleCorrectId =
      amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptCorrectId;
    if (amzznkWrriorsppeechOracleChoiceId === amzznkWrriorsppeechOracleCorrectId) {
      return [
        styles.amzznkWrriorsppeechOracleChoice,
        styles.amzznkWrriorsppeechOracleChoiceCorrect,
      ];
    }
    if (amzznkWrriorsppeechOracleChoiceId === oracleSelected) {
      return [
        styles.amzznkWrriorsppeechOracleChoice,
        styles.amzznkWrriorsppeechOracleChoiceWrong,
      ];
    }
    return [
      styles.amzznkWrriorsppeechOracleChoice,
      styles.amzznkWrriorsppeechOracleChoiceDim,
    ];
  };

  const amzznkWrriorsppeechOracleGetChoiceTextStyle = (
    amzznkWrriorsppeechOracleChoiceId: AmzznkWrriorsppeechOracleChoiceId,
  ) => {
    if (!oracleAnswered) {
      return styles.amzznkWrriorsppeechOracleChoiceText;
    }
    if (
      amzznkWrriorsppeechOracleChoiceId ===
      amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptCorrectId
    ) {
      return [
        styles.amzznkWrriorsppeechOracleChoiceText,
        styles.amzznkWrriorsppeechOracleChoiceTextCorrect,
      ];
    }
    if (amzznkWrriorsppeechOracleChoiceId === oracleSelected) {
      return [
        styles.amzznkWrriorsppeechOracleChoiceText,
        styles.amzznkWrriorsppeechOracleChoiceTextWrong,
      ];
    }
    return styles.amzznkWrriorsppeechOracleChoiceTextDim;
  };

  return (
    <View style={styles.amzznkWrriorsppeechOracleTrialRoot}>
      <ScrollView
        contentContainerStyle={styles.amzznkWrriorsppeechOracleTrialScroll}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.amzznkWrriorsppeechOracleTrialHeader,
            {paddingTop: amzznkWrriorsppeechOracleInsets.top + 8},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={styles.amzznkWrriorsppeechOracleProgressRow}>
              <View style={styles.amzznkWrriorsppeechOracleProgressSegments}>
                {Array.from({length: amzznkWrriorsppeechOracleTrialsPerSession}).map(
                  (_, amzznkWrriorsppeechOracleSegmentIndex) => (
                    <View
                      key={amzznkWrriorsppeechOracleSegmentIndex}
                      style={[
                        styles.amzznkWrriorsppeechOracleProgressSegment,
                        (amzznkWrriorsppeechOracleSegmentIndex <
                          oracleIndex ||
                          (amzznkWrriorsppeechOracleSegmentIndex ===
                            oracleIndex &&
                            oracleAnswered)) &&
                          styles.amzznkWrriorsppeechOracleProgressSegmentFilled,
                      ]}
                    />
                  ),
                )}
              </View>
              <View style={styles.amzznkWrriorsppeechOracleTimerPill}>
                <Image source={require('../../assets/images/amzznkWrriorsppeechOracleTimer.png')} />
                <Text style={styles.amzznkWrriorsppeechOracleTimerText}>
                  {oracleTimeLeft}s
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.amzznkWrriorsppeechOracleProgressLine} />
        </View>

        <View style={styles.amzznkWrriorsppeechOraclePromptCard}>
          <View style={styles.amzznkWrriorsppeechOraclePromptCardHeader}>
            <Text style={styles.amzznkWrriorsppeechOraclePromptIcon}>🏺</Text>
            <Text style={styles.amzznkWrriorsppeechOraclePromptLabel}>
              Trial {oracleIndex + 1} of{' '}
              {amzznkWrriorsppeechOracleSession.length}
            </Text>
          </View>
          <Text style={styles.amzznkWrriorsppeechOraclePromptQuestion}>
            {
              amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptQuestion
            }
          </Text>
        </View>

        {amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptChoices.map(
          amzznkWrriorsppeechOracleChoice => (
            <Pressable
              key={
                amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceId
              }
              disabled={oracleAnswered}
              onPress={() =>
                amzznkWrriorsppeechOracleSubmitAnswer(
                  amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceId,
                  amzznkWrriorsppeechOracleCurrent,
                )
              }
              style={amzznkWrriorsppeechOracleGetChoiceStyle(
                amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceId,
              )}>
              <Text style={styles.amzznkWrriorsppeechOracleChoiceLetter}>
                {amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceId}.
              </Text>
              <Text
                style={amzznkWrriorsppeechOracleGetChoiceTextStyle(
                  amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceId,
                )}>
                {
                  amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceLabel
                }
              </Text>
            </Pressable>
          ),
        )}

        {oracleAnswered && (
          <View
            style={[
              styles.amzznkWrriorsppeechOracleFeedback,
              amzznkWrriorsppeechOracleIsCorrect
                ? styles.amzznkWrriorsppeechOracleFeedbackCorrect
                : styles.amzznkWrriorsppeechOracleFeedbackWrong,
            ]}>
            <Text
              style={[
                styles.amzznkWrriorsppeechOracleFeedbackTitle,
                amzznkWrriorsppeechOracleIsCorrect
                  ? styles.amzznkWrriorsppeechOracleFeedbackTitleCorrect
                  : styles.amzznkWrriorsppeechOracleFeedbackTitleWrong,
              ]}>
              {amzznkWrriorsppeechOracleIsCorrect ? '✓ Correct!' : '✕ Wrong.'}
            </Text>
            <Text
              style={[
                styles.amzznkWrriorsppeechOracleFeedbackBody,
                amzznkWrriorsppeechOracleIsCorrect
                  ? styles.amzznkWrriorsppeechOracleFeedbackBodyCorrect
                  : styles.amzznkWrriorsppeechOracleFeedbackBodyWrong,
              ]}>
              {amzznkWrriorsppeechOracleIsCorrect
                ? amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptExplanation
                : `${amzznkWrriorsppeechOracleGetChoiceLabel(
                    amzznkWrriorsppeechOracleCurrent,
                    amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptCorrectId,
                  )} — ${
                    amzznkWrriorsppeechOracleCurrent.amzznkWrriorsppeechOraclePromptExplanation
                  }`}
            </Text>
          </View>
        )}

        {oracleAnswered && (
          <Pressable
            onPress={amzznkWrriorsppeechOracleGoNext}
            style={({pressed}) => [
              styles.amzznkWrriorsppeechOracleNextWrap,
              pressed && {opacity: 0.9},
            ]}>
            <LinearGradient
              colors={amzznkWrriorsppeechOracleBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.amzznkWrriorsppeechOracleNextBtn}>
              <Text style={styles.amzznkWrriorsppeechOracleNextText}>
                {amzznkWrriorsppeechOracleIsLast ? 'See Result' : 'Next Trial →'}
              </Text>
            </LinearGradient>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechOracleTrialRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechOracleTrialHeader: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  amzznkWrriorsppeechOracleProgressRow: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  amzznkWrriorsppeechOracleProgressSegments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  amzznkWrriorsppeechOracleProgressSegment: {
    width: 31,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3A3435',
  },
  amzznkWrriorsppeechOracleProgressSegmentFilled: {
    backgroundColor: '#FF9900',
  },
  amzznkWrriorsppeechOracleTimerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1.1,
    borderColor: '#FF99001A',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#FF99001A',
  },
  amzznkWrriorsppeechOracleTimerIcon: {
    fontSize: 10,
  },
  amzznkWrriorsppeechOracleTimerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF9900',
  },
  amzznkWrriorsppeechOracleProgressLine: {
    height: 3,
    backgroundColor: '#FF9900',
    borderRadius: 2,
  },
  amzznkWrriorsppeechOracleTrialScroll: {
    paddingBottom: 24,
  },
  amzznkWrriorsppeechOraclePromptCard: {
    marginTop: 60,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    padding: 16,
    marginBottom: 56,

    marginHorizontal: 16,
  },
  amzznkWrriorsppeechOraclePromptCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  amzznkWrriorsppeechOraclePromptIcon: {
    fontSize: 16,
  },
  amzznkWrriorsppeechOraclePromptLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechOraclePromptQuestion: {
    fontSize: 15,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  amzznkWrriorsppeechOracleChoice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  amzznkWrriorsppeechOracleChoiceCorrect: {
    borderColor: '#22C55E',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  amzznkWrriorsppeechOracleChoiceWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  amzznkWrriorsppeechOracleChoiceDim: {
    opacity: 0.5,
  },
  amzznkWrriorsppeechOracleChoiceLetter: {
    fontSize: 14,
    color: '#9B8E8F',
    marginRight: 10,
    fontWeight: '600',
  },
  amzznkWrriorsppeechOracleChoiceText: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
  },
  amzznkWrriorsppeechOracleChoiceTextCorrect: {
    color: '#22C55E',
    fontWeight: '600',
  },
  amzznkWrriorsppeechOracleChoiceTextWrong: {
    color: '#EF4444',
    fontWeight: '600',
  },
  amzznkWrriorsppeechOracleChoiceTextDim: {
    fontSize: 14,
    color: '#6B6566',
    flex: 1,
  },
  amzznkWrriorsppeechOracleFeedback: {
    borderRadius: 16,
    borderWidth: 1.1,
    padding: 14,
    marginBottom: 16,
    marginTop: 4,
    marginHorizontal: 16,
  },
  amzznkWrriorsppeechOracleFeedbackCorrect: {
    borderColor: '#22C55E',
    backgroundColor: 'rgba(34, 197, 94, 0.08)',
  },
  amzznkWrriorsppeechOracleFeedbackWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
  },
  amzznkWrriorsppeechOracleFeedbackTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  amzznkWrriorsppeechOracleFeedbackTitleCorrect: {
    color: '#22C55E',
  },
  amzznkWrriorsppeechOracleFeedbackTitleWrong: {
    color: '#EF4444',
  },
  amzznkWrriorsppeechOracleFeedbackBody: {
    fontSize: 12,
    lineHeight: 18,
  },
  amzznkWrriorsppeechOracleFeedbackBodyCorrect: {
    color: '#86EFAC',
  },
  amzznkWrriorsppeechOracleFeedbackBodyWrong: {
    color: '#FCA5A5',
  },
  amzznkWrriorsppeechOracleNextWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    marginHorizontal: 16,
  },
  amzznkWrriorsppeechOracleNextBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechOracleNextText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
});
