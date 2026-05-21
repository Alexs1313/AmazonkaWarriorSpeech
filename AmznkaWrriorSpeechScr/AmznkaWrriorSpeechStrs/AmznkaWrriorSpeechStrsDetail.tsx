import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  amznkaWrriorSpeechStrsGetCategory,
  amznkaWrriorSpeechStrsGetStory,
} from './AmznkaWrriorSpeechStrsData';
import {
  amznkaWrriorSpeechStrsLoadFavorites,
  amznkaWrriorSpeechStrsSaveFavorites,
  amznkaWrriorSpeechStrsToggleFavoriteIds,
} from './AmznkaWrriorSpeechStrsFavorites';
import type {
  AmznkaWrriorSpeechStrsDetailRoute,
  AmznkaWrriorSpeechStrsNavigation,
} from './AmznkaWrriorSpeechStrsTypes';

type AmznkaWrriorSpeechStrsDetailProps = {
  amznkaWrriorSpeechStrsNavigation: AmznkaWrriorSpeechStrsNavigation;
  amznkaWrriorSpeechStrsRoute: AmznkaWrriorSpeechStrsDetailRoute;
};

const AmznkaWrriorSpeechStrsDetail = ({
  amznkaWrriorSpeechStrsNavigation,
  amznkaWrriorSpeechStrsRoute,
}: AmznkaWrriorSpeechStrsDetailProps) => {
  const amznkaWrriorSpeechStrsInsets = useSafeAreaInsets();
  const amznkaWrriorSpeechStrsStory = amznkaWrriorSpeechStrsGetStory(
    amznkaWrriorSpeechStrsRoute.params.amznkaWrriorSpeechStrsStoryId,
  );
  const [
    amznkaWrriorSpeechStrsIsFavorite,
    setAmznkaWrriorSpeechStrsIsFavorite,
  ] = useState(false);
  const [amznkaWrriorSpeechStrsFavorites, setAmznkaWrriorSpeechStrsFavorites] =
    useState<string[]>([]);
  const amznkaWrriorSpeechStrsTogglingRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      amznkaWrriorSpeechStrsLoadFavorites().then(
        amznkaWrriorSpeechStrsLoaded => {
          setAmznkaWrriorSpeechStrsFavorites(amznkaWrriorSpeechStrsLoaded);
          setAmznkaWrriorSpeechStrsIsFavorite(
            amznkaWrriorSpeechStrsLoaded.includes(
              amznkaWrriorSpeechStrsRoute.params.amznkaWrriorSpeechStrsStoryId,
            ),
          );
        },
      );
    }, [amznkaWrriorSpeechStrsRoute.params.amznkaWrriorSpeechStrsStoryId]),
  );

  if (!amznkaWrriorSpeechStrsStory) {
    return null;
  }

  const amznkaWrriorSpeechStrsCategory = amznkaWrriorSpeechStrsGetCategory(
    amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryCategoryId,
  );

  const amznkaWrriorSpeechStrsShare = async () => {
    await Share.share({
      message: `${amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryTitle}\n\n${amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryBody}`,
    });
  };

  const amznkaWrriorSpeechStrsHandleToggleFavorite = () => {
    if (amznkaWrriorSpeechStrsTogglingRef.current) {
      return;
    }
    amznkaWrriorSpeechStrsTogglingRef.current = true;
    setAmznkaWrriorSpeechStrsFavorites(amznkaWrriorSpeechStrsPrev => {
      const amznkaWrriorSpeechStrsNext =
        amznkaWrriorSpeechStrsToggleFavoriteIds(
          amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
          amznkaWrriorSpeechStrsPrev,
        );
      void amznkaWrriorSpeechStrsSaveFavorites(amznkaWrriorSpeechStrsNext);
      setAmznkaWrriorSpeechStrsIsFavorite(
        amznkaWrriorSpeechStrsNext.includes(
          amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryId,
        ),
      );
      return amznkaWrriorSpeechStrsNext;
    });
    setTimeout(() => {
      amznkaWrriorSpeechStrsTogglingRef.current = false;
    }, 400);
  };

  return (
    <View style={styles.amznkaWrriorSpeechStrsDetailRoot}>
      <ScrollView
        style={styles.amznkaWrriorSpeechStrsDetailScroll}
        contentContainerStyle={styles.amznkaWrriorSpeechStrsDetailScrollContent}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.amznkaWrriorSpeechStrsDetailHeader,
            {paddingTop: amznkaWrriorSpeechStrsInsets.top + 8},
          ]}>
          <Pressable
            onPress={() => amznkaWrriorSpeechStrsNavigation.goBack()}
            style={styles.amznkaWrriorSpeechStrsDetailBackBtn}>
            <Image
              source={require('../../assets/i/amznkawrrback.png')}
              style={styles.amznkaWrriorSpeechStrsDetailBackIcon}
              resizeMode="contain"
            />
          </Pressable>

          <View style={styles.amznkaWrriorSpeechStrsDetailHeaderCenter}>
            <Text
              style={styles.amznkaWrriorSpeechStrsDetailTitle}
              numberOfLines={2}>
              {amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryTitle.toUpperCase()}
            </Text>
            <Text style={styles.amznkaWrriorSpeechStrsDetailMeta}>
              {amznkaWrriorSpeechStrsCategory?.amznkaWrriorSpeechStrsCategoryLabel ??
                'Story'}{' '}
              · {amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryReadMin}{' '}
              min
            </Text>
          </View>

          <View style={styles.amznkaWrriorSpeechStrsDetailHeaderActions}>
            <Pressable
              onPress={amznkaWrriorSpeechStrsHandleToggleFavorite}
              style={styles.amznkaWrriorSpeechStrsDetailActionBtn}>
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
              style={styles.amznkaWrriorSpeechStrsDetailActionBtn}>
              <Image source={require('../../assets/i/amznkawrshare.png')} />
            </Pressable>
          </View>
        </View>

        <Text style={styles.amznkaWrriorSpeechStrsDetailBody}>
          {amznkaWrriorSpeechStrsStory.amznkaWrriorSpeechStrsStoryBody}
        </Text>
      </ScrollView>
    </View>
  );
};

export default AmznkaWrriorSpeechStrsDetail;

const styles = StyleSheet.create({
  amznkaWrriorSpeechStrsDetailRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amznkaWrriorSpeechStrsDetailHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.1,
    borderBottomColor: 'rgba(255, 153, 0, 0.08)',
  },
  amznkaWrriorSpeechStrsDetailBackBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  amznkaWrriorSpeechStrsDetailBackIcon: {
    width: 14,
    height: 14,
    tintColor: '#F5F0E8',
  },
  amznkaWrriorSpeechStrsDetailHeaderCenter: {
    flex: 1,

    alignItems: 'center',
  },
  amznkaWrriorSpeechStrsDetailTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 11,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechStrsDetailMeta: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 4,
  },
  amznkaWrriorSpeechStrsDetailHeaderActions: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  amznkaWrriorSpeechStrsDetailActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechStrsDetailHeart: {
    fontSize: 14,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStrsDetailHeartActive: {
    color: '#FF9900',
  },
  amznkaWrriorSpeechStrsDetailShareIcon: {
    width: 14,
    height: 14,
    tintColor: '#9B8E8F',
  },
  amznkaWrriorSpeechStrsDetailScroll: {
    flex: 1,
  },
  amznkaWrriorSpeechStrsDetailScrollContent: {
    paddingTop: 5,
    paddingBottom: 32,
  },
  amznkaWrriorSpeechStrsDetailBody: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
