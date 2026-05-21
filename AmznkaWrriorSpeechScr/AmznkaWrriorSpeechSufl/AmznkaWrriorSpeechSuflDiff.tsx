import React, {useCallback, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  AmznkaWrriorSpeechSuflDiffRoute,
  AmznkaWrriorSpeechSuflNavigation,
} from './AmznkaWrriorSpeechSuflTypes';
import {
  amznkaWrriorSpeechStoreGetUnlockedSuflTextsForCategory,
} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreData';
import {amznkaWrriorSpeechStoreLoadUnlockedIds} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreStorage';
import {
  amznkaWrriorSpeechSuflGetCategory,
  amznkaWrriorSpeechSuflGetCategoryTexts,
  type AmznkaWrriorSpeechSuflScrollSpeed,
  type AmznkaWrriorSpeechSuflText,
  type AmznkaWrriorSpeechSuflTextSize,
} from './AmznkaWrriorSpeechSuflData';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';

type AmznkaWrriorSpeechSuflDiffProps = {
  amznkaWrriorSpeechSuflNavigation: AmznkaWrriorSpeechSuflNavigation;
  amznkaWrriorSpeechSuflRoute: AmznkaWrriorSpeechSuflDiffRoute;
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

const AmznkaWrriorSpeechSuflDiff = ({
  amznkaWrriorSpeechSuflNavigation,
  amznkaWrriorSpeechSuflRoute,
}: AmznkaWrriorSpeechSuflDiffProps) => {
  const amznkaWrriorSpeechSuflInsets = useSafeAreaInsets();
  const amznkaWrriorSpeechSuflCategoryId =
    amznkaWrriorSpeechSuflRoute.params.amznkaWrriorSpeechSuflCategoryId;

  const amznkaWrriorSpeechSuflCategory =
    amznkaWrriorSpeechSuflGetCategory(amznkaWrriorSpeechSuflCategoryId);

  const [
    amznkaWrriorSpeechSuflStoreTexts,
    setAmznkaWrriorSpeechSuflStoreTexts,
  ] = useState<AmznkaWrriorSpeechSuflText[]>([]);

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

  const amznkaWrriorSpeechSuflCategoryTexts =
    amznkaWrriorSpeechSuflGetCategoryTexts(
      amznkaWrriorSpeechSuflCategoryId,
      amznkaWrriorSpeechSuflStoreTexts,
    );

  const [
    amznkaWrriorSpeechSuflSelectedTextId,
    setAmznkaWrriorSpeechSuflSelectedTextId,
  ] = useState<string | null>(null);
  const [
    amznkaWrriorSpeechSuflScrollSpeed,
    setAmznkaWrriorSpeechSuflScrollSpeed,
  ] = useState<AmznkaWrriorSpeechSuflScrollSpeed>('medium');
  const [amznkaWrriorSpeechSuflTextSize, setAmznkaWrriorSpeechSuflTextSize] =
    useState<AmznkaWrriorSpeechSuflTextSize>('medium');

  if (!amznkaWrriorSpeechSuflCategory) {
    return null;
  }

  const amznkaWrriorSpeechSuflCanStart =
    amznkaWrriorSpeechSuflSelectedTextId !== null;

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechSuflDiffScroll,
          {paddingTop: amznkaWrriorSpeechSuflInsets.top + 32},
        ]}>
        <View style={styles.amznkaWrriorSpeechSuflDiffHeader}>
          <Pressable
            onPress={() => amznkaWrriorSpeechSuflNavigation.goBack()}
            style={styles.amznkaWrriorSpeechSuflDiffBackBtn}>
            <Image source={require('../../assets/i/amznkawrrback.png')} />
          </Pressable>
          <View>
            <Text style={styles.amznkaWrriorSpeechSuflDiffTitle}>
              Difficulty
            </Text>
            <Text style={styles.amznkaWrriorSpeechSuflDiffSubtitle}>
              {
                amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryTitle
              }
            </Text>
          </View>
        </View>

        <Text style={styles.amznkaWrriorSpeechSuflDiffSectionLabel}>
          Select Text
        </Text>
        {amznkaWrriorSpeechSuflCategoryTexts.map(
          amznkaWrriorSpeechSuflText => {
            const amznkaWrriorSpeechSuflIsSelected =
              amznkaWrriorSpeechSuflSelectedTextId ===
              amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextId;
            return (
              <Pressable
                key={amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextId}
                onPress={() =>
                  setAmznkaWrriorSpeechSuflSelectedTextId(
                    amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextId,
                  )
                }
                style={[
                  styles.amznkaWrriorSpeechSuflDiffTextRow,
                  amznkaWrriorSpeechSuflIsSelected &&
                    styles.amznkaWrriorSpeechSuflDiffTextRowActive,
                ]}>
                <Text style={styles.amznkaWrriorSpeechSuflDiffTextRowLabel}>
                  {amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextTitle}
                </Text>
              </Pressable>
            );
          },
        )}

        <Text style={styles.amznkaWrriorSpeechSuflDiffSectionLabel}>
          Scroll Speed
        </Text>
        <View style={styles.amznkaWrriorSpeechSuflDiffOptionsRow}>
          {(
            [
              {id: 'slow' as const, emoji: '🐢', label: 'Slow'},
              {id: 'medium' as const, emoji: '🦅', label: 'Medium'},
              {id: 'fast' as const, emoji: '⚡', label: 'Fast'},
            ] as const
          ).map(amznkaWrriorSpeechSuflOption => (
            <Pressable
              key={amznkaWrriorSpeechSuflOption.id}
              onPress={() =>
                setAmznkaWrriorSpeechSuflScrollSpeed(
                  amznkaWrriorSpeechSuflOption.id,
                )
              }
              style={[
                styles.amznkaWrriorSpeechSuflDiffOptionCard,
                amznkaWrriorSpeechSuflScrollSpeed ===
                  amznkaWrriorSpeechSuflOption.id &&
                  styles.amznkaWrriorSpeechSuflDiffOptionCardActive,
              ]}>
              <Text style={styles.amznkaWrriorSpeechSuflDiffOptionEmoji}>
                {amznkaWrriorSpeechSuflOption.emoji}
              </Text>
              <Text
                style={[
                  styles.amznkaWrriorSpeechSuflDiffOptionLabel,
                  amznkaWrriorSpeechSuflScrollSpeed ===
                    amznkaWrriorSpeechSuflOption.id &&
                    styles.amznkaWrriorSpeechSuflDiffOptionLabelActive,
                ]}>
                {amznkaWrriorSpeechSuflOption.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.amznkaWrriorSpeechSuflDiffSectionLabel}>
          Text Size
        </Text>
        <View style={styles.amznkaWrriorSpeechSuflDiffOptionsRow}>
          {(
            [
              {id: 'small' as const, size: 12, label: 'Small'},
              {id: 'medium' as const, size: 16, label: 'Medium'},
              {id: 'large' as const, size: 20, label: 'Large'},
            ] as const
          ).map(amznkaWrriorSpeechSuflOption => (
            <Pressable
              key={amznkaWrriorSpeechSuflOption.id}
              onPress={() =>
                setAmznkaWrriorSpeechSuflTextSize(
                  amznkaWrriorSpeechSuflOption.id,
                )
              }
              style={[
                styles.amznkaWrriorSpeechSuflDiffOptionCard,
                styles.amznkaWrriorSpeechSuflDiffSizeCard,
                amznkaWrriorSpeechSuflTextSize ===
                  amznkaWrriorSpeechSuflOption.id &&
                  styles.amznkaWrriorSpeechSuflDiffOptionCardActive,
              ]}>
              <Text
                style={[
                  styles.amznkaWrriorSpeechSuflDiffSizeLetter,
                  {fontSize: amznkaWrriorSpeechSuflOption.size},
                  amznkaWrriorSpeechSuflTextSize ===
                    amznkaWrriorSpeechSuflOption.id &&
                    styles.amznkaWrriorSpeechSuflDiffOptionLabelActive,
                ]}>
                A
              </Text>
              <Text
                style={[
                  styles.amznkaWrriorSpeechSuflDiffOptionLabel,
                  amznkaWrriorSpeechSuflTextSize ===
                    amznkaWrriorSpeechSuflOption.id &&
                    styles.amznkaWrriorSpeechSuflDiffOptionLabelActive,
                ]}>
                {amznkaWrriorSpeechSuflOption.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.amznkaWrriorSpeechSuflDiffFooter,
          {paddingBottom: Math.max(amznkaWrriorSpeechSuflInsets.bottom, 12)},
        ]}>
        <Pressable
          disabled={!amznkaWrriorSpeechSuflCanStart}
          onPress={() => {
            if (!amznkaWrriorSpeechSuflSelectedTextId) {
              return;
            }
            amznkaWrriorSpeechSuflNavigation.navigate(
              'AmznkaWrriorSpeechSuflRead',
              {
                amznkaWrriorSpeechSuflCategoryId:
                  amznkaWrriorSpeechSuflRoute.params
                    .amznkaWrriorSpeechSuflCategoryId,
                amznkaWrriorSpeechSuflTextId:
                  amznkaWrriorSpeechSuflSelectedTextId,
                amznkaWrriorSpeechSuflScrollSpeed,
                amznkaWrriorSpeechSuflTextSize,
              },
            );
          }}
          style={({pressed}) => [
            styles.amznkaWrriorSpeechSuflDiffStartWrap,
            pressed && amznkaWrriorSpeechSuflCanStart && {opacity: 0.9},
          ]}>
          {amznkaWrriorSpeechSuflCanStart ? (
            <LinearGradient
              colors={amznkaWrriorSpeechSuflBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.amznkaWrriorSpeechSuflDiffStartBtn}>
              <Text style={styles.amznkaWrriorSpeechSuflDiffStartTextActive}>
                Start
              </Text>
            </LinearGradient>
          ) : (
            <View style={styles.amznkaWrriorSpeechSuflDiffStartBtnDisabled}>
              <Text style={styles.amznkaWrriorSpeechSuflDiffStartTextDisabled}>
                Select a Text First
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechSuflDiff;

const styles = StyleSheet.create({
  amznkaWrriorSpeechSuflDiffRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amznkaWrriorSpeechSuflDiffScroll: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  amznkaWrriorSpeechSuflDiffHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  amznkaWrriorSpeechSuflDiffBackBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechSuflDiffBackIcon: {
    fontSize: 22,
    color: '#F5F0E8',
    marginTop: -2,
  },
  amznkaWrriorSpeechSuflDiffTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechSuflDiffSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amznkaWrriorSpeechSuflDiffSectionLabel: {
    fontSize: 12,
    letterSpacing: 1.2,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 8,
  },
  amznkaWrriorSpeechSuflDiffTextRow: {
    backgroundColor: 'rgba(58, 52, 53, 0.5)',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8,
  },
  amznkaWrriorSpeechSuflDiffTextRowActive: {
    borderColor: '#FF9900',
  },
  amznkaWrriorSpeechSuflDiffTextRowLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechSuflDiffOptionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amznkaWrriorSpeechSuflDiffOptionCard: {
    flex: 1,
    backgroundColor: 'rgba(58, 52, 53, 0.5)',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
  },
  amznkaWrriorSpeechSuflDiffSizeCard: {
    paddingVertical: 10,
  },
  amznkaWrriorSpeechSuflDiffOptionCardActive: {
    backgroundColor: 'rgba(255, 153, 0, 0.15)',
    borderColor: '#FF9900',
  },
  amznkaWrriorSpeechSuflDiffOptionEmoji: {
    fontSize: 18,
    marginBottom: 6,
  },
  amznkaWrriorSpeechSuflDiffSizeLetter: {
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 4,
  },
  amznkaWrriorSpeechSuflDiffOptionLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechSuflDiffOptionLabelActive: {
    color: '#FF9900',
  },
  amznkaWrriorSpeechSuflDiffFooter: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#231F20',
  },
  amznkaWrriorSpeechSuflDiffStartWrap: {
    width: '100%',
  },
  amznkaWrriorSpeechSuflDiffStartBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechSuflDiffStartBtnDisabled: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3435',
  },
  amznkaWrriorSpeechSuflDiffStartTextActive: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
  },
  amznkaWrriorSpeechSuflDiffStartTextDisabled: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#9B8E8F',
  },
});
