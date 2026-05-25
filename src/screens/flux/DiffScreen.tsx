import React, {useCallback, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  FluxTierRoute,
  FluxNavigation,
} from '../../types/flux';
import {
  vaultUnlockedFluxPassagesForRealm,
} from '../../data/vault';
import {vaultLoadUnlockedIds} from '../../data/vaultStorage';
import {
  fluxGetCategory,
  fluxGetCategoryTexts,
  type FluxCadence,
  type FluxPassage,
  type FluxPassageScale,
} from '../../data/flux';
import SceneShell from '../../components/Shell';

type FluxTierScreenProps = {
  fluxNavigation: FluxNavigation;
  fluxRoute: FluxTierRoute;
};

const fluxBtnGradient = [
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

const FluxTierScreen = ({
  fluxNavigation,
  fluxRoute,
}: FluxTierScreenProps) => {
  const fluxInsets = useSafeAreaInsets();
  const fluxCategoryId =
    fluxRoute.params.fluxCategoryId;

  const fluxCategory =
    fluxGetCategory(fluxCategoryId);

  const [
    fluxStoreTexts,
    setFluxStoreTexts,
  ] = useState<FluxPassage[]>([]);

  useFocusEffect(
    useCallback(() => {
      vaultLoadUnlockedIds().then(
        fluxUnlockedIds =>
          setFluxStoreTexts(
            vaultUnlockedFluxPassagesForRealm(
              fluxUnlockedIds,
              fluxCategoryId,
            ),
          ),
      );
    }, [fluxCategoryId]),
  );

  const fluxCategoryTexts =
    fluxGetCategoryTexts(
      fluxCategoryId,
      fluxStoreTexts,
    );

  const [
    fluxSelectedTextId,
    setFluxSelectedTextId,
  ] = useState<string | null>(null);
  const [
    fluxScrollSpeed,
    setFluxCadence,
  ] = useState<FluxCadence>('medium');
  const [fluxPassageSize, setFluxPassageScale] =
    useState<FluxPassageScale>('medium');

  if (!fluxCategory) {
    return null;
  }

  const fluxCanStart =
    fluxSelectedTextId !== null;

  return (
    <SceneShell>
      <View
        style={[
          styles.fluxDiffScroll,
          {paddingTop: fluxInsets.top + 32},
        ]}>
        <View style={styles.fluxDiffHeader}>
          <Pressable
            onPress={() => fluxNavigation.goBack()}
            style={styles.fluxDiffBackBtn}>
            <Image source={require('../../../elements/images/icon-back.png')} />
          </Pressable>
          <View>
            <Text style={styles.fluxDiffTitle}>
              Difficulty
            </Text>
            <Text style={styles.fluxDiffSubtitle}>
              {
                fluxCategory.fluxCategoryTitle
              }
            </Text>
          </View>
        </View>

        <Text style={styles.fluxDiffSectionLabel}>
          Select Text
        </Text>
        {fluxCategoryTexts.map(
          fluxPassage => {
            const fluxIsSelected =
              fluxSelectedTextId ===
              fluxPassage.fluxPassageId;
            return (
              <Pressable
                key={fluxPassage.fluxPassageId}
                onPress={() =>
                  setFluxSelectedTextId(
                    fluxPassage.fluxPassageId,
                  )
                }
                style={[
                  styles.fluxDiffTextRow,
                  fluxIsSelected &&
                    styles.fluxDiffTextRowActive,
                ]}>
                <Text style={styles.fluxDiffTextRowLabel}>
                  {fluxPassage.fluxPassageTitle}
                </Text>
              </Pressable>
            );
          },
        )}

        <Text style={styles.fluxDiffSectionLabel}>
          Scroll Speed
        </Text>
        <View style={styles.fluxDiffOptionsRow}>
          {(
            [
              {id: 'slow' as const, emoji: '🐢', label: 'Slow'},
              {id: 'medium' as const, emoji: '🦅', label: 'Medium'},
              {id: 'fast' as const, emoji: '⚡', label: 'Fast'},
            ] as const
          ).map(fluxOption => (
            <Pressable
              key={fluxOption.id}
              onPress={() =>
                setFluxCadence(
                  fluxOption.id,
                )
              }
              style={[
                styles.fluxDiffOptionCard,
                fluxScrollSpeed ===
                  fluxOption.id &&
                  styles.fluxDiffOptionCardActive,
              ]}>
              <Text style={styles.fluxDiffOptionEmoji}>
                {fluxOption.emoji}
              </Text>
              <Text
                style={[
                  styles.fluxDiffOptionLabel,
                  fluxScrollSpeed ===
                    fluxOption.id &&
                    styles.fluxDiffOptionLabelActive,
                ]}>
                {fluxOption.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.fluxDiffSectionLabel}>
          Text Size
        </Text>
        <View style={styles.fluxDiffOptionsRow}>
          {(
            [
              {id: 'small' as const, size: 12, label: 'Small'},
              {id: 'medium' as const, size: 16, label: 'Medium'},
              {id: 'large' as const, size: 20, label: 'Large'},
            ] as const
          ).map(fluxOption => (
            <Pressable
              key={fluxOption.id}
              onPress={() =>
                setFluxPassageScale(
                  fluxOption.id,
                )
              }
              style={[
                styles.fluxDiffOptionCard,
                styles.fluxDiffSizeCard,
                fluxPassageSize ===
                  fluxOption.id &&
                  styles.fluxDiffOptionCardActive,
              ]}>
              <Text
                style={[
                  styles.fluxDiffSizeLetter,
                  {fontSize: fluxOption.size},
                  fluxPassageSize ===
                    fluxOption.id &&
                    styles.fluxDiffOptionLabelActive,
                ]}>
                A
              </Text>
              <Text
                style={[
                  styles.fluxDiffOptionLabel,
                  fluxPassageSize ===
                    fluxOption.id &&
                    styles.fluxDiffOptionLabelActive,
                ]}>
                {fluxOption.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.fluxDiffFooter,
          {paddingBottom: Math.max(fluxInsets.bottom, 12)},
        ]}>
        <Pressable
          disabled={!fluxCanStart}
          onPress={() => {
            if (!fluxSelectedTextId) {
              return;
            }
            fluxNavigation.navigate(
              'FluxRead',
              {
                fluxCategoryId:
                  fluxRoute.params
                    .fluxCategoryId,
                fluxPassageId:
                  fluxSelectedTextId,
                fluxScrollSpeed,
                fluxPassageSize,
              },
            );
          }}
          style={({pressed}) => [
            styles.fluxDiffStartWrap,
            pressed && fluxCanStart && {opacity: 0.9},
          ]}>
          {fluxCanStart ? (
            <LinearGradient
              colors={fluxBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.fluxDiffStartBtn}>
              <Text style={styles.fluxDiffStartTextActive}>
                Start
              </Text>
            </LinearGradient>
          ) : (
            <View style={styles.fluxDiffStartBtnDisabled}>
              <Text style={styles.fluxDiffStartTextDisabled}>
                Select a Text First
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </SceneShell>
  );
};

export default FluxTierScreen;

const styles = StyleSheet.create({
  fluxDiffRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  fluxDiffScroll: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  fluxDiffHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  fluxDiffBackBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fluxDiffBackIcon: {
    fontSize: 22,
    color: '#F5F0E8',
    marginTop: -2,
  },
  fluxDiffTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  fluxDiffSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginTop: 2,
  },
  fluxDiffSectionLabel: {
    fontSize: 12,
    letterSpacing: 1.2,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 8,
  },
  fluxDiffTextRow: {
    backgroundColor: 'rgba(58, 52, 53, 0.5)',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8,
  },
  fluxDiffTextRowActive: {
    borderColor: '#FF9900',
  },
  fluxDiffTextRowLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  fluxDiffOptionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  fluxDiffOptionCard: {
    flex: 1,
    backgroundColor: 'rgba(58, 52, 53, 0.5)',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
  },
  fluxDiffSizeCard: {
    paddingVertical: 10,
  },
  fluxDiffOptionCardActive: {
    backgroundColor: 'rgba(255, 153, 0, 0.15)',
    borderColor: '#FF9900',
  },
  fluxDiffOptionEmoji: {
    fontSize: 18,
    marginBottom: 6,
  },
  fluxDiffSizeLetter: {
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 4,
  },
  fluxDiffOptionLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#9B8E8F',
  },
  fluxDiffOptionLabelActive: {
    color: '#FF9900',
  },
  fluxDiffFooter: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#231F20',
  },
  fluxDiffStartWrap: {
    width: '100%',
  },
  fluxDiffStartBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fluxDiffStartBtnDisabled: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3435',
  },
  fluxDiffStartTextActive: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
  },
  fluxDiffStartTextDisabled: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#9B8E8F',
  },
});
