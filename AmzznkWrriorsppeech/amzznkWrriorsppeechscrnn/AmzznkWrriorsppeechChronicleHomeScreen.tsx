import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';
import {AmzznkWrriorsppeechChronicleCard} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechChronicleCard';
import {
  amzznkWrriorsppeechChronicleRealms,
  amzznkWrriorsppeechChronicleFeaturedEntry,
  amzznkWrriorsppeechChronicleGetEntry,
  amzznkWrriorsppeechChronicleListEntries,
  amzznkWrriorsppeechChronicleEntries,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleCatalog';
import {
  amzznkWrriorsppeechChronicleLoadFavorites,
  amzznkWrriorsppeechChronicleSaveFavorites,
  amzznkWrriorsppeechChronicleToggleFavoriteIds,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleFavorites';
import type {AmzznkWrriorsppeechChronicleNavigation} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleTypes';

type AmzznkWrriorsppeechChronicleHomeScreenProps = {
  amzznkWrriorsppeechChronicleNavigation: AmzznkWrriorsppeechChronicleNavigation;
};

export function AmzznkWrriorsppeechChronicleHomeScreen({
  amzznkWrriorsppeechChronicleNavigation,
}: AmzznkWrriorsppeechChronicleHomeScreenProps) {
  const amzznkWrriorsppeechChronicleInsets = useSafeAreaInsets();
  const [chronicleFavorites, setChronicleFavorites] =
    useState<string[]>([]);
  const amzznkWrriorsppeechChronicleTogglingRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechChronicleLoadFavorites().then(
        setChronicleFavorites,
      );
    }, []),
  );

  const amzznkWrriorsppeechChronicleHandleToggleFavorite = (
    amzznkWrriorsppeechChronicleEntryId: string,
  ) => {
    if (amzznkWrriorsppeechChronicleTogglingRef.current) {
      return;
    }
    amzznkWrriorsppeechChronicleTogglingRef.current = true;
    setChronicleFavorites(amzznkWrriorsppeechChroniclePrev => {
      const amzznkWrriorsppeechChronicleNext =
        amzznkWrriorsppeechChronicleToggleFavoriteIds(
          amzznkWrriorsppeechChronicleEntryId,
          amzznkWrriorsppeechChroniclePrev,
        );
      void amzznkWrriorsppeechChronicleSaveFavorites(amzznkWrriorsppeechChronicleNext);
      return amzznkWrriorsppeechChronicleNext;
    });
    setTimeout(() => {
      amzznkWrriorsppeechChronicleTogglingRef.current = false;
    }, 400);
  };

  const amzznkWrriorsppeechChronicleOpenEntry = (
    amzznkWrriorsppeechChronicleEntryId: string,
  ) => {
    amzznkWrriorsppeechChronicleNavigation.navigate('ChronicleDetail', {
      amzznkWrriorsppeechChronicleEntryId,
    });
  };

  const amzznkWrriorsppeechChronicleFavoriteEntries = chronicleFavorites
    .map(amzznkWrriorsppeechChronicleGetEntry)
    .filter(
      (
        amzznkWrriorsppeechChronicleEntry,
      ): amzznkWrriorsppeechChronicleEntry is NonNullable<
        ReturnType<typeof amzznkWrriorsppeechChronicleGetEntry>
      > => amzznkWrriorsppeechChronicleEntry !== undefined,
    );

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechChronicleHomeContent,
          {paddingTop: amzznkWrriorsppeechChronicleInsets.top + 16},
        ]}>
        <Text style={styles.amzznkWrriorsppeechChronicleHomeKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.amzznkWrriorsppeechChronicleHomeTitle}>Chronicles</Text>
        <Text style={styles.amzznkWrriorsppeechChronicleHomeSubtitle}>
          Tales of power, voice and Amazo sisterhood
        </Text>

        <View style={styles.amzznkWrriorsppeechChronicleHomeStatsRow}>
          <View style={styles.amzznkWrriorsppeechChronicleHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatEmoji}>📖</Text>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatValue}>
              {amzznkWrriorsppeechChronicleEntries.length}
            </Text>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatLabel}>
              Stories
            </Text>
          </View>
          <View style={styles.amzznkWrriorsppeechChronicleHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatEmoji}>❤️</Text>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatValue}>
              {chronicleFavorites.length}
            </Text>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatLabel}>
              Favorites
            </Text>
          </View>
          <View style={styles.amzznkWrriorsppeechChronicleHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatEmoji}>🏷️</Text>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatValue}>
              {amzznkWrriorsppeechChronicleRealms.length}
            </Text>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeStatLabel}>
              Categories
            </Text>
          </View>
        </View>

        {amzznkWrriorsppeechChronicleFavoriteEntries.length > 0 && (
          <>
            <Text style={styles.amzznkWrriorsppeechChronicleHomeSectionLabel}>
              ❤️ Favorites
            </Text>
            {amzznkWrriorsppeechChronicleFavoriteEntries.map(
              amzznkWrriorsppeechChronicleEntry => (
                <AmzznkWrriorsppeechChronicleCard
                  key={`fav-${amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId}`}
                  amzznkWrriorsppeechChronicleEntry={amzznkWrriorsppeechChronicleEntry}
                  chronicleIsFavorite
                  amzznkWrriorsppeechChronicleOnPress={() =>
                    amzznkWrriorsppeechChronicleOpenEntry(
                      amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
                    )
                  }
                  amzznkWrriorsppeechChronicleOnToggleFavorite={() =>
                    amzznkWrriorsppeechChronicleHandleToggleFavorite(
                      amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
                    )
                  }
                />
              ),
            )}
          </>
        )}

        {!chronicleFavorites.includes(
          amzznkWrriorsppeechChronicleFeaturedEntry.amzznkWrriorsppeechChronicleEntryId,
        ) && (
          <AmzznkWrriorsppeechChronicleCard
            amzznkWrriorsppeechChronicleEntry={amzznkWrriorsppeechChronicleFeaturedEntry}
            chronicleIsFavorite={false}
            amzznkWrriorsppeechChronicleFeatured
            amzznkWrriorsppeechChronicleOnPress={() =>
              amzznkWrriorsppeechChronicleOpenEntry(
                amzznkWrriorsppeechChronicleFeaturedEntry.amzznkWrriorsppeechChronicleEntryId,
              )
            }
            amzznkWrriorsppeechChronicleOnToggleFavorite={() =>
              amzznkWrriorsppeechChronicleHandleToggleFavorite(
                amzznkWrriorsppeechChronicleFeaturedEntry.amzznkWrriorsppeechChronicleEntryId,
              )
            }
          />
        )}

        {amzznkWrriorsppeechChronicleListEntries
          .filter(
            amzznkWrriorsppeechChronicleEntry =>
              !chronicleFavorites.includes(
                amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
              ),
          )
          .map(amzznkWrriorsppeechChronicleEntry => (
            <AmzznkWrriorsppeechChronicleCard
              key={amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId}
              amzznkWrriorsppeechChronicleEntry={amzznkWrriorsppeechChronicleEntry}
              chronicleIsFavorite={chronicleFavorites.includes(
                amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
              )}
              amzznkWrriorsppeechChronicleOnPress={() =>
                amzznkWrriorsppeechChronicleOpenEntry(
                  amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
                )
              }
              amzznkWrriorsppeechChronicleOnToggleFavorite={() =>
                amzznkWrriorsppeechChronicleHandleToggleFavorite(
                  amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
                )
              }
            />
          ))}
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechChronicleHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amzznkWrriorsppeechChronicleHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amzznkWrriorsppeechChronicleHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechChronicleHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amzznkWrriorsppeechChronicleHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  amzznkWrriorsppeechChronicleHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechChronicleHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  amzznkWrriorsppeechChronicleHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechChronicleHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amzznkWrriorsppeechChronicleHomeSectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#FF9900',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
});
