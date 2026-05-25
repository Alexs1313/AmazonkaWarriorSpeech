import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {FluxNavigation} from '../../types/flux';
import {
  fluxLanes,
  fluxPassageCount,
} from '../../data/flux';
import SceneShell from '../../components/Shell';

type FluxHomeScreenProps = {
  fluxNavigation: FluxNavigation;
};

const FluxHomeScreen = ({
  fluxNavigation,
}: FluxHomeScreenProps) => {
  const fluxInsets = useSafeAreaInsets();

  return (
    <SceneShell>
      <View
        style={[
          styles.fluxHomeScroll,
          {paddingTop: fluxInsets.top + 16},
        ]}>
        <Text style={styles.fluxHomeKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.fluxHomeTitle}>Flow Reader</Text>
        <Text style={styles.fluxHomeSubtitle}>
          Train your voice with scrolling warrior texts
        </Text>

        <View style={styles.fluxHomeStatsRow}>
          <View style={styles.fluxHomeStatCard}>
            <Text style={styles.fluxHomeStatEmoji}>📜</Text>
            <Text style={styles.fluxHomeStatValue}>
              {fluxPassageCount}
            </Text>
            <Text style={styles.fluxHomeStatLabel}>
              Texts
            </Text>
          </View>
          <View style={styles.fluxHomeStatCard}>
            <Text style={styles.fluxHomeStatEmoji}>📂</Text>
            <Text style={styles.fluxHomeStatValue}>3</Text>
            <Text style={styles.fluxHomeStatLabel}>
              Categories
            </Text>
          </View>
          <View style={styles.fluxHomeStatCard}>
            <Text style={styles.fluxHomeStatEmoji}>🔁</Text>
            <Text style={styles.fluxHomeStatValue}>∞</Text>
            <Text style={styles.fluxHomeStatLabel}>
              Sessions
            </Text>
          </View>
        </View>

        <Text style={styles.fluxHomeSectionLabel}>
          Choose Category
        </Text>

        {fluxLanes.map(
          fluxCategory => (
            <Pressable
              key={
                fluxCategory.fluxCategoryId
              }
              onPress={() =>
                fluxNavigation.navigate(
                  'FluxTier',
                  {
                    fluxCategoryId:
                      fluxCategory.fluxCategoryId,
                  },
                )
              }
              style={({pressed}) => [
                styles.fluxHomeCategoryCard,
                pressed && styles.fluxHomeCategoryPressed,
              ]}>
              <View
                style={[
                  styles.fluxHomeCategoryIcon,
                  {
                    backgroundColor:
                      fluxCategory.fluxCategoryIconBg,
                    borderColor:
                      fluxCategory.fluxCategoryIconBorder,
                  },
                ]}>
                <Text style={styles.fluxHomeCategoryEmoji}>
                  {
                    fluxCategory.fluxCategoryEmoji
                  }
                </Text>
              </View>
              <View style={styles.fluxHomeCategoryBody}>
                <Text style={styles.fluxHomeCategoryTitle}>
                  {fluxCategory.fluxCategoryTitle.toUpperCase()}
                </Text>
                <Text style={styles.fluxHomeCategoryDesc}>
                  {
                    fluxCategory.fluxCategoryDescription
                  }
                </Text>
                <View
                  style={[
                    styles.fluxHomeCategoryBadge,
                    {
                      backgroundColor:
                        fluxCategory.fluxCategoryBadgeBg,
                      borderColor:
                        fluxCategory.fluxCategoryBadgeBorder,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.fluxHomeCategoryBadgeText,
                      {
                        color:
                          fluxCategory.fluxCategoryBadgeColor,
                      },
                    ]}>
                    {
                      fluxCategory
                        .fluxCategoryTexts.length
                    }{' '}
                    texts available
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../elements/images/chevron-right.png')}
                style={styles.fluxHomeCategoryChevron}
              />
            </Pressable>
          ),
        )}

        <View style={styles.fluxHomeTipCard}>
          <Text style={styles.fluxHomeTipEmoji}>💡</Text>
          <Text style={styles.fluxHomeTipText}>
            <Text style={styles.fluxHomeTipBold}>
              Lyra's tip:{' '}
            </Text>
            Start with Queen's Advice for calm, expressive delivery. Warrior
            Speeches build power and projection.
          </Text>
        </View>
      </View>
    </SceneShell>
  );
};

export default FluxHomeScreen;

const styles = StyleSheet.create({
  fluxHomeRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  fluxHomeScroll: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  fluxHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  fluxHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  fluxHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  fluxHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  fluxHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  fluxHomeStatEmoji: {
    fontSize: 14,
    marginBottom: 8,
  },
  fluxHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  fluxHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  fluxHomeSectionLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  fluxHomeCategoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
  },
  fluxHomeCategoryPressed: {
    opacity: 0.88,
  },
  fluxHomeCategoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  fluxHomeCategoryEmoji: {
    fontSize: 28,
  },
  fluxHomeCategoryBody: {
    flex: 1,
    paddingRight: 8,
  },
  fluxHomeCategoryTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  fluxHomeCategoryDesc: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#9B8E8F',
    fontWeight: '500',
    marginBottom: 8,
  },
  fluxHomeCategoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderWidth: 1.1,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  fluxHomeCategoryBadgeText: {
    fontSize: 10,
    fontWeight: '600',
  },
  fluxHomeCategoryChevron: {
    width: 20,
    height: 20,
  },
  fluxHomeTipCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 153, 0, 0.08)',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    padding: 14,
    marginTop: 8,
  },
  fluxHomeTipEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  fluxHomeTipText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    color: '#9B8E8F',
  },
  fluxHomeTipBold: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
