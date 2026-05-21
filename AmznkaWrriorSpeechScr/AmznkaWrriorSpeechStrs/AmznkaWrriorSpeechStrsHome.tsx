import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';
import AmznkaWrriorSpeechStrsCard from './AmznkaWrriorSpeechStrsCard';
import {
  amznkaWrriorSpeechStrsCategories,
  amznkaWrriorSpeechStrsFeaturedStory,
  amznkaWrriorSpeechStrsGetStory,
  amznkaWrriorSpeechStrsListStories,
  amznkaWrriorSpeechStrsStories,
} from './AmznkaWrriorSpeechStrsData';
import {
  amznkaWrriorSpeechStrsLoadFavorites,
  amznkaWrriorSpeechStrsSaveFavorites,
  amznkaWrriorSpeechStrsToggleFavoriteIds,
} from './AmznkaWrriorSpeechStrsFavorites';
import type {AmznkaWrriorSpeechStrsNavigation} from './AmznkaWrriorSpeechStrsTypes';

type AmznkaWrriorSpeechStrsHomeProps = {
  amznkaWrriorSpeechStrsNavigation: AmznkaWrriorSpeechStrsNavigation;
};

const AmznkaWrriorSpeechStrsHome = ({
  amznkaWrriorSpeechStrsNavigation,
}: AmznkaWrriorSpeechStrsHomeProps) => {
  const amznkaWrriorSpeechStrsInsets = useSafeAreaInsets();
  const [amznkaWrriorSpeechStrsFavorites, setAmznkaWrriorSpeechStrsFavorites] =
    useState<string[]>([]);
  const amznkaWrriorSpeechStrsTogglingRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      amznkaWrriorSpeechStrsLoadFavorites().then(
        setAmznkaWrriorSpeechStrsFavorites,
      );
    }, []),
  );

  const amznkaWrriorSpeechStrsHandleToggleFavorite = (
    amznkaWrriorSpeechStrsStoryId: string,
  ) => {
    if (amznkaWrriorSpeechStrsTogglingRef.current) {
      return;
    }
    amznkaWrriorSpeechStrsTogglingRef.current = true;
    setAmznkaWrriorSpeechStrsFavorites(amznkaWrriorSpeechStrsPrev => {
      const amznkaWrriorSpeechStrsNext =
        amznkaWrriorSpeechStrsToggleFavoriteIds(
          amznkaWrriorSpeechStrsStoryId,
          amznkaWrriorSpeechStrsPrev,
        );
      void amznkaWrriorSpeechStrsSaveFavorites(amznkaWrriorSpeechStrsNext);
      return amznkaWrriorSpeechStrsNext;
    });
    setTimeout(() => {
      amznkaWrriorSpeechStrsTogglingRef.current = false;
    }, 400);
  };

  const amznkaWrriorSpeechStrsOpenStory = (
    amznkaWrriorSpeechStrsStoryId: string,
  ) => {
    amznkaWrriorSpeechStrsNavigation.navigate('AmznkaWrriorSpeechStrsDetail', {
      amznkaWrriorSpeechStrsStoryId,
    });
  };

  const amznkaWrriorSpeechStrsFavoriteStories = amznkaWrriorSpeechStrsFavorites
    .map(amznkaWrriorSpeechStrsGetStory)
    .filter(
      (
        amznkaWrriorSpeechStrsStory,
      ): amznkaWrriorSpeechStrsStory is NonNullable<
        ReturnType<typeof amznkaWrriorSpeechStrsGetStory>
      > => amznkaWrriorSpeechStrsStory !== undefined,
    );

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechStrsHomeContent,
          {paddingTop: amznkaWrriorSpeechStrsInsets.top + 16},
        ]}>
        <Text style={styles.amznkaWrriorSpeechStrsHomeKicker}>
          Amazon Voice
        </Text>
        <Text style={styles.amznkaWrriorSpeechStrsHomeTitle}>Stories</Text>
        <Text style={styles.amznkaWrriorSpeechStrsHomeSubtitle}>
          Tales of power, voice and Amazon sisterhood
        </Text>

        <View style={styles.amznkaWrriorSpeechStrsHomeStatsRow}>
          <View style={styles.amznkaWrriorSpeechStrsHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatEmoji}>📖</Text>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatValue}>
              {amznkaWrriorSpeechStrsStories.length}
            </Text>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatLabel}>
              Stories
            </Text>
          </View>
          <View style={styles.amznkaWrriorSpeechStrsHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatEmoji}>❤️</Text>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatValue}>
              {amznkaWrriorSpeechStrsFavorites.length}
            </Text>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatLabel}>
              Favorites
            </Text>
          </View>
          <View style={styles.amznkaWrriorSpeechStrsHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatEmoji}>🏷️</Text>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatValue}>
              {amznkaWrriorSpeechStrsCategories.length}
            </Text>
            <Text style={styles.amznkaWrriorSpeechStrsHomeStatLabel}>
              Categories
            </Text>
          </View>
        </View>

        {amznkaWrriorSpeechStrsFavoriteStories.length > 0 && (
          <>
            <Text style={styles.amznkaWrriorSpeechStrsHomeSectionLabel}>
              ❤️ Favorites
            </Text>
            {amznkaWrriorSpeechStrsFavoriteStories.map(
              amznkaWrriorSpeechStrsStory => (
                <AmznkaWrriorSpeechStrsCard
                  key={`fav-${amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId}`}
                  amznkaWrriorSpeechStrsStory={amznkaWrriorSpeechStrsStory}
                  amznkaWrriorSpeechStrsIsFavorite
                  amznkaWrriorSpeechStrsOnPress={() =>
                    amznkaWrriorSpeechStrsOpenStory(
                      amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
                    )
                  }
                  amznkaWrriorSpeechStrsOnToggleFavorite={() =>
                    amznkaWrriorSpeechStrsHandleToggleFavorite(
                      amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
                    )
                  }
                />
              ),
            )}
          </>
        )}

        {!amznkaWrriorSpeechStrsFavorites.includes(
          amznkaWrriorSpeechStrsFeaturedStory.amznkaWrriorSpeechStrsStoryId,
        ) && (
          <AmznkaWrriorSpeechStrsCard
            amznkaWrriorSpeechStrsStory={amznkaWrriorSpeechStrsFeaturedStory}
            amznkaWrriorSpeechStrsIsFavorite={false}
            amznkaWrriorSpeechStrsFeatured
            amznkaWrriorSpeechStrsOnPress={() =>
              amznkaWrriorSpeechStrsOpenStory(
                amznkaWrriorSpeechStrsFeaturedStory.amznkaWrriorSpeechStrsStoryId,
              )
            }
            amznkaWrriorSpeechStrsOnToggleFavorite={() =>
              amznkaWrriorSpeechStrsHandleToggleFavorite(
                amznkaWrriorSpeechStrsFeaturedStory.amznkaWrriorSpeechStrsStoryId,
              )
            }
          />
        )}

        {amznkaWrriorSpeechStrsListStories
          .filter(
            amznkaWrriorSpeechStrsStory =>
              !amznkaWrriorSpeechStrsFavorites.includes(
                amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
              ),
          )
          .map(amznkaWrriorSpeechStrsStory => (
            <AmznkaWrriorSpeechStrsCard
              key={amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId}
              amznkaWrriorSpeechStrsStory={amznkaWrriorSpeechStrsStory}
              amznkaWrriorSpeechStrsIsFavorite={amznkaWrriorSpeechStrsFavorites.includes(
                amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
              )}
              amznkaWrriorSpeechStrsOnPress={() =>
                amznkaWrriorSpeechStrsOpenStory(
                  amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
                )
              }
              amznkaWrriorSpeechStrsOnToggleFavorite={() =>
                amznkaWrriorSpeechStrsHandleToggleFavorite(
                  amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
                )
              }
            />
          ))}
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechStrsHome;

const styles = StyleSheet.create({
  amznkaWrriorSpeechStrsHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amznkaWrriorSpeechStrsHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amznkaWrriorSpeechStrsHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechStrsHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amznkaWrriorSpeechStrsHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  amznkaWrriorSpeechStrsHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechStrsHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  amznkaWrriorSpeechStrsHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechStrsHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amznkaWrriorSpeechStrsHomeSectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#FF9900',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
});
