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
  oracleGetChoiceLabel,
  oracleTrialsPerSession,
  oraclePickSession,
  oracleTokensPerCorrect,
  oracleTimerSeconds,
  type OracleChoiceId,
  type OraclePrompt,
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

type OracleTrialScreenProps = {
  oracleNavigation: OracleNavigation;
};

const OracleTrialScreen = ({
  oracleNavigation,
}: OracleTrialScreenProps) => {
  const oracleInsets = useSafeAreaInsets();
  const oracleSession = useMemo(
    () => oraclePickSession(),
    [],
  );

  const [oracleIndex, setOracleIndex] =
    useState(0);
  const [oracleSelected, setOracleSelected] =
    useState<OracleChoiceId | null>(null);
  const [oracleAnswered, setOracleAnswered] =
    useState(false);
  const [
    oracleCorrectCount,
    setOracleCorrectCount,
  ] = useState(0);
  const [oracleTimeLeft, setOracleTimeLeft] =
    useState(oracleTimerSeconds);

  const oracleCurrent =
    oracleSession[oracleIndex];

  const oracleIsCorrect =
    oracleSelected ===
    oracleCurrent?.oraclePromptCorrectId;

  const oracleIsLast =
    oracleIndex === oracleSession.length - 1;

  const oracleSubmitAnswer = useCallback(
    (
      oracleChoiceId: OracleChoiceId | null,
      oraclePrompt: OraclePrompt,
    ) => {
      if (oracleAnswered) {
        return;
      }
      setOracleSelected(oracleChoiceId);
      setOracleAnswered(true);
      if (
        oracleChoiceId ===
        oraclePrompt.oraclePromptCorrectId
      ) {
        setOracleCorrectCount(
          oraclePrev => oraclePrev + 1,
        );
      }
    },
    [oracleAnswered],
  );

  useEffect(() => {
    if (!oracleCurrent || oracleAnswered) {
      return;
    }
    setOracleTimeLeft(oracleTimerSeconds);
    const oracleInterval = setInterval(() => {
      setOracleTimeLeft(oraclePrev => {
        if (oraclePrev <= 1) {
          clearInterval(oracleInterval);
          oracleSubmitAnswer(
            null,
            oracleCurrent,
          );
          return 0;
        }
        return oraclePrev - 1;
      });
    }, 1000);
    return () => clearInterval(oracleInterval);
  }, [
    oracleIndex,
    oracleAnswered,
    oracleCurrent,
    oracleSubmitAnswer,
  ]);

  if (!oracleCurrent) {
    return null;
  }

  const oracleGoNext = () => {
    if (oracleIsLast) {
      const oracleTokens =
        oracleCorrectCount *
        oracleTokensPerCorrect;
      oracleNavigation.replace(
        'OracleOutcome',
        {
          oracleCorrectCount,
          oracleTotalCount:
            oracleSession.length,
          oracleTokensGained: oracleTokens,
        },
      );
      return;
    }
    setOracleIndex(
      oraclePrev => oraclePrev + 1,
    );
    setOracleSelected(null);
    setOracleAnswered(false);
  };

  const oracleGetChoiceStyle = (
    oracleChoiceId: OracleChoiceId,
  ) => {
    if (!oracleAnswered) {
      return styles.oracleChoice;
    }
    const oracleCorrectId =
      oracleCurrent.oraclePromptCorrectId;
    if (oracleChoiceId === oracleCorrectId) {
      return [
        styles.oracleChoice,
        styles.oracleChoiceCorrect,
      ];
    }
    if (oracleChoiceId === oracleSelected) {
      return [
        styles.oracleChoice,
        styles.oracleChoiceWrong,
      ];
    }
    return [
      styles.oracleChoice,
      styles.oracleChoiceDim,
    ];
  };

  const oracleGetChoiceTextStyle = (
    oracleChoiceId: OracleChoiceId,
  ) => {
    if (!oracleAnswered) {
      return styles.oracleChoiceText;
    }
    if (
      oracleChoiceId ===
      oracleCurrent.oraclePromptCorrectId
    ) {
      return [
        styles.oracleChoiceText,
        styles.oracleChoiceTextCorrect,
      ];
    }
    if (oracleChoiceId === oracleSelected) {
      return [
        styles.oracleChoiceText,
        styles.oracleChoiceTextWrong,
      ];
    }
    return styles.oracleChoiceTextDim;
  };

  return (
    <View style={styles.oracleTrialRoot}>
      <ScrollView
        contentContainerStyle={styles.oracleTrialScroll}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.oracleTrialHeader,
            {paddingTop: oracleInsets.top + 8},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={styles.oracleProgressRow}>
              <View style={styles.oracleProgressSegments}>
                {Array.from({length: oracleTrialsPerSession}).map(
                  (_, oracleSegmentIndex) => (
                    <View
                      key={oracleSegmentIndex}
                      style={[
                        styles.oracleProgressSegment,
                        (oracleSegmentIndex <
                          oracleIndex ||
                          (oracleSegmentIndex ===
                            oracleIndex &&
                            oracleAnswered)) &&
                          styles.oracleProgressSegmentFilled,
                      ]}
                    />
                  ),
                )}
              </View>
              <View style={styles.oracleTimerPill}>
                <Image source={require('../../../elements/images/oracle-timer.png')} />
                <Text style={styles.oracleTimerText}>
                  {oracleTimeLeft}s
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.oracleProgressLine} />
        </View>

        <View style={styles.oraclePromptCard}>
          <View style={styles.oraclePromptCardHeader}>
            <Text style={styles.oraclePromptIcon}>🏺</Text>
            <Text style={styles.oraclePromptLabel}>
              Trial {oracleIndex + 1} of{' '}
              {oracleSession.length}
            </Text>
          </View>
          <Text style={styles.oraclePromptQuestion}>
            {
              oracleCurrent.oraclePromptQuestion
            }
          </Text>
        </View>

        {oracleCurrent.oraclePromptChoices.map(
          oracleChoice => (
            <Pressable
              key={
                oracleChoice.oracleChoiceId
              }
              disabled={oracleAnswered}
              onPress={() =>
                oracleSubmitAnswer(
                  oracleChoice.oracleChoiceId,
                  oracleCurrent,
                )
              }
              style={oracleGetChoiceStyle(
                oracleChoice.oracleChoiceId,
              )}>
              <Text style={styles.oracleChoiceLetter}>
                {oracleChoice.oracleChoiceId}.
              </Text>
              <Text
                style={oracleGetChoiceTextStyle(
                  oracleChoice.oracleChoiceId,
                )}>
                {
                  oracleChoice.oracleChoiceLabel
                }
              </Text>
            </Pressable>
          ),
        )}

        {oracleAnswered && (
          <View
            style={[
              styles.oracleFeedback,
              oracleIsCorrect
                ? styles.oracleFeedbackCorrect
                : styles.oracleFeedbackWrong,
            ]}>
            <Text
              style={[
                styles.oracleFeedbackTitle,
                oracleIsCorrect
                  ? styles.oracleFeedbackTitleCorrect
                  : styles.oracleFeedbackTitleWrong,
              ]}>
              {oracleIsCorrect ? '✓ Correct!' : '✕ Wrong.'}
            </Text>
            <Text
              style={[
                styles.oracleFeedbackBody,
                oracleIsCorrect
                  ? styles.oracleFeedbackBodyCorrect
                  : styles.oracleFeedbackBodyWrong,
              ]}>
              {oracleIsCorrect
                ? oracleCurrent.oraclePromptExplanation
                : `${oracleGetChoiceLabel(
                    oracleCurrent,
                    oracleCurrent.oraclePromptCorrectId,
                  )} — ${
                    oracleCurrent.oraclePromptExplanation
                  }`}
            </Text>
          </View>
        )}

        {oracleAnswered && (
          <Pressable
            onPress={oracleGoNext}
            style={({pressed}) => [
              styles.oracleNextWrap,
              pressed && {opacity: 0.9},
            ]}>
            <LinearGradient
              colors={oracleBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.oracleNextBtn}>
              <Text style={styles.oracleNextText}>
                {oracleIsLast ? 'See Result' : 'Next Trial →'}
              </Text>
            </LinearGradient>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default OracleTrialScreen;

const styles = StyleSheet.create({
  oracleTrialRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  oracleTrialHeader: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  oracleProgressRow: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  oracleProgressSegments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  oracleProgressSegment: {
    width: 31,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3A3435',
  },
  oracleProgressSegmentFilled: {
    backgroundColor: '#FF9900',
  },
  oracleTimerPill: {
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
  oracleTimerIcon: {
    fontSize: 10,
  },
  oracleTimerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF9900',
  },
  oracleProgressLine: {
    height: 3,
    backgroundColor: '#FF9900',
    borderRadius: 2,
  },
  oracleTrialScroll: {
    paddingBottom: 24,
  },
  oraclePromptCard: {
    marginTop: 60,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    padding: 16,
    marginBottom: 56,

    marginHorizontal: 16,
  },
  oraclePromptCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  oraclePromptIcon: {
    fontSize: 16,
  },
  oraclePromptLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
  },
  oraclePromptQuestion: {
    fontSize: 15,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  oracleChoice: {
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
  oracleChoiceCorrect: {
    borderColor: '#22C55E',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  oracleChoiceWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  oracleChoiceDim: {
    opacity: 0.5,
  },
  oracleChoiceLetter: {
    fontSize: 14,
    color: '#9B8E8F',
    marginRight: 10,
    fontWeight: '600',
  },
  oracleChoiceText: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
  },
  oracleChoiceTextCorrect: {
    color: '#22C55E',
    fontWeight: '600',
  },
  oracleChoiceTextWrong: {
    color: '#EF4444',
    fontWeight: '600',
  },
  oracleChoiceTextDim: {
    fontSize: 14,
    color: '#6B6566',
    flex: 1,
  },
  oracleFeedback: {
    borderRadius: 16,
    borderWidth: 1.1,
    padding: 14,
    marginBottom: 16,
    marginTop: 4,
    marginHorizontal: 16,
  },
  oracleFeedbackCorrect: {
    borderColor: '#22C55E',
    backgroundColor: 'rgba(34, 197, 94, 0.08)',
  },
  oracleFeedbackWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
  },
  oracleFeedbackTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  oracleFeedbackTitleCorrect: {
    color: '#22C55E',
  },
  oracleFeedbackTitleWrong: {
    color: '#EF4444',
  },
  oracleFeedbackBody: {
    fontSize: 12,
    lineHeight: 18,
  },
  oracleFeedbackBodyCorrect: {
    color: '#86EFAC',
  },
  oracleFeedbackBodyWrong: {
    color: '#FCA5A5',
  },
  oracleNextWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    marginHorizontal: 16,
  },
  oracleNextBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oracleNextText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
});
