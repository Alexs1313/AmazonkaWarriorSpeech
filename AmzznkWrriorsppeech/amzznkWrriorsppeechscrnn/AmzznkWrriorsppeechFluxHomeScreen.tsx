import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {AmzznkWrriorsppeechFluxNavigation} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxTypes';
import {
  amzznkWrriorsppeechFluxLanes,
  amzznkWrriorsppeechFluxPassageCount,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxCatalog';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';

type AmzznkWrriorsppeechFluxHomeScreenProps = {
  amzznkWrriorsppeechFluxNavigation: AmzznkWrriorsppeechFluxNavigation;
};

export function AmzznkWrriorsppeechFluxHomeScreen({
  amzznkWrriorsppeechFluxNavigation,
}: AmzznkWrriorsppeechFluxHomeScreenProps) {
  const amzznkWrriorsppeechFluxInsets = useSafeAreaInsets();

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechFluxHomeScroll,
          {paddingTop: amzznkWrriorsppeechFluxInsets.top + 16},
        ]}>
        <Text style={styles.amzznkWrriorsppeechFluxHomeKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.amzznkWrriorsppeechFluxHomeTitle}>Flow Reader</Text>
        <Text style={styles.amzznkWrriorsppeechFluxHomeSubtitle}>
          Train your voice with scrolling warrior texts
        </Text>

        <View style={styles.amzznkWrriorsppeechFluxHomeStatsRow}>
          <View style={styles.amzznkWrriorsppeechFluxHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatEmoji}>📜</Text>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatValue}>
              {amzznkWrriorsppeechFluxPassageCount}
            </Text>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatLabel}>
              Texts
            </Text>
          </View>
          <View style={styles.amzznkWrriorsppeechFluxHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatEmoji}>📂</Text>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatValue}>3</Text>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatLabel}>
              Categories
            </Text>
          </View>
          <View style={styles.amzznkWrriorsppeechFluxHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatEmoji}>🔁</Text>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatValue}>∞</Text>
            <Text style={styles.amzznkWrriorsppeechFluxHomeStatLabel}>
              Sessions
            </Text>
          </View>
        </View>

        <Text style={styles.amzznkWrriorsppeechFluxHomeSectionLabel}>
          Choose Category
        </Text>

        {amzznkWrriorsppeechFluxLanes.map(
          amzznkWrriorsppeechFluxCategory => (
            <Pressable
              key={
                amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryId
              }
              onPress={() =>
                amzznkWrriorsppeechFluxNavigation.navigate(
                  'FluxTier',
                  {
                    amzznkWrriorsppeechFluxCategoryId:
                      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryId,
                  },
                )
              }
              style={({pressed}) => [
                styles.amzznkWrriorsppeechFluxHomeCategoryCard,
                pressed && styles.amzznkWrriorsppeechFluxHomeCategoryPressed,
              ]}>
              <View
                style={[
                  styles.amzznkWrriorsppeechFluxHomeCategoryIcon,
                  {
                    backgroundColor:
                      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryIconBg,
                    borderColor:
                      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryIconBorder,
                  },
                ]}>
                <Text style={styles.amzznkWrriorsppeechFluxHomeCategoryEmoji}>
                  {
                    amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryEmoji
                  }
                </Text>
              </View>
              <View style={styles.amzznkWrriorsppeechFluxHomeCategoryBody}>
                <Text style={styles.amzznkWrriorsppeechFluxHomeCategoryTitle}>
                  {amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryTitle.toUpperCase()}
                </Text>
                <Text style={styles.amzznkWrriorsppeechFluxHomeCategoryDesc}>
                  {
                    amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryDescription
                  }
                </Text>
                <View
                  style={[
                    styles.amzznkWrriorsppeechFluxHomeCategoryBadge,
                    {
                      backgroundColor:
                        amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryBadgeBg,
                      borderColor:
                        amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryBadgeBorder,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.amzznkWrriorsppeechFluxHomeCategoryBadgeText,
                      {
                        color:
                          amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryBadgeColor,
                      },
                    ]}>
                    {
                      amzznkWrriorsppeechFluxCategory
                        .amzznkWrriorsppeechFluxCategoryTexts.length
                    }{' '}
                    texts available
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../assets/images/amzznkWrriorsppeechChevronRight.png')}
                style={styles.amzznkWrriorsppeechFluxHomeCategoryChevron}
              />
            </Pressable>
          ),
        )}

        <View style={styles.amzznkWrriorsppeechFluxHomeTipCard}>
          <Text style={styles.amzznkWrriorsppeechFluxHomeTipEmoji}>💡</Text>
          <Text style={styles.amzznkWrriorsppeechFluxHomeTipText}>
            <Text style={styles.amzznkWrriorsppeechFluxHomeTipBold}>
              Lyra's tip:{' '}
            </Text>
            Start with Queen's Advice for calm, expressive delivery. Warrior
            Speeches build power and projection.
          </Text>
        </View>
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechFluxHomeRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechFluxHomeScroll: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amzznkWrriorsppeechFluxHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amzznkWrriorsppeechFluxHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechFluxHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amzznkWrriorsppeechFluxHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  amzznkWrriorsppeechFluxHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechFluxHomeStatEmoji: {
    fontSize: 14,
    marginBottom: 8,
  },
  amzznkWrriorsppeechFluxHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechFluxHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amzznkWrriorsppeechFluxHomeSectionLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amzznkWrriorsppeechFluxHomeCategoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
  },
  amzznkWrriorsppeechFluxHomeCategoryPressed: {
    opacity: 0.88,
  },
  amzznkWrriorsppeechFluxHomeCategoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  amzznkWrriorsppeechFluxHomeCategoryEmoji: {
    fontSize: 28,
  },
  amzznkWrriorsppeechFluxHomeCategoryBody: {
    flex: 1,
    paddingRight: 8,
  },
  amzznkWrriorsppeechFluxHomeCategoryTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechFluxHomeCategoryDesc: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#9B8E8F',
    fontWeight: '500',
    marginBottom: 8,
  },
  amzznkWrriorsppeechFluxHomeCategoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderWidth: 1.1,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  amzznkWrriorsppeechFluxHomeCategoryBadgeText: {
    fontSize: 10,
    fontWeight: '600',
  },
  amzznkWrriorsppeechFluxHomeCategoryChevron: {
    width: 20,
    height: 20,
  },
  amzznkWrriorsppeechFluxHomeTipCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 153, 0, 0.08)',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    padding: 14,
    marginTop: 8,
  },
  amzznkWrriorsppeechFluxHomeTipEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  amzznkWrriorsppeechFluxHomeTipText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechFluxHomeTipBold: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
