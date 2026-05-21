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
  amznkaWrriorSpeechRddlsGetOptionLabel,
  amznkaWrriorSpeechRddlsPerSession,
  amznkaWrriorSpeechRddlsPickSession,
  amznkaWrriorSpeechRddlsSwordsPerCorrect,
  amznkaWrriorSpeechRddlsTimerSeconds,
  type AmznkaWrriorSpeechRddlsOptionId,
  type AmznkaWrriorSpeechRddlsRiddle,
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

type AmznkaWrriorSpeechRddlsPlayProps = {
  amznkaWrriorSpeechRddlsNavigation: AmznkaWrriorSpeechRddlsNavigation;
};

const AmznkaWrriorSpeechRddlsPlay = ({
  amznkaWrriorSpeechRddlsNavigation,
}: AmznkaWrriorSpeechRddlsPlayProps) => {
  const amznkaWrriorSpeechRddlsInsets = useSafeAreaInsets();
  const amznkaWrriorSpeechRddlsSession = useMemo(
    () => amznkaWrriorSpeechRddlsPickSession(),
    [],
  );

  const [amznkaWrriorSpeechRddlsIndex, setAmznkaWrriorSpeechRddlsIndex] =
    useState(0);
  const [amznkaWrriorSpeechRddlsSelected, setAmznkaWrriorSpeechRddlsSelected] =
    useState<AmznkaWrriorSpeechRddlsOptionId | null>(null);
  const [amznkaWrriorSpeechRddlsAnswered, setAmznkaWrriorSpeechRddlsAnswered] =
    useState(false);
  const [
    amznkaWrriorSpeechRddlsCorrectCount,
    setAmznkaWrriorSpeechRddlsCorrectCount,
  ] = useState(0);
  const [amznkaWrriorSpeechRddlsTimeLeft, setAmznkaWrriorSpeechRddlsTimeLeft] =
    useState(amznkaWrriorSpeechRddlsTimerSeconds);

  const amznkaWrriorSpeechRddlsCurrent =
    amznkaWrriorSpeechRddlsSession[amznkaWrriorSpeechRddlsIndex];

  const amznkaWrriorSpeechRddlsIsCorrect =
    amznkaWrriorSpeechRddlsSelected ===
    amznkaWrriorSpeechRddlsCurrent?.amznkaWrriorSpeechRddlsRiddleCorrectId;

  const amznkaWrriorSpeechRddlsIsLast =
    amznkaWrriorSpeechRddlsIndex === amznkaWrriorSpeechRddlsSession.length - 1;

  const amznkaWrriorSpeechRddlsSubmitAnswer = useCallback(
    (
      amznkaWrriorSpeechRddlsOptionId: AmznkaWrriorSpeechRddlsOptionId | null,
      amznkaWrriorSpeechRddlsRiddle: AmznkaWrriorSpeechRddlsRiddle,
    ) => {
      if (amznkaWrriorSpeechRddlsAnswered) {
        return;
      }
      setAmznkaWrriorSpeechRddlsSelected(amznkaWrriorSpeechRddlsOptionId);
      setAmznkaWrriorSpeechRddlsAnswered(true);
      if (
        amznkaWrriorSpeechRddlsOptionId ===
        amznkaWrriorSpeechRddlsRiddle.amznkaWrriorSpeechRddlsRiddleCorrectId
      ) {
        setAmznkaWrriorSpeechRddlsCorrectCount(
          amznkaWrriorSpeechRddlsPrev => amznkaWrriorSpeechRddlsPrev + 1,
        );
      }
    },
    [amznkaWrriorSpeechRddlsAnswered],
  );

  useEffect(() => {
    if (!amznkaWrriorSpeechRddlsCurrent || amznkaWrriorSpeechRddlsAnswered) {
      return;
    }
    setAmznkaWrriorSpeechRddlsTimeLeft(amznkaWrriorSpeechRddlsTimerSeconds);
    const amznkaWrriorSpeechRddlsInterval = setInterval(() => {
      setAmznkaWrriorSpeechRddlsTimeLeft(amznkaWrriorSpeechRddlsPrev => {
        if (amznkaWrriorSpeechRddlsPrev <= 1) {
          clearInterval(amznkaWrriorSpeechRddlsInterval);
          amznkaWrriorSpeechRddlsSubmitAnswer(
            null,
            amznkaWrriorSpeechRddlsCurrent,
          );
          return 0;
        }
        return amznkaWrriorSpeechRddlsPrev - 1;
      });
    }, 1000);
    return () => clearInterval(amznkaWrriorSpeechRddlsInterval);
  }, [
    amznkaWrriorSpeechRddlsIndex,
    amznkaWrriorSpeechRddlsAnswered,
    amznkaWrriorSpeechRddlsCurrent,
    amznkaWrriorSpeechRddlsSubmitAnswer,
  ]);

  if (!amznkaWrriorSpeechRddlsCurrent) {
    return null;
  }

  const amznkaWrriorSpeechRddlsGoNext = () => {
    if (amznkaWrriorSpeechRddlsIsLast) {
      const amznkaWrriorSpeechRddlsSwords =
        amznkaWrriorSpeechRddlsCorrectCount *
        amznkaWrriorSpeechRddlsSwordsPerCorrect;
      amznkaWrriorSpeechRddlsNavigation.replace(
        'AmznkaWrriorSpeechRddlsResult',
        {
          amznkaWrriorSpeechRddlsCorrectCount,
          amznkaWrriorSpeechRddlsTotalCount:
            amznkaWrriorSpeechRddlsSession.length,
          amznkaWrriorSpeechRddlsSwordsEarned: amznkaWrriorSpeechRddlsSwords,
        },
      );
      return;
    }
    setAmznkaWrriorSpeechRddlsIndex(
      amznkaWrriorSpeechRddlsPrev => amznkaWrriorSpeechRddlsPrev + 1,
    );
    setAmznkaWrriorSpeechRddlsSelected(null);
    setAmznkaWrriorSpeechRddlsAnswered(false);
  };

  const amznkaWrriorSpeechRddlsGetOptionStyle = (
    amznkaWrriorSpeechRddlsOptionId: AmznkaWrriorSpeechRddlsOptionId,
  ) => {
    if (!amznkaWrriorSpeechRddlsAnswered) {
      return styles.amznkaWrriorSpeechRddlsOption;
    }
    const amznkaWrriorSpeechRddlsCorrectId =
      amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleCorrectId;
    if (amznkaWrriorSpeechRddlsOptionId === amznkaWrriorSpeechRddlsCorrectId) {
      return [
        styles.amznkaWrriorSpeechRddlsOption,
        styles.amznkaWrriorSpeechRddlsOptionCorrect,
      ];
    }
    if (amznkaWrriorSpeechRddlsOptionId === amznkaWrriorSpeechRddlsSelected) {
      return [
        styles.amznkaWrriorSpeechRddlsOption,
        styles.amznkaWrriorSpeechRddlsOptionWrong,
      ];
    }
    return [
      styles.amznkaWrriorSpeechRddlsOption,
      styles.amznkaWrriorSpeechRddlsOptionDim,
    ];
  };

  const amznkaWrriorSpeechRddlsGetOptionTextStyle = (
    amznkaWrriorSpeechRddlsOptionId: AmznkaWrriorSpeechRddlsOptionId,
  ) => {
    if (!amznkaWrriorSpeechRddlsAnswered) {
      return styles.amznkaWrriorSpeechRddlsOptionText;
    }
    if (
      amznkaWrriorSpeechRddlsOptionId ===
      amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleCorrectId
    ) {
      return [
        styles.amznkaWrriorSpeechRddlsOptionText,
        styles.amznkaWrriorSpeechRddlsOptionTextCorrect,
      ];
    }
    if (amznkaWrriorSpeechRddlsOptionId === amznkaWrriorSpeechRddlsSelected) {
      return [
        styles.amznkaWrriorSpeechRddlsOptionText,
        styles.amznkaWrriorSpeechRddlsOptionTextWrong,
      ];
    }
    return styles.amznkaWrriorSpeechRddlsOptionTextDim;
  };

  return (
    <View style={styles.amznkaWrriorSpeechRddlsPlayRoot}>
      <ScrollView
        contentContainerStyle={styles.amznkaWrriorSpeechRddlsPlayScroll}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.amznkaWrriorSpeechRddlsPlayHeader,
            {paddingTop: amznkaWrriorSpeechRddlsInsets.top + 8},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={styles.amznkaWrriorSpeechRddlsProgressRow}>
              <View style={styles.amznkaWrriorSpeechRddlsProgressSegments}>
                {Array.from({length: amznkaWrriorSpeechRddlsPerSession}).map(
                  (_, amznkaWrriorSpeechRddlsSegmentIndex) => (
                    <View
                      key={amznkaWrriorSpeechRddlsSegmentIndex}
                      style={[
                        styles.amznkaWrriorSpeechRddlsProgressSegment,
                        (amznkaWrriorSpeechRddlsSegmentIndex <
                          amznkaWrriorSpeechRddlsIndex ||
                          (amznkaWrriorSpeechRddlsSegmentIndex ===
                            amznkaWrriorSpeechRddlsIndex &&
                            amznkaWrriorSpeechRddlsAnswered)) &&
                          styles.amznkaWrriorSpeechRddlsProgressSegmentFilled,
                      ]}
                    />
                  ),
                )}
              </View>
              <View style={styles.amznkaWrriorSpeechRddlsTimerPill}>
                <Image source={require('../../assets/i/amznkawrtime.png')} />
                <Text style={styles.amznkaWrriorSpeechRddlsTimerText}>
                  {amznkaWrriorSpeechRddlsTimeLeft}s
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.amznkaWrriorSpeechRddlsProgressLine} />
        </View>

        <View style={styles.amznkaWrriorSpeechRddlsRiddleCard}>
          <View style={styles.amznkaWrriorSpeechRddlsRiddleCardHeader}>
            <Text style={styles.amznkaWrriorSpeechRddlsRiddleIcon}>🏺</Text>
            <Text style={styles.amznkaWrriorSpeechRddlsRiddleLabel}>
              Riddle {amznkaWrriorSpeechRddlsIndex + 1} of{' '}
              {amznkaWrriorSpeechRddlsSession.length}
            </Text>
          </View>
          <Text style={styles.amznkaWrriorSpeechRddlsRiddleQuestion}>
            {
              amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleQuestion
            }
          </Text>
        </View>

        {amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleOptions.map(
          amznkaWrriorSpeechRddlsOption => (
            <Pressable
              key={
                amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionId
              }
              disabled={amznkaWrriorSpeechRddlsAnswered}
              onPress={() =>
                amznkaWrriorSpeechRddlsSubmitAnswer(
                  amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionId,
                  amznkaWrriorSpeechRddlsCurrent,
                )
              }
              style={amznkaWrriorSpeechRddlsGetOptionStyle(
                amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionId,
              )}>
              <Text style={styles.amznkaWrriorSpeechRddlsOptionLetter}>
                {amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionId}.
              </Text>
              <Text
                style={amznkaWrriorSpeechRddlsGetOptionTextStyle(
                  amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionId,
                )}>
                {
                  amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionLabel
                }
              </Text>
            </Pressable>
          ),
        )}

        {amznkaWrriorSpeechRddlsAnswered && (
          <View
            style={[
              styles.amznkaWrriorSpeechRddlsFeedback,
              amznkaWrriorSpeechRddlsIsCorrect
                ? styles.amznkaWrriorSpeechRddlsFeedbackCorrect
                : styles.amznkaWrriorSpeechRddlsFeedbackWrong,
            ]}>
            <Text
              style={[
                styles.amznkaWrriorSpeechRddlsFeedbackTitle,
                amznkaWrriorSpeechRddlsIsCorrect
                  ? styles.amznkaWrriorSpeechRddlsFeedbackTitleCorrect
                  : styles.amznkaWrriorSpeechRddlsFeedbackTitleWrong,
              ]}>
              {amznkaWrriorSpeechRddlsIsCorrect ? '✓ Correct!' : '✕ Wrong.'}
            </Text>
            <Text
              style={[
                styles.amznkaWrriorSpeechRddlsFeedbackBody,
                amznkaWrriorSpeechRddlsIsCorrect
                  ? styles.amznkaWrriorSpeechRddlsFeedbackBodyCorrect
                  : styles.amznkaWrriorSpeechRddlsFeedbackBodyWrong,
              ]}>
              {amznkaWrriorSpeechRddlsIsCorrect
                ? amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleExplanation
                : `${amznkaWrriorSpeechRddlsGetOptionLabel(
                    amznkaWrriorSpeechRddlsCurrent,
                    amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleCorrectId,
                  )} — ${
                    amznkaWrriorSpeechRddlsCurrent.amznkaWrriorSpeechRddlsRiddleExplanation
                  }`}
            </Text>
          </View>
        )}

        {amznkaWrriorSpeechRddlsAnswered && (
          <Pressable
            onPress={amznkaWrriorSpeechRddlsGoNext}
            style={({pressed}) => [
              styles.amznkaWrriorSpeechRddlsNextWrap,
              pressed && {opacity: 0.9},
            ]}>
            <LinearGradient
              colors={amznkaWrriorSpeechRddlsBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.amznkaWrriorSpeechRddlsNextBtn}>
              <Text style={styles.amznkaWrriorSpeechRddlsNextText}>
                {amznkaWrriorSpeechRddlsIsLast ? 'See Result' : 'Next Riddle →'}
              </Text>
            </LinearGradient>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AmznkaWrriorSpeechRddlsPlay;

const styles = StyleSheet.create({
  amznkaWrriorSpeechRddlsPlayRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amznkaWrriorSpeechRddlsPlayHeader: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  amznkaWrriorSpeechRddlsProgressRow: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  amznkaWrriorSpeechRddlsProgressSegments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  amznkaWrriorSpeechRddlsProgressSegment: {
    width: 31,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3A3435',
  },
  amznkaWrriorSpeechRddlsProgressSegmentFilled: {
    backgroundColor: '#FF9900',
  },
  amznkaWrriorSpeechRddlsTimerPill: {
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
  amznkaWrriorSpeechRddlsTimerIcon: {
    fontSize: 10,
  },
  amznkaWrriorSpeechRddlsTimerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF9900',
  },
  amznkaWrriorSpeechRddlsProgressLine: {
    height: 3,
    backgroundColor: '#FF9900',
    borderRadius: 2,
  },
  amznkaWrriorSpeechRddlsPlayScroll: {
    paddingBottom: 24,
  },
  amznkaWrriorSpeechRddlsRiddleCard: {
    marginTop: 60,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    padding: 16,
    marginBottom: 56,

    marginHorizontal: 16,
  },
  amznkaWrriorSpeechRddlsRiddleCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  amznkaWrriorSpeechRddlsRiddleIcon: {
    fontSize: 16,
  },
  amznkaWrriorSpeechRddlsRiddleLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechRddlsRiddleQuestion: {
    fontSize: 15,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  amznkaWrriorSpeechRddlsOption: {
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
  amznkaWrriorSpeechRddlsOptionCorrect: {
    borderColor: '#22C55E',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  amznkaWrriorSpeechRddlsOptionWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  amznkaWrriorSpeechRddlsOptionDim: {
    opacity: 0.5,
  },
  amznkaWrriorSpeechRddlsOptionLetter: {
    fontSize: 14,
    color: '#9B8E8F',
    marginRight: 10,
    fontWeight: '600',
  },
  amznkaWrriorSpeechRddlsOptionText: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
  },
  amznkaWrriorSpeechRddlsOptionTextCorrect: {
    color: '#22C55E',
    fontWeight: '600',
  },
  amznkaWrriorSpeechRddlsOptionTextWrong: {
    color: '#EF4444',
    fontWeight: '600',
  },
  amznkaWrriorSpeechRddlsOptionTextDim: {
    fontSize: 14,
    color: '#6B6566',
    flex: 1,
  },
  amznkaWrriorSpeechRddlsFeedback: {
    borderRadius: 16,
    borderWidth: 1.1,
    padding: 14,
    marginBottom: 16,
    marginTop: 4,
    marginHorizontal: 16,
  },
  amznkaWrriorSpeechRddlsFeedbackCorrect: {
    borderColor: '#22C55E',
    backgroundColor: 'rgba(34, 197, 94, 0.08)',
  },
  amznkaWrriorSpeechRddlsFeedbackWrong: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
  },
  amznkaWrriorSpeechRddlsFeedbackTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  amznkaWrriorSpeechRddlsFeedbackTitleCorrect: {
    color: '#22C55E',
  },
  amznkaWrriorSpeechRddlsFeedbackTitleWrong: {
    color: '#EF4444',
  },
  amznkaWrriorSpeechRddlsFeedbackBody: {
    fontSize: 12,
    lineHeight: 18,
  },
  amznkaWrriorSpeechRddlsFeedbackBodyCorrect: {
    color: '#86EFAC',
  },
  amznkaWrriorSpeechRddlsFeedbackBodyWrong: {
    color: '#FCA5A5',
  },
  amznkaWrriorSpeechRddlsNextWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    marginHorizontal: 16,
  },
  amznkaWrriorSpeechRddlsNextBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechRddlsNextText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
});
