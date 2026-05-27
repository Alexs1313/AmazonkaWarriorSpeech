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
  amzznkWrriorsppeechChronicleGetRealm,
  amzznkWrriorsppeechChronicleGetEntry,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleCatalog';
import {
  amzznkWrriorsppeechChronicleLoadFavorites,
  amzznkWrriorsppeechChronicleSaveFavorites,
  amzznkWrriorsppeechChronicleToggleFavoriteIds,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleFavorites';
import type {
  AmzznkWrriorsppeechChronicleDetailRoute,
  AmzznkWrriorsppeechChronicleNavigation,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechchronicleTypes';

type AmzznkWrriorsppeechChronicleDetailScreenProps = {
  amzznkWrriorsppeechChronicleNavigation: AmzznkWrriorsppeechChronicleNavigation;
  amzznkWrriorsppeechChronicleRoute: AmzznkWrriorsppeechChronicleDetailRoute;
};

export function AmzznkWrriorsppeechChronicleDetailScreen({
  amzznkWrriorsppeechChronicleNavigation,
  amzznkWrriorsppeechChronicleRoute,
}: AmzznkWrriorsppeechChronicleDetailScreenProps) {
  const amzznkWrriorsppeechChronicleInsets = useSafeAreaInsets();
  const amzznkWrriorsppeechChronicleEntry = amzznkWrriorsppeechChronicleGetEntry(
    amzznkWrriorsppeechChronicleRoute.params.amzznkWrriorsppeechChronicleEntryId,
  );
  const [
    chronicleIsFavorite,
    setChronicleIsFavorite,
  ] = useState(false);
  const [chronicleFavorites, setChronicleFavorites] =
    useState<string[]>([]);
  const amzznkWrriorsppeechChronicleTogglingRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechChronicleLoadFavorites().then(
        amzznkWrriorsppeechChronicleLoaded => {
          setChronicleFavorites(amzznkWrriorsppeechChronicleLoaded);
          setChronicleIsFavorite(
            amzznkWrriorsppeechChronicleLoaded.includes(
              amzznkWrriorsppeechChronicleRoute.params.amzznkWrriorsppeechChronicleEntryId,
            ),
          );
        },
      );
    }, [amzznkWrriorsppeechChronicleRoute.params.amzznkWrriorsppeechChronicleEntryId]),
  );

  if (!amzznkWrriorsppeechChronicleEntry) {
    return null;
  }

  const amzznkWrriorsppeechChronicleCategory = amzznkWrriorsppeechChronicleGetRealm(
    amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryCategoryId,
  );

  const amzznkWrriorsppeechChronicleShare = async () => {
    await Share.share({
      message: `${amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryTitle}\n\n${amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryBody}`,
    });
  };

  const amzznkWrriorsppeechChronicleHandleToggleFavorite = () => {
    if (amzznkWrriorsppeechChronicleTogglingRef.current) {
      return;
    }
    amzznkWrriorsppeechChronicleTogglingRef.current = true;
    setChronicleFavorites(amzznkWrriorsppeechChroniclePrev => {
      const amzznkWrriorsppeechChronicleNext =
        amzznkWrriorsppeechChronicleToggleFavoriteIds(
          amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
          amzznkWrriorsppeechChroniclePrev,
        );
      void amzznkWrriorsppeechChronicleSaveFavorites(amzznkWrriorsppeechChronicleNext);
      setChronicleIsFavorite(
        amzznkWrriorsppeechChronicleNext.includes(
          amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId,
        ),
      );
      return amzznkWrriorsppeechChronicleNext;
    });
    setTimeout(() => {
      amzznkWrriorsppeechChronicleTogglingRef.current = false;
    }, 400);
  };

  return (
    <View style={styles.amzznkWrriorsppeechChronicleDetailRoot}>
      <ScrollView
        style={styles.amzznkWrriorsppeechChronicleDetailScroll}
        contentContainerStyle={styles.amzznkWrriorsppeechChronicleDetailScrollContent}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.amzznkWrriorsppeechChronicleDetailHeader,
            {paddingTop: amzznkWrriorsppeechChronicleInsets.top + 8},
          ]}>
          <Pressable
            onPress={() => amzznkWrriorsppeechChronicleNavigation.goBack()}
            style={styles.amzznkWrriorsppeechChronicleDetailBackBtn}>
            <Image
              source={require('../../assets/images/amzznkWrriorsppeechIconBack.png')}
              style={styles.amzznkWrriorsppeechChronicleDetailBackIcon}
              resizeMode="contain"
            />
          </Pressable>

          <View style={styles.amzznkWrriorsppeechChronicleDetailHeaderCenter}>
            <Text
              style={styles.amzznkWrriorsppeechChronicleDetailTitle}
              numberOfLines={2}>
              {amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryTitle.toUpperCase()}
            </Text>
            <Text style={styles.amzznkWrriorsppeechChronicleDetailMeta}>
              {amzznkWrriorsppeechChronicleCategory?.amzznkWrriorsppeechChronicleCategoryLabel ??
                'Story'}{' '}
              · {amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryReadMin}{' '}
              min
            </Text>
          </View>

          <View style={styles.amzznkWrriorsppeechChronicleDetailHeaderActions}>
            <Pressable
              onPress={amzznkWrriorsppeechChronicleHandleToggleFavorite}
              style={styles.amzznkWrriorsppeechChronicleDetailActionBtn}>
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
              style={styles.amzznkWrriorsppeechChronicleDetailActionBtn}>
              <Image source={require('../../assets/images/amzznkWrriorsppeechIconShare.png')} />
            </Pressable>
          </View>
        </View>

        <Text style={styles.amzznkWrriorsppeechChronicleDetailBody}>
          {amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryBody}
        </Text>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechChronicleDetailRoot: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechChronicleDetailHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.1,
    borderBottomColor: 'rgba(255, 153, 0, 0.08)',
  },
  amzznkWrriorsppeechChronicleDetailBackBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  amzznkWrriorsppeechChronicleDetailBackIcon: {
    width: 14,
    height: 14,
    tintColor: '#F5F0E8',
  },
  amzznkWrriorsppeechChronicleDetailHeaderCenter: {
    flex: 1,

    alignItems: 'center',
  },
  amzznkWrriorsppeechChronicleDetailTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 11,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechChronicleDetailMeta: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 4,
  },
  amzznkWrriorsppeechChronicleDetailHeaderActions: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  amzznkWrriorsppeechChronicleDetailActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechChronicleDetailHeart: {
    fontSize: 14,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechChronicleDetailHeartActive: {
    color: '#FF9900',
  },
  amzznkWrriorsppeechChronicleDetailShareIcon: {
    width: 14,
    height: 14,
    tintColor: '#9B8E8F',
  },
  amzznkWrriorsppeechChronicleDetailScroll: {
    flex: 1,
  },
  amzznkWrriorsppeechChronicleDetailScrollContent: {
    paddingTop: 5,
    paddingBottom: 32,
  },
  amzznkWrriorsppeechChronicleDetailBody: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
