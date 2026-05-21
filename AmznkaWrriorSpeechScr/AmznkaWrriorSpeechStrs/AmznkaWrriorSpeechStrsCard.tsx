import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import type {AmznkaWrriorSpeechStrsStory} from './AmznkaWrriorSpeechStrsData';
import {amznkaWrriorSpeechStrsGetCategory} from './AmznkaWrriorSpeechStrsData';

type AmznkaWrriorSpeechStrsCardProps = {
  amznkaWrriorSpeechStrsStory: AmznkaWrriorSpeechStrsStory;
  amznkaWrriorSpeechStrsIsFavorite: boolean;
  amznkaWrriorSpeechStrsFeatured?: boolean;
  amznkaWrriorSpeechStrsOnPress: () => void;
  amznkaWrriorSpeechStrsOnToggleFavorite: () => void;
};

const AmznkaWrriorSpeechStrsCard = ({
  amznkaWrriorSpeechStrsStory,
  amznkaWrriorSpeechStrsIsFavorite,
  amznkaWrriorSpeechStrsFeatured,
  amznkaWrriorSpeechStrsOnPress,
  amznkaWrriorSpeechStrsOnToggleFavorite,
}: AmznkaWrriorSpeechStrsCardProps) => {
  const amznkaWrriorSpeechStrsCategory = amznkaWrriorSpeechStrsGetCategory(
    amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryCategoryId,
  );

  const amznkaWrriorSpeechStrsShare = async () => {
    await Share.share({
      message: `${amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryTitle}\n\n${amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryDescription}`,
    });
  };

  return (
    <View
      style={[
        styles.amznkaWrriorSpeechStrsCard,
        amznkaWrriorSpeechStrsIsFavorite &&
          styles.amznkaWrriorSpeechStrsCardLiked,
      ]}>
      {amznkaWrriorSpeechStrsFeatured && (
        <Text style={styles.amznkaWrriorSpeechStrsCardFeaturedLabel}>
          ⭐ Featured Story
        </Text>
      )}

      <Pressable
        onPress={amznkaWrriorSpeechStrsOnPress}
        style={({pressed}) => [
          styles.amznkaWrriorSpeechStrsCardPressable,
          pressed && styles.amznkaWrriorSpeechStrsCardPressed,
        ]}>
        <View style={styles.amznkaWrriorSpeechStrsCardRow}>
          <View
            style={[
              styles.amznkaWrriorSpeechStrsCardIcon,
              amznkaWrriorSpeechStrsCategory && {
                backgroundColor:
                  amznkaWrriorSpeechStrsCategory.amznkaWrriorSpeechStrsCategoryBg,
                borderColor:
                  amznkaWrriorSpeechStrsCategory
                    .amznkaWrriorSpeechStrsCategoryBorder,
              },
            ]}>
            <Text style={styles.amznkaWrriorSpeechStrsCardEmoji}>
              {amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryEmoji}
            </Text>
          </View>

          <View style={styles.amznkaWrriorSpeechStrsCardBody}>
            {amznkaWrriorSpeechStrsCategory && (
              <View
                style={[
                  styles.amznkaWrriorSpeechStrsCardBadge,
                  {
                    backgroundColor:
                      amznkaWrriorSpeechStrsCategory
                        .amznkaWrriorSpeechStrsCategoryBg,
                  },
                ]}>
                <Text
                  style={[
                    styles.amznkaWrriorSpeechStrsCardBadgeText,
                    {
                      color:
                        amznkaWrriorSpeechStrsCategory
                          .amznkaWrriorSpeechStrsCategoryColor,
                    },
                  ]}>
                  {
                    amznkaWrriorSpeechStrsCategory
                      .amznkaWrriorSpeechStrsCategoryLabel
                  }
                </Text>
              </View>
            )}

            <Text
              style={styles.amznkaWrriorSpeechStrsCardTitle}
              numberOfLines={2}>
              {amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryTitle.toUpperCase()}
            </Text>

            <Text
              style={styles.amznkaWrriorSpeechStrsCardDesc}
              numberOfLines={2}>
              {
                amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryDescription
              }
            </Text>

            <View style={styles.amznkaWrriorSpeechStrsCardMeta}>
              <Text style={styles.amznkaWrriorSpeechStrsCardMetaIcon}>🕐</Text>
              <Text style={styles.amznkaWrriorSpeechStrsCardMetaText}>
                {amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryReadMin}{' '}
                min
              </Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View style={styles.amznkaWrriorSpeechStrsCardActions}>
        <Pressable
          onPress={amznkaWrriorSpeechStrsOnToggleFavorite}
          style={styles.amznkaWrriorSpeechStrsCardActionBtn}>
          <Image
            source={
              amznkaWrriorSpeechStrsIsFavorite
                ? require('../../assets/i/amznkawrliked.png')
                : require('../../assets/i/amznkawrlike.png')
            }
          />
        </Pressable>
        <Pressable
          onPress={amznkaWrriorSpeechStrsShare}
          style={styles.amznkaWrriorSpeechStrsCardActionBtn}>
          <Image source={require('../../assets/i/amznkawrshare.png')} />
        </Pressable>
      </View>
    </View>
  );
};

export default AmznkaWrriorSpeechStrsCard;

const styles = StyleSheet.create({
  amznkaWrriorSpeechStrsCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 0,
    padding: 16,
    marginBottom: 12,
    position: 'relative',
  },
  amznkaWrriorSpeechStrsCardLiked: {
    backgroundColor: 'rgba(255, 153, 0, 0.1)',
    borderWidth: 1.1,
    borderColor: '#FF9900',
  },
  amznkaWrriorSpeechStrsCardPressable: {
    paddingRight: 88,
  },
  amznkaWrriorSpeechStrsCardPressed: {
    opacity: 0.9,
  },
  amznkaWrriorSpeechStrsCardFeaturedLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF9900',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amznkaWrriorSpeechStrsCardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  amznkaWrriorSpeechStrsCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 18,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  amznkaWrriorSpeechStrsCardEmoji: {
    fontSize: 24,
  },
  amznkaWrriorSpeechStrsCardBody: {
    flex: 1,
  },
  amznkaWrriorSpeechStrsCardBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 6,
  },
  amznkaWrriorSpeechStrsCardBadgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  amznkaWrriorSpeechStrsCardTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechStrsCardDesc: {
    fontSize: 11,
    lineHeight: 18,
    fontWeight: '500',
    color: '#9B8E8F',
    marginBottom: 10,
  },
  amznkaWrriorSpeechStrsCardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  amznkaWrriorSpeechStrsCardMetaIcon: {
    fontSize: 10,
  },
  amznkaWrriorSpeechStrsCardMetaText: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStrsCardActions: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    gap: 8,
  },
  amznkaWrriorSpeechStrsCardActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
