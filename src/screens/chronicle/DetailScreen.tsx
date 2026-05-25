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
  chronicleGetRealm,
  chronicleGetEntry,
} from '../../data/chronicle';
import {
  chronicleLoadFavorites,
  chronicleSaveFavorites,
  chronicleToggleFavoriteIds,
} from '../../data/chronicleFavorites';
import type {
  ChronicleDetailRoute,
  ChronicleNavigation,
} from '../../types/chronicle';

type ChronicleDetailScreenProps = {
  chronicleNavigation: ChronicleNavigation;
  chronicleRoute: ChronicleDetailRoute;
};

const ChronicleDetailScreen = ({
  chronicleNavigation,
  chronicleRoute,
}: ChronicleDetailScreenProps) => {
  const chronicleInsets = useSafeAreaInsets();
  const chronicleEntry = chronicleGetEntry(
    chronicleRoute.params.chronicleEntryId,
  );
  const [
    chronicleIsFavorite,
    setChronicleIsFavorite,
  ] = useState(false);
  const [chronicleFavorites, setChronicleFavorites] =
    useState<string[]>([]);
  const chronicleTogglingRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      chronicleLoadFavorites().then(
        chronicleLoaded => {
          setChronicleFavorites(chronicleLoaded);
          setChronicleIsFavorite(
            chronicleLoaded.includes(
              chronicleRoute.params.chronicleEntryId,
            ),
          );
        },
      );
    }, [chronicleRoute.params.chronicleEntryId]),
  );

  if (!chronicleEntry) {
    return null;
  }

  const chronicleCategory = chronicleGetRealm(
    chronicleEntry.chronicleEntryCategoryId,
  );

  const chronicleShare = async () => {
    await Share.share({
      message: `${chronicleEntry.chronicleEntryTitle}\n\n${chronicleEntry.chronicleEntryBody}`,
    });
  };

  const chronicleHandleToggleFavorite = () => {
    if (chronicleTogglingRef.current) {
      return;
    }
    chronicleTogglingRef.current = true;
    setChronicleFavorites(chroniclePrev => {
      const chronicleNext =
        chronicleToggleFavoriteIds(
          chronicleEntry.chronicleEntryId,
          chroniclePrev,
        );
      void chronicleSaveFavorites(chronicleNext);
      setChronicleIsFavorite(
        chronicleNext.includes(
          chronicleEntry.chronicleEntryId,
        ),
      );
      return chronicleNext;
    });
    setTimeout(() => {
      chronicleTogglingRef.current = false;
    }, 400);
  };

  return (
    <View style={styles.chronicleDetailRoot}>
      <ScrollView
        style={styles.chronicleDetailScroll}
        contentContainerStyle={styles.chronicleDetailScrollContent}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.chronicleDetailHeader,
            {paddingTop: chronicleInsets.top + 8},
          ]}>
          <Pressable
            onPress={() => chronicleNavigation.goBack()}
            style={styles.chronicleDetailBackBtn}>
            <Image
              source={require('../../../elements/images/icon-back.png')}
              style={styles.chronicleDetailBackIcon}
              resizeMode="contain"
            />
          </Pressable>

          <View style={styles.chronicleDetailHeaderCenter}>
            <Text
              style={styles.chronicleDetailTitle}
              numberOfLines={2}>
              {chronicleEntry.chronicleEntryTitle.toUpperCase()}
            </Text>
            <Text style={styles.chronicleDetailMeta}>
              {chronicleCategory?.chronicleCategoryLabel ??
                'Story'}{' '}
              · {chronicleEntry.chronicleEntryReadMin}{' '}
              min
            </Text>
          </View>

          <View style={styles.chronicleDetailHeaderActions}>
            <Pressable
              onPress={chronicleHandleToggleFavorite}
              style={styles.chronicleDetailActionBtn}>
              <Image
                source={
                  chronicleIsFavorite
                    ? require('../../../elements/images/icon-favorite-on.png')
                    : require('../../../elements/images/icon-favorite-off.png')
                }
              />
            </Pressable>
            <Pressable
              onPress={chronicleShare}
              style={styles.chronicleDetailActionBtn}>
              <Image source={require('../../../elements/images/icon-share.png')} />
            </Pressable>
          </View>
        </View>

        <Text style={styles.chronicleDetailBody}>
          {chronicleEntry.chronicleEntryBody}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ChronicleDetailScreen;

const styles = StyleSheet.create({
  chronicleDetailRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  chronicleDetailHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.1,
    borderBottomColor: 'rgba(255, 153, 0, 0.08)',
  },
  chronicleDetailBackBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  chronicleDetailBackIcon: {
    width: 14,
    height: 14,
    tintColor: '#F5F0E8',
  },
  chronicleDetailHeaderCenter: {
    flex: 1,

    alignItems: 'center',
  },
  chronicleDetailTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 11,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  chronicleDetailMeta: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 4,
  },
  chronicleDetailHeaderActions: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  chronicleDetailActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chronicleDetailHeart: {
    fontSize: 14,
    color: '#9B8E8F',
  },
  chronicleDetailHeartActive: {
    color: '#FF9900',
  },
  chronicleDetailShareIcon: {
    width: 14,
    height: 14,
    tintColor: '#9B8E8F',
  },
  chronicleDetailScroll: {
    flex: 1,
  },
  chronicleDetailScrollContent: {
    paddingTop: 5,
    paddingBottom: 32,
  },
  chronicleDetailBody: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
