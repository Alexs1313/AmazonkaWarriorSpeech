import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SceneShell from '../../components/Shell';
import ChronicleCard from '../../components/ChronicleCard';
import {
  chronicleRealms,
  chronicleFeaturedEntry,
  chronicleGetEntry,
  chronicleListEntries,
  chronicleEntries,
} from '../../data/chronicle';
import {
  chronicleLoadFavorites,
  chronicleSaveFavorites,
  chronicleToggleFavoriteIds,
} from '../../data/chronicleFavorites';
import type {ChronicleNavigation} from '../../types/chronicle';

type ChronicleHomeScreenProps = {
  chronicleNavigation: ChronicleNavigation;
};

const ChronicleHomeScreen = ({
  chronicleNavigation,
}: ChronicleHomeScreenProps) => {
  const chronicleInsets = useSafeAreaInsets();
  const [chronicleFavorites, setChronicleFavorites] =
    useState<string[]>([]);
  const chronicleTogglingRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      chronicleLoadFavorites().then(
        setChronicleFavorites,
      );
    }, []),
  );

  const chronicleHandleToggleFavorite = (
    chronicleEntryId: string,
  ) => {
    if (chronicleTogglingRef.current) {
      return;
    }
    chronicleTogglingRef.current = true;
    setChronicleFavorites(chroniclePrev => {
      const chronicleNext =
        chronicleToggleFavoriteIds(
          chronicleEntryId,
          chroniclePrev,
        );
      void chronicleSaveFavorites(chronicleNext);
      return chronicleNext;
    });
    setTimeout(() => {
      chronicleTogglingRef.current = false;
    }, 400);
  };

  const chronicleOpenEntry = (
    chronicleEntryId: string,
  ) => {
    chronicleNavigation.navigate('ChronicleDetail', {
      chronicleEntryId,
    });
  };

  const chronicleFavoriteEntries = chronicleFavorites
    .map(chronicleGetEntry)
    .filter(
      (
        chronicleEntry,
      ): chronicleEntry is NonNullable<
        ReturnType<typeof chronicleGetEntry>
      > => chronicleEntry !== undefined,
    );

  return (
    <SceneShell>
      <View
        style={[
          styles.chronicleHomeContent,
          {paddingTop: chronicleInsets.top + 16},
        ]}>
        <Text style={styles.chronicleHomeKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.chronicleHomeTitle}>Chronicles</Text>
        <Text style={styles.chronicleHomeSubtitle}>
          Tales of power, voice and Amazonka sisterhood
        </Text>

        <View style={styles.chronicleHomeStatsRow}>
          <View style={styles.chronicleHomeStatCard}>
            <Text style={styles.chronicleHomeStatEmoji}>📖</Text>
            <Text style={styles.chronicleHomeStatValue}>
              {chronicleEntries.length}
            </Text>
            <Text style={styles.chronicleHomeStatLabel}>
              Stories
            </Text>
          </View>
          <View style={styles.chronicleHomeStatCard}>
            <Text style={styles.chronicleHomeStatEmoji}>❤️</Text>
            <Text style={styles.chronicleHomeStatValue}>
              {chronicleFavorites.length}
            </Text>
            <Text style={styles.chronicleHomeStatLabel}>
              Favorites
            </Text>
          </View>
          <View style={styles.chronicleHomeStatCard}>
            <Text style={styles.chronicleHomeStatEmoji}>🏷️</Text>
            <Text style={styles.chronicleHomeStatValue}>
              {chronicleRealms.length}
            </Text>
            <Text style={styles.chronicleHomeStatLabel}>
              Categories
            </Text>
          </View>
        </View>

        {chronicleFavoriteEntries.length > 0 && (
          <>
            <Text style={styles.chronicleHomeSectionLabel}>
              ❤️ Favorites
            </Text>
            {chronicleFavoriteEntries.map(
              chronicleEntry => (
                <ChronicleCard
                  key={`fav-${chronicleEntry.chronicleEntryId}`}
                  chronicleEntry={chronicleEntry}
                  chronicleIsFavorite
                  chronicleOnPress={() =>
                    chronicleOpenEntry(
                      chronicleEntry.chronicleEntryId,
                    )
                  }
                  chronicleOnToggleFavorite={() =>
                    chronicleHandleToggleFavorite(
                      chronicleEntry.chronicleEntryId,
                    )
                  }
                />
              ),
            )}
          </>
        )}

        {!chronicleFavorites.includes(
          chronicleFeaturedEntry.chronicleEntryId,
        ) && (
          <ChronicleCard
            chronicleEntry={chronicleFeaturedEntry}
            chronicleIsFavorite={false}
            chronicleFeatured
            chronicleOnPress={() =>
              chronicleOpenEntry(
                chronicleFeaturedEntry.chronicleEntryId,
              )
            }
            chronicleOnToggleFavorite={() =>
              chronicleHandleToggleFavorite(
                chronicleFeaturedEntry.chronicleEntryId,
              )
            }
          />
        )}

        {chronicleListEntries
          .filter(
            chronicleEntry =>
              !chronicleFavorites.includes(
                chronicleEntry.chronicleEntryId,
              ),
          )
          .map(chronicleEntry => (
            <ChronicleCard
              key={chronicleEntry.chronicleEntryId}
              chronicleEntry={chronicleEntry}
              chronicleIsFavorite={chronicleFavorites.includes(
                chronicleEntry.chronicleEntryId,
              )}
              chronicleOnPress={() =>
                chronicleOpenEntry(
                  chronicleEntry.chronicleEntryId,
                )
              }
              chronicleOnToggleFavorite={() =>
                chronicleHandleToggleFavorite(
                  chronicleEntry.chronicleEntryId,
                )
              }
            />
          ))}
      </View>
    </SceneShell>
  );
};

export default ChronicleHomeScreen;

const styles = StyleSheet.create({
  chronicleHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  chronicleHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  chronicleHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  chronicleHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  chronicleHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  chronicleHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  chronicleHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  chronicleHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  chronicleHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  chronicleHomeSectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#FF9900',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
});
