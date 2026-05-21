import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {AmznkaWrriorSpeechSuflNavigation} from './AmznkaWrriorSpeechSuflTypes';
import {
  amznkaWrriorSpeechSuflCategories,
  amznkaWrriorSpeechSuflTotalTexts,
} from './AmznkaWrriorSpeechSuflData';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';

type AmznkaWrriorSpeechSuflHomeProps = {
  amznkaWrriorSpeechSuflNavigation: AmznkaWrriorSpeechSuflNavigation;
};

const AmznkaWrriorSpeechSuflHome = ({
  amznkaWrriorSpeechSuflNavigation,
}: AmznkaWrriorSpeechSuflHomeProps) => {
  const amznkaWrriorSpeechSuflInsets = useSafeAreaInsets();

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechSuflHomeScroll,
          {paddingTop: amznkaWrriorSpeechSuflInsets.top + 16},
        ]}>
        <Text style={styles.amznkaWrriorSpeechSuflHomeKicker}>
          Amazon Voice
        </Text>
        <Text style={styles.amznkaWrriorSpeechSuflHomeTitle}>Sufleur</Text>
        <Text style={styles.amznkaWrriorSpeechSuflHomeSubtitle}>
          Train your voice with scrolling warrior texts
        </Text>

        <View style={styles.amznkaWrriorSpeechSuflHomeStatsRow}>
          <View style={styles.amznkaWrriorSpeechSuflHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatEmoji}>📜</Text>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatValue}>
              {amznkaWrriorSpeechSuflTotalTexts}
            </Text>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatLabel}>
              Texts
            </Text>
          </View>
          <View style={styles.amznkaWrriorSpeechSuflHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatEmoji}>📂</Text>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatValue}>3</Text>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatLabel}>
              Categories
            </Text>
          </View>
          <View style={styles.amznkaWrriorSpeechSuflHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatEmoji}>🔁</Text>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatValue}>∞</Text>
            <Text style={styles.amznkaWrriorSpeechSuflHomeStatLabel}>
              Sessions
            </Text>
          </View>
        </View>

        <Text style={styles.amznkaWrriorSpeechSuflHomeSectionLabel}>
          Choose Category
        </Text>

        {amznkaWrriorSpeechSuflCategories.map(
          amznkaWrriorSpeechSuflCategory => (
            <Pressable
              key={
                amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId
              }
              onPress={() =>
                amznkaWrriorSpeechSuflNavigation.navigate(
                  'AmznkaWrriorSpeechSuflDiff',
                  {
                    amznkaWrriorSpeechSuflCategoryId:
                      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId,
                  },
                )
              }
              style={({pressed}) => [
                styles.amznkaWrriorSpeechSuflHomeCategoryCard,
                pressed && styles.amznkaWrriorSpeechSuflHomeCategoryPressed,
              ]}>
              <View
                style={[
                  styles.amznkaWrriorSpeechSuflHomeCategoryIcon,
                  {
                    backgroundColor:
                      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryIconBg,
                    borderColor:
                      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryIconBorder,
                  },
                ]}>
                <Text style={styles.amznkaWrriorSpeechSuflHomeCategoryEmoji}>
                  {
                    amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryEmoji
                  }
                </Text>
              </View>
              <View style={styles.amznkaWrriorSpeechSuflHomeCategoryBody}>
                <Text style={styles.amznkaWrriorSpeechSuflHomeCategoryTitle}>
                  {amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryTitle.toUpperCase()}
                </Text>
                <Text style={styles.amznkaWrriorSpeechSuflHomeCategoryDesc}>
                  {
                    amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryDescription
                  }
                </Text>
                <View
                  style={[
                    styles.amznkaWrriorSpeechSuflHomeCategoryBadge,
                    {
                      backgroundColor:
                        amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryBadgeBg,
                      borderColor:
                        amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryBadgeBorder,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.amznkaWrriorSpeechSuflHomeCategoryBadgeText,
                      {
                        color:
                          amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryBadgeColor,
                      },
                    ]}>
                    {
                      amznkaWrriorSpeechSuflCategory
                        .amznkaWrriorSpeechSuflCategoryTexts.length
                    }{' '}
                    texts available
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../assets/i/amznkawrriorar.png')}
                style={styles.amznkaWrriorSpeechSuflHomeCategoryArrow}
              />
            </Pressable>
          ),
        )}

        <View style={styles.amznkaWrriorSpeechSuflHomeTipCard}>
          <Text style={styles.amznkaWrriorSpeechSuflHomeTipEmoji}>💡</Text>
          <Text style={styles.amznkaWrriorSpeechSuflHomeTipText}>
            <Text style={styles.amznkaWrriorSpeechSuflHomeTipBold}>
              Lyra's tip:{' '}
            </Text>
            Start with Queen's Advice for calm, expressive delivery. Warrior
            Speeches build power and projection.
          </Text>
        </View>
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechSuflHome;

const styles = StyleSheet.create({
  amznkaWrriorSpeechSuflHomeRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amznkaWrriorSpeechSuflHomeScroll: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amznkaWrriorSpeechSuflHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amznkaWrriorSpeechSuflHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechSuflHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amznkaWrriorSpeechSuflHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  amznkaWrriorSpeechSuflHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechSuflHomeStatEmoji: {
    fontSize: 14,
    marginBottom: 8,
  },
  amznkaWrriorSpeechSuflHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechSuflHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amznkaWrriorSpeechSuflHomeSectionLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amznkaWrriorSpeechSuflHomeCategoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
  },
  amznkaWrriorSpeechSuflHomeCategoryPressed: {
    opacity: 0.88,
  },
  amznkaWrriorSpeechSuflHomeCategoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  amznkaWrriorSpeechSuflHomeCategoryEmoji: {
    fontSize: 28,
  },
  amznkaWrriorSpeechSuflHomeCategoryBody: {
    flex: 1,
    paddingRight: 8,
  },
  amznkaWrriorSpeechSuflHomeCategoryTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechSuflHomeCategoryDesc: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#9B8E8F',
    fontWeight: '500',
    marginBottom: 8,
  },
  amznkaWrriorSpeechSuflHomeCategoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderWidth: 1.1,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  amznkaWrriorSpeechSuflHomeCategoryBadgeText: {
    fontSize: 10,
    fontWeight: '600',
  },
  amznkaWrriorSpeechSuflHomeCategoryChevron: {
    fontSize: 22,
    color: '#9B8E8F',
    fontWeight: '300',
  },
  amznkaWrriorSpeechSuflHomeTipCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 153, 0, 0.08)',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    padding: 14,
    marginTop: 8,
  },
  amznkaWrriorSpeechSuflHomeTipEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  amznkaWrriorSpeechSuflHomeTipText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechSuflHomeTipBold: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
