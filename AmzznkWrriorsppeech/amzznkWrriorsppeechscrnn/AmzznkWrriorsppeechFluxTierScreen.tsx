import React, {useCallback, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  AmzznkWrriorsppeechFluxTierRoute,
  AmzznkWrriorsppeechFluxNavigation,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxTypes';
import {
  amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultCatalog';
import {amzznkWrriorsppeechVaultLoadUnlockedIds} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultStorage';
import {
  amzznkWrriorsppeechFluxGetCategory,
  amzznkWrriorsppeechFluxGetCategoryTexts,
  type AmzznkWrriorsppeechFluxCadence,
  type AmzznkWrriorsppeechFluxPassage,
  type AmzznkWrriorsppeechFluxPassageScale,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxCatalog';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';

type AmzznkWrriorsppeechFluxTierScreenProps = {
  amzznkWrriorsppeechFluxNavigation: AmzznkWrriorsppeechFluxNavigation;
  amzznkWrriorsppeechFluxRoute: AmzznkWrriorsppeechFluxTierRoute;
}

const amzznkWrriorsppeechFluxBtnGradient = [
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

export function AmzznkWrriorsppeechFluxTierScreen({
  amzznkWrriorsppeechFluxNavigation,
  amzznkWrriorsppeechFluxRoute,
}: AmzznkWrriorsppeechFluxTierScreenProps) {
  const amzznkWrriorsppeechFluxInsets = useSafeAreaInsets();
  const amzznkWrriorsppeechFluxCategoryId =
    amzznkWrriorsppeechFluxRoute.params.amzznkWrriorsppeechFluxCategoryId;

  const amzznkWrriorsppeechFluxCategory =
    amzznkWrriorsppeechFluxGetCategory(amzznkWrriorsppeechFluxCategoryId);

  const [
    fluxStoreTexts,
    setFluxStoreTexts,
  ] = useState<AmzznkWrriorsppeechFluxPassage[]>([]);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechVaultLoadUnlockedIds().then(
        amzznkWrriorsppeechFluxUnlockedIds =>
          setFluxStoreTexts(
            amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm(
              amzznkWrriorsppeechFluxUnlockedIds,
              amzznkWrriorsppeechFluxCategoryId,
            ),
          ),
      );
    }, [amzznkWrriorsppeechFluxCategoryId]),
  );

  const amzznkWrriorsppeechFluxCategoryTexts =
    amzznkWrriorsppeechFluxGetCategoryTexts(
      amzznkWrriorsppeechFluxCategoryId,
      fluxStoreTexts,
    );

  const [
    fluxSelectedTextId,
    setFluxSelectedTextId,
  ] = useState<string | null>(null);
  const [
    fluxScrollSpeed,
    setFluxCadence,
  ] = useState<AmzznkWrriorsppeechFluxCadence>('medium');
  const [fluxPassageSize, setFluxPassageScale] =
    useState<AmzznkWrriorsppeechFluxPassageScale>('medium');

  if (!amzznkWrriorsppeechFluxCategory) {
    return null;
  }

  const amzznkWrriorsppeechFluxCanStart =
    fluxSelectedTextId !== null;

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechFluxDiffScroll,
          {paddingTop: amzznkWrriorsppeechFluxInsets.top + 32},
        ]}>
        <View style={styles.amzznkWrriorsppeechFluxDiffHeader}>
          <Pressable
            onPress={() => amzznkWrriorsppeechFluxNavigation.goBack()}
            style={styles.amzznkWrriorsppeechFluxDiffBackBtn}>
            <Image source={require('../../assets/images/amzznkWrriorsppeechIconBack.png')} />
          </Pressable>
          <View>
            <Text style={styles.amzznkWrriorsppeechFluxDiffTitle}>
              Difficulty
            </Text>
            <Text style={styles.amzznkWrriorsppeechFluxDiffSubtitle}>
              {
                amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryTitle
              }
            </Text>
          </View>
        </View>

        <Text style={styles.amzznkWrriorsppeechFluxDiffSectionLabel}>
          Select Text
        </Text>
        {amzznkWrriorsppeechFluxCategoryTexts.map(
          amzznkWrriorsppeechFluxPassage => {
            const amzznkWrriorsppeechFluxIsSelected =
              fluxSelectedTextId ===
              amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageId;
            return (
              <Pressable
                key={amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageId}
                onPress={() =>
                  setFluxSelectedTextId(
                    amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageId,
                  )
                }
                style={[
                  styles.amzznkWrriorsppeechFluxDiffTextRow,
                  amzznkWrriorsppeechFluxIsSelected &&
                    styles.amzznkWrriorsppeechFluxDiffTextRowActive,
                ]}>
                <Text style={styles.amzznkWrriorsppeechFluxDiffTextRowLabel}>
                  {amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageTitle}
                </Text>
              </Pressable>
            );
          },
        )}

        <Text style={styles.amzznkWrriorsppeechFluxDiffSectionLabel}>
          Scroll Speed
        </Text>
        <View style={styles.amzznkWrriorsppeechFluxDiffOptionsRow}>
          {(
            [
              {amzznkWrriorsppeechId: 'slow' as const, amzznkWrriorsppeechEmoji: '🐢', amzznkWrriorsppeechLabel: 'Slow'},
              {amzznkWrriorsppeechId: 'medium' as const, amzznkWrriorsppeechEmoji: '🦅', amzznkWrriorsppeechLabel: 'Medium'},
              {amzznkWrriorsppeechId: 'fast' as const, amzznkWrriorsppeechEmoji: '⚡', amzznkWrriorsppeechLabel: 'Fast'},
            ] as const
          ).map(amzznkWrriorsppeechFluxOption => (
            <Pressable
              key={amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId}
              onPress={() =>
                setFluxCadence(
                  amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId,
                )
              }
              style={[
                styles.amzznkWrriorsppeechFluxDiffOptionCard,
                fluxScrollSpeed ===
                  amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId &&
                  styles.amzznkWrriorsppeechFluxDiffOptionCardActive,
              ]}>
              <Text style={styles.amzznkWrriorsppeechFluxDiffOptionEmoji}>
                {amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechEmoji}
              </Text>
              <Text
                style={[
                  styles.amzznkWrriorsppeechFluxDiffOptionLabel,
                  fluxScrollSpeed ===
                    amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId &&
                    styles.amzznkWrriorsppeechFluxDiffOptionLabelActive,
                ]}>
                {amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechLabel}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.amzznkWrriorsppeechFluxDiffSectionLabel}>
          Text Size
        </Text>
        <View style={styles.amzznkWrriorsppeechFluxDiffOptionsRow}>
          {(
            [
              {amzznkWrriorsppeechId: 'small' as const, amzznkWrriorsppeechSize: 12, amzznkWrriorsppeechLabel: 'Small'},
              {amzznkWrriorsppeechId: 'medium' as const, amzznkWrriorsppeechSize: 16, amzznkWrriorsppeechLabel: 'Medium'},
              {amzznkWrriorsppeechId: 'large' as const, amzznkWrriorsppeechSize: 20, amzznkWrriorsppeechLabel: 'Large'},
            ] as const
          ).map(amzznkWrriorsppeechFluxOption => (
            <Pressable
              key={amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId}
              onPress={() =>
                setFluxPassageScale(
                  amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId,
                )
              }
              style={[
                styles.amzznkWrriorsppeechFluxDiffOptionCard,
                styles.amzznkWrriorsppeechFluxDiffSizeCard,
                fluxPassageSize ===
                  amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId &&
                  styles.amzznkWrriorsppeechFluxDiffOptionCardActive,
              ]}>
              <Text
                style={[
                  styles.amzznkWrriorsppeechFluxDiffSizeLetter,
                  {fontSize: amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechSize},
                  fluxPassageSize ===
                    amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId &&
                    styles.amzznkWrriorsppeechFluxDiffOptionLabelActive,
                ]}>
                A
              </Text>
              <Text
                style={[
                  styles.amzznkWrriorsppeechFluxDiffOptionLabel,
                  fluxPassageSize ===
                    amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechId &&
                    styles.amzznkWrriorsppeechFluxDiffOptionLabelActive,
                ]}>
                {amzznkWrriorsppeechFluxOption.amzznkWrriorsppeechLabel}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.amzznkWrriorsppeechFluxDiffFooter,
          {paddingBottom: Math.max(amzznkWrriorsppeechFluxInsets.bottom, 12)},
        ]}>
        <Pressable
          disabled={!amzznkWrriorsppeechFluxCanStart}
          onPress={() => {
            if (!fluxSelectedTextId) {
              return;
            }
            amzznkWrriorsppeechFluxNavigation.navigate(
              'FluxRead',
              {
                amzznkWrriorsppeechFluxCategoryId:
                  amzznkWrriorsppeechFluxRoute.params
                    .amzznkWrriorsppeechFluxCategoryId,
                amzznkWrriorsppeechFluxPassageId:
                  fluxSelectedTextId,
                fluxScrollSpeed,
                fluxPassageSize,
              },
            );
          }}
          style={({pressed}) => [
            styles.amzznkWrriorsppeechFluxDiffStartWrap,
            pressed && amzznkWrriorsppeechFluxCanStart && {opacity: 0.9},
          ]}>
          {amzznkWrriorsppeechFluxCanStart ? (
            <LinearGradient
              colors={amzznkWrriorsppeechFluxBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.amzznkWrriorsppeechFluxDiffStartBtn}>
              <Text style={styles.amzznkWrriorsppeechFluxDiffStartTextActive}>
                Start
              </Text>
            </LinearGradient>
          ) : (
            <View style={styles.amzznkWrriorsppeechFluxDiffStartBtnDisabled}>
              <Text style={styles.amzznkWrriorsppeechFluxDiffStartTextDisabled}>
                Select a Text First
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechFluxDiffRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechFluxDiffScroll: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  amzznkWrriorsppeechFluxDiffHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  amzznkWrriorsppeechFluxDiffBackBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechFluxDiffBackIcon: {
    fontSize: 22,
    color: '#F5F0E8',
    marginTop: -2,
  },
  amzznkWrriorsppeechFluxDiffTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechFluxDiffSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amzznkWrriorsppeechFluxDiffSectionLabel: {
    fontSize: 12,
    letterSpacing: 1.2,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 8,
  },
  amzznkWrriorsppeechFluxDiffTextRow: {
    backgroundColor: 'rgba(58, 52, 53, 0.5)',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8,
  },
  amzznkWrriorsppeechFluxDiffTextRowActive: {
    borderColor: '#FF9900',
  },
  amzznkWrriorsppeechFluxDiffTextRowLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechFluxDiffOptionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amzznkWrriorsppeechFluxDiffOptionCard: {
    flex: 1,
    backgroundColor: 'rgba(58, 52, 53, 0.5)',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
  },
  amzznkWrriorsppeechFluxDiffSizeCard: {
    paddingVertical: 10,
  },
  amzznkWrriorsppeechFluxDiffOptionCardActive: {
    backgroundColor: 'rgba(255, 153, 0, 0.15)',
    borderColor: '#FF9900',
  },
  amzznkWrriorsppeechFluxDiffOptionEmoji: {
    fontSize: 18,
    marginBottom: 6,
  },
  amzznkWrriorsppeechFluxDiffSizeLetter: {
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 4,
  },
  amzznkWrriorsppeechFluxDiffOptionLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechFluxDiffOptionLabelActive: {
    color: '#FF9900',
  },
  amzznkWrriorsppeechFluxDiffFooter: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechFluxDiffStartWrap: {
    width: '100%',
  },
  amzznkWrriorsppeechFluxDiffStartBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechFluxDiffStartBtnDisabled: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3435',
  },
  amzznkWrriorsppeechFluxDiffStartTextActive: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
  },
  amzznkWrriorsppeechFluxDiffStartTextDisabled: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#9B8E8F',
  },
});
