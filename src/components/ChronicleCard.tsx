import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import type {ChronicleEntry} from '../data/chronicle';
import {chronicleGetRealm} from '../data/chronicle';

type ChronicleCardProps = {
  chronicleEntry: ChronicleEntry;
  chronicleIsFavorite: boolean;
  chronicleFeatured?: boolean;
  chronicleOnPress: () => void;
  chronicleOnToggleFavorite: () => void;
};

const ChronicleCard = ({
  chronicleEntry,
  chronicleIsFavorite,
  chronicleFeatured,
  chronicleOnPress,
  chronicleOnToggleFavorite,
}: ChronicleCardProps) => {
  const chronicleCategory = chronicleGetRealm(
    chronicleEntry.chronicleEntryCategoryId,
  );

  const chronicleShare = async () => {
    await Share.share({
      message: `${chronicleEntry.chronicleEntryTitle}\n\n${chronicleEntry.chronicleEntryDescription}`,
    });
  };

  return (
    <View
      style={[
        styles.chronicleCard,
        chronicleIsFavorite &&
          styles.chronicleCardLiked,
      ]}>
      {chronicleFeatured && (
        <Text style={styles.chronicleCardFeaturedLabel}>
          ⭐ Featured Story
        </Text>
      )}

      <Pressable
        onPress={chronicleOnPress}
        style={({pressed}) => [
          styles.chronicleCardPressable,
          pressed && styles.chronicleCardPressed,
        ]}>
        <View style={styles.chronicleCardRow}>
          <View
            style={[
              styles.chronicleCardIcon,
              chronicleCategory && {
                backgroundColor:
                  chronicleCategory.chronicleCategoryBg,
                borderColor:
                  chronicleCategory
                    .chronicleCategoryBorder,
              },
            ]}>
            <Text style={styles.chronicleCardEmoji}>
              {chronicleEntry.chronicleEntryEmoji}
            </Text>
          </View>

          <View style={styles.chronicleCardBody}>
            {chronicleCategory && (
              <View
                style={[
                  styles.chronicleCardBadge,
                  {
                    backgroundColor:
                      chronicleCategory
                        .chronicleCategoryBg,
                  },
                ]}>
                <Text
                  style={[
                    styles.chronicleCardBadgeText,
                    {
                      color:
                        chronicleCategory
                          .chronicleCategoryColor,
                    },
                  ]}>
                  {
                    chronicleCategory
                      .chronicleCategoryLabel
                  }
                </Text>
              </View>
            )}

            <Text
              style={styles.chronicleCardTitle}
              numberOfLines={2}>
              {chronicleEntry.chronicleEntryTitle.toUpperCase()}
            </Text>

            <Text
              style={styles.chronicleCardDesc}
              numberOfLines={2}>
              {
                chronicleEntry.chronicleEntryDescription
              }
            </Text>

            <View style={styles.chronicleCardMeta}>
              <Text style={styles.chronicleCardMetaIcon}>🕐</Text>
              <Text style={styles.chronicleCardMetaText}>
                {chronicleEntry.chronicleEntryReadMin}{' '}
                min
              </Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View style={styles.chronicleCardActions}>
        <Pressable
          onPress={chronicleOnToggleFavorite}
          style={styles.chronicleCardActionBtn}>
          <Image
            source={
              chronicleIsFavorite
                ? require('../../elements/images/icon-favorite-on.png')
                : require('../../elements/images/icon-favorite-off.png')
            }
          />
        </Pressable>
        <Pressable
          onPress={chronicleShare}
          style={styles.chronicleCardActionBtn}>
          <Image source={require('../../elements/images/icon-share.png')} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChronicleCard;

const styles = StyleSheet.create({
  chronicleCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 0,
    padding: 16,
    marginBottom: 12,
    position: 'relative',
  },
  chronicleCardLiked: {
    backgroundColor: 'rgba(255, 153, 0, 0.1)',
    borderWidth: 1.1,
    borderColor: '#FF9900',
  },
  chronicleCardPressable: {
    paddingRight: 88,
  },
  chronicleCardPressed: {
    opacity: 0.9,
  },
  chronicleCardFeaturedLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF9900',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  chronicleCardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  chronicleCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 18,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  chronicleCardEmoji: {
    fontSize: 24,
  },
  chronicleCardBody: {
    flex: 1,
  },
  chronicleCardBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 6,
  },
  chronicleCardBadgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  chronicleCardTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  chronicleCardDesc: {
    fontSize: 11,
    lineHeight: 18,
    fontWeight: '500',
    color: '#9B8E8F',
    marginBottom: 10,
  },
  chronicleCardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chronicleCardMetaIcon: {
    fontSize: 10,
  },
  chronicleCardMetaText: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  chronicleCardActions: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    gap: 8,
  },
  chronicleCardActionBtn: {
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
