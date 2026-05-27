import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import type {AmzznkWrriorsppeechChronicleEntry} from './AmzznkWrriorsppeechchronicleCatalog';
import {amzznkWrriorsppeechChronicleGetRealm} from './AmzznkWrriorsppeechchronicleCatalog';

type AmzznkWrriorsppeechChronicleCardProps = {
  amzznkWrriorsppeechChronicleEntry: AmzznkWrriorsppeechChronicleEntry;
  chronicleIsFavorite: boolean;
  amzznkWrriorsppeechChronicleFeatured?: boolean;
  amzznkWrriorsppeechChronicleOnPress: () => void;
  amzznkWrriorsppeechChronicleOnToggleFavorite: () => void;
};

export function AmzznkWrriorsppeechChronicleCard({
  amzznkWrriorsppeechChronicleEntry,
  chronicleIsFavorite,
  amzznkWrriorsppeechChronicleFeatured,
  amzznkWrriorsppeechChronicleOnPress,
  amzznkWrriorsppeechChronicleOnToggleFavorite,
}: AmzznkWrriorsppeechChronicleCardProps) {
  const amzznkWrriorsppeechChronicleCategory = amzznkWrriorsppeechChronicleGetRealm(
    amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryCategoryId,
  );

  const amzznkWrriorsppeechChronicleShare = async () => {
    await Share.share({
      message: `${amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryTitle}\n\n${amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryDescription}`,
    });
  };

  return (
    <View
      style={[
        styles.amzznkWrriorsppeechChronicleCard,
        chronicleIsFavorite &&
          styles.amzznkWrriorsppeechChronicleCardLiked,
      ]}>
      {amzznkWrriorsppeechChronicleFeatured && (
        <Text style={styles.amzznkWrriorsppeechChronicleCardFeaturedLabel}>
          ⭐ Featured Story
        </Text>
      )}

      <Pressable
        onPress={amzznkWrriorsppeechChronicleOnPress}
        style={({pressed}) => [
          styles.amzznkWrriorsppeechChronicleCardPressable,
          pressed && styles.amzznkWrriorsppeechChronicleCardPressed,
        ]}>
        <View style={styles.amzznkWrriorsppeechChronicleCardRow}>
          <View
            style={[
              styles.amzznkWrriorsppeechChronicleCardIcon,
              amzznkWrriorsppeechChronicleCategory && {
                backgroundColor:
                  amzznkWrriorsppeechChronicleCategory.amzznkWrriorsppeechChronicleCategoryBg,
                borderColor:
                  amzznkWrriorsppeechChronicleCategory
                    .amzznkWrriorsppeechChronicleCategoryBorder,
              },
            ]}>
            <Text style={styles.amzznkWrriorsppeechChronicleCardEmoji}>
              {amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryEmoji}
            </Text>
          </View>

          <View style={styles.amzznkWrriorsppeechChronicleCardBody}>
            {amzznkWrriorsppeechChronicleCategory && (
              <View
                style={[
                  styles.amzznkWrriorsppeechChronicleCardBadge,
                  {
                    backgroundColor:
                      amzznkWrriorsppeechChronicleCategory
                        .amzznkWrriorsppeechChronicleCategoryBg,
                  },
                ]}>
                <Text
                  style={[
                    styles.amzznkWrriorsppeechChronicleCardBadgeText,
                    {
                      color:
                        amzznkWrriorsppeechChronicleCategory
                          .amzznkWrriorsppeechChronicleCategoryColor,
                    },
                  ]}>
                  {
                    amzznkWrriorsppeechChronicleCategory
                      .amzznkWrriorsppeechChronicleCategoryLabel
                  }
                </Text>
              </View>
            )}

            <Text
              style={styles.amzznkWrriorsppeechChronicleCardTitle}
              numberOfLines={2}>
              {amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryTitle.toUpperCase()}
            </Text>

            <Text
              style={styles.amzznkWrriorsppeechChronicleCardDesc}
              numberOfLines={2}>
              {
                amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryDescription
              }
            </Text>

            <View style={styles.amzznkWrriorsppeechChronicleCardMeta}>
              <Text style={styles.amzznkWrriorsppeechChronicleCardMetaIcon}>🕐</Text>
              <Text style={styles.amzznkWrriorsppeechChronicleCardMetaText}>
                {amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryReadMin}{' '}
                min
              </Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View style={styles.amzznkWrriorsppeechChronicleCardActions}>
        <Pressable
          onPress={amzznkWrriorsppeechChronicleOnToggleFavorite}
          style={styles.amzznkWrriorsppeechChronicleCardActionBtn}>
          <Image
            source={
              chronicleIsFavorite
                ? require('../../assets/images/amzznkWrriorsppeechIconFavoriteOn.png')
                : require('../../assets/images/amzznkWrriorsppeechIconFavoriteOff.png')
            }
          />
        </Pressable>
        <Pressable
          onPress={amzznkWrriorsppeechChronicleShare}
          style={styles.amzznkWrriorsppeechChronicleCardActionBtn}>
          <Image source={require('../../assets/images/amzznkWrriorsppeechIconShare.png')} />
        </Pressable>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechChronicleCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 0,
    padding: 16,
    marginBottom: 12,
    position: 'relative',
  },
  amzznkWrriorsppeechChronicleCardLiked: {
    backgroundColor: 'rgba(255, 153, 0, 0.1)',
    borderWidth: 1.1,
    borderColor: '#FF9900',
  },
  amzznkWrriorsppeechChronicleCardPressable: {
    paddingRight: 88,
  },
  amzznkWrriorsppeechChronicleCardPressed: {
    opacity: 0.9,
  },
  amzznkWrriorsppeechChronicleCardFeaturedLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF9900',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  amzznkWrriorsppeechChronicleCardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  amzznkWrriorsppeechChronicleCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 18,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  amzznkWrriorsppeechChronicleCardEmoji: {
    fontSize: 24,
  },
  amzznkWrriorsppeechChronicleCardBody: {
    flex: 1,
  },
  amzznkWrriorsppeechChronicleCardBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 6,
  },
  amzznkWrriorsppeechChronicleCardBadgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  amzznkWrriorsppeechChronicleCardTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechChronicleCardDesc: {
    fontSize: 11,
    lineHeight: 18,
    fontWeight: '500',
    color: '#9B8E8F',
    marginBottom: 10,
  },
  amzznkWrriorsppeechChronicleCardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  amzznkWrriorsppeechChronicleCardMetaIcon: {
    fontSize: 10,
  },
  amzznkWrriorsppeechChronicleCardMetaText: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechChronicleCardActions: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    gap: 8,
  },
  amzznkWrriorsppeechChronicleCardActionBtn: {
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
