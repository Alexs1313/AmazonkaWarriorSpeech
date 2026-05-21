import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {
  AmznkaWrriorSpeechSuflNavigation,
  AmznkaWrriorSpeechSuflReadRoute,
} from './AmznkaWrriorSpeechSuflTypes';
import {
  amznkaWrriorSpeechStoreGetUnlockedSuflTextsForCategory,
} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreData';
import {amznkaWrriorSpeechStoreLoadUnlockedIds} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreStorage';
import {
  amznkaWrriorSpeechSuflGetText,
  amznkaWrriorSpeechSuflScrollSpeedPx,
  amznkaWrriorSpeechSuflTextSizeStyle,
  type AmznkaWrriorSpeechSuflText,
} from './AmznkaWrriorSpeechSuflData';

type AmznkaWrriorSpeechSuflReadProps = {
  amznkaWrriorSpeechSuflNavigation: AmznkaWrriorSpeechSuflNavigation;
  amznkaWrriorSpeechSuflRoute: AmznkaWrriorSpeechSuflReadRoute;
};

const amznkaWrriorSpeechSuflReadControlsH = 130;

const amznkaWrriorSpeechSuflBtnGradient = [
  '#FF9900',
  '#FF960A',
  '#FF9311',
  '#FF9017',
  '#FF8D1C',
  '#FF8A21',
  '#FF8726',
  '#FF842B',
  '#FF8130',
  '#FF7E34',
  '#FF7B38',
  '#FF783C',
  '#FF7540',
  '#FF7244',
  '#FF6B35',
];

const AmznkaWrriorSpeechSuflRead = ({
  amznkaWrriorSpeechSuflNavigation,
  amznkaWrriorSpeechSuflRoute,
}: AmznkaWrriorSpeechSuflReadProps) => {
  const amznkaWrriorSpeechSuflInsets = useSafeAreaInsets();
  const amznkaWrriorSpeechSuflScrollRef = useRef<ScrollView>(null);
  const amznkaWrriorSpeechSuflScrollY = useRef(0);
  const amznkaWrriorSpeechSuflMaxScroll = useRef(0);
  const amznkaWrriorSpeechSuflContentH = useRef(0);
  const amznkaWrriorSpeechSuflTickRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const {
    amznkaWrriorSpeechSuflCategoryId,
    amznkaWrriorSpeechSuflTextId,
    amznkaWrriorSpeechSuflScrollSpeed,
    amznkaWrriorSpeechSuflTextSize,
  } = amznkaWrriorSpeechSuflRoute.params;

  const [amznkaWrriorSpeechSuflStoreTexts, setAmznkaWrriorSpeechSuflStoreTexts] =
    useState<AmznkaWrriorSpeechSuflText[]>([]);

  useFocusEffect(
    useCallback(() => {
      amznkaWrriorSpeechStoreLoadUnlockedIds().then(
        amznkaWrriorSpeechSuflUnlockedIds =>
          setAmznkaWrriorSpeechSuflStoreTexts(
            amznkaWrriorSpeechStoreGetUnlockedSuflTextsForCategory(
              amznkaWrriorSpeechSuflUnlockedIds,
              amznkaWrriorSpeechSuflCategoryId,
            ),
          ),
      );
    }, [amznkaWrriorSpeechSuflCategoryId]),
  );

  const amznkaWrriorSpeechSuflText = amznkaWrriorSpeechSuflGetText(
    amznkaWrriorSpeechSuflCategoryId,
    amznkaWrriorSpeechSuflTextId,
    amznkaWrriorSpeechSuflStoreTexts,
  );

  const [amznkaWrriorSpeechSuflIsPlaying, setAmznkaWrriorSpeechSuflIsPlaying] =
    useState(true);
  const [amznkaWrriorSpeechSuflViewportH, setAmznkaWrriorSpeechSuflViewportH] =
    useState(0);

  const amznkaWrriorSpeechSuflTypography =
    amznkaWrriorSpeechSuflTextSizeStyle[amznkaWrriorSpeechSuflTextSize];

  useEffect(() => {
    if (!amznkaWrriorSpeechSuflIsPlaying) {
      if (amznkaWrriorSpeechSuflTickRef.current) {
        clearInterval(amznkaWrriorSpeechSuflTickRef.current);
        amznkaWrriorSpeechSuflTickRef.current = null;
      }
      return;
    }

    const amznkaWrriorSpeechSuflPxPerTick =
      amznkaWrriorSpeechSuflScrollSpeedPx[amznkaWrriorSpeechSuflScrollSpeed] /
      20;

    amznkaWrriorSpeechSuflTickRef.current = setInterval(() => {
      const amznkaWrriorSpeechSuflNextY =
        amznkaWrriorSpeechSuflScrollY.current + amznkaWrriorSpeechSuflPxPerTick;
      if (
        amznkaWrriorSpeechSuflNextY >= amznkaWrriorSpeechSuflMaxScroll.current
      ) {
        setAmznkaWrriorSpeechSuflIsPlaying(false);
        return;
      }
      amznkaWrriorSpeechSuflScrollY.current = amznkaWrriorSpeechSuflNextY;
      amznkaWrriorSpeechSuflScrollRef.current?.scrollTo({
        y: amznkaWrriorSpeechSuflNextY,
        animated: false,
      });
    }, 50);

    return () => {
      if (amznkaWrriorSpeechSuflTickRef.current) {
        clearInterval(amznkaWrriorSpeechSuflTickRef.current);
      }
    };
  }, [amznkaWrriorSpeechSuflIsPlaying, amznkaWrriorSpeechSuflScrollSpeed]);

  useEffect(() => {
    if (amznkaWrriorSpeechSuflViewportH > 0) {
      amznkaWrriorSpeechSuflMaxScroll.current = Math.max(
        0,
        amznkaWrriorSpeechSuflContentH.current - amznkaWrriorSpeechSuflViewportH,
      );
    }
  }, [amznkaWrriorSpeechSuflViewportH]);

  if (!amznkaWrriorSpeechSuflText) {
    return null;
  }

  const amznkaWrriorSpeechSuflResetScroll = () => {
    amznkaWrriorSpeechSuflScrollY.current = 0;
    amznkaWrriorSpeechSuflScrollRef.current?.scrollTo({y: 0, animated: true});
    setAmznkaWrriorSpeechSuflIsPlaying(false);
  };

  const amznkaWrriorSpeechSuflFinish = () => {
    setAmznkaWrriorSpeechSuflIsPlaying(false);
    amznkaWrriorSpeechSuflNavigation.replace('AmznkaWrriorSpeechSuflResult', {
      amznkaWrriorSpeechSuflCategoryId,
      amznkaWrriorSpeechSuflTextId,
    });
  };

  return (
    <View style={styles.amznkaWrriorSpeechSuflReadRoot}>
      <View
        style={[
          styles.amznkaWrriorSpeechSuflReadHeader,
          {paddingTop: amznkaWrriorSpeechSuflInsets.top + 8},
        ]}>
        <Pressable
          onPress={() => amznkaWrriorSpeechSuflNavigation.goBack()}
          style={styles.amznkaWrriorSpeechSuflReadCloseBtn}>
          <Text style={styles.amznkaWrriorSpeechSuflReadCloseIcon}>✕</Text>
        </Pressable>
        <Text
          style={styles.amznkaWrriorSpeechSuflReadHeaderTitle}
          numberOfLines={2}>
          {amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextTitle.toUpperCase()}
        </Text>
        <View style={styles.amznkaWrriorSpeechSuflReadHeaderSpacer} />
      </View>

      <View
        style={styles.amznkaWrriorSpeechSuflReadContent}
        onLayout={amznkaWrriorSpeechSuflEvent => {
          setAmznkaWrriorSpeechSuflViewportH(
            amznkaWrriorSpeechSuflEvent.nativeEvent.layout.height,
          );
        }}>
        <ScrollView
          ref={amznkaWrriorSpeechSuflScrollRef}
          style={styles.amznkaWrriorSpeechSuflReadScroll}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(_, amznkaWrriorSpeechSuflContentHeight) => {
            amznkaWrriorSpeechSuflContentH.current =
              amznkaWrriorSpeechSuflContentHeight;
            amznkaWrriorSpeechSuflMaxScroll.current = Math.max(
              0,
              amznkaWrriorSpeechSuflContentHeight -
                amznkaWrriorSpeechSuflViewportH,
            );
          }}
          onScroll={amznkaWrriorSpeechSuflEvent => {
            amznkaWrriorSpeechSuflScrollY.current =
              amznkaWrriorSpeechSuflEvent.nativeEvent.contentOffset.y;
          }}
          contentContainerStyle={[
            styles.amznkaWrriorSpeechSuflReadScrollContent,
            {
              paddingBottom:
                amznkaWrriorSpeechSuflReadControlsH +
                Math.max(amznkaWrriorSpeechSuflInsets.bottom, 16),
            },
          ]}>
          <Text
            style={[
              styles.amznkaWrriorSpeechSuflReadBody,
              amznkaWrriorSpeechSuflTypography,
            ]}>
            {amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextBody}
          </Text>
        </ScrollView>

        <LinearGradient
          colors={[
            'transparent',
            'rgba(26, 23, 24, 0.75)',
            '#1A1718',
          ]}
          locations={[0, 0.55, 1]}
          style={[
            styles.amznkaWrriorSpeechSuflReadFade,
            {
              height:
                amznkaWrriorSpeechSuflReadControlsH +
                Math.max(amznkaWrriorSpeechSuflInsets.bottom, 16) +
                40,
            },
          ]}
          pointerEvents="none"
        />

        <View
          style={[
            styles.amznkaWrriorSpeechSuflReadControls,
            {
              paddingBottom: Math.max(
                amznkaWrriorSpeechSuflInsets.bottom,
                16,
              ),
            },
          ]}>
          <Pressable
            onPress={amznkaWrriorSpeechSuflResetScroll}
            style={styles.amznkaWrriorSpeechSuflReadSideBtn}>
            <Image source={require('../../assets/i/amznkawrrbrel.png')} />
          </Pressable>

          <View style={styles.amznkaWrriorSpeechSuflReadCenter}>
            <Pressable
              onPress={() =>
                setAmznkaWrriorSpeechSuflIsPlaying(
                  amznkaWrriorSpeechSuflPrev => !amznkaWrriorSpeechSuflPrev,
                )
              }
              style={({pressed}) => [
                styles.amznkaWrriorSpeechSuflReadPlayBtnWrap,
                pressed && {opacity: 0.9},
              ]}>
              <LinearGradient
                colors={amznkaWrriorSpeechSuflBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.amznkaWrriorSpeechSuflReadPlayBtn}>
                <Image
                  source={
                    amznkaWrriorSpeechSuflIsPlaying
                      ? require('../../assets/i/amznkawrrpaus.png')
                      : require('../../assets/i/amznkawrpl.png')
                  }
                  style={styles.amznkaWrriorSpeechSuflReadPlayIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
            </Pressable>
            <Text style={styles.amznkaWrriorSpeechSuflReadStatus}>
              {amznkaWrriorSpeechSuflIsPlaying ? 'Reading...' : 'Paused'}
            </Text>
          </View>

          <Pressable
            onPress={amznkaWrriorSpeechSuflFinish}
            style={styles.amznkaWrriorSpeechSuflReadSideBtn}>
            <Image source={require('../../assets/i/amznkawrrbok.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AmznkaWrriorSpeechSuflRead;

const styles = StyleSheet.create({
  amznkaWrriorSpeechSuflReadRoot: {
    flex: 1,
    backgroundColor: '#1A1718',
  },
  amznkaWrriorSpeechSuflReadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.1,
    borderBottomColor: '#FF990013',
  },
  amznkaWrriorSpeechSuflReadCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechSuflReadCloseIcon: {
    fontSize: 14,
    color: '#F5F0E8',
  },
  amznkaWrriorSpeechSuflReadHeaderTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  amznkaWrriorSpeechSuflReadHeaderSpacer: {
    width: 32,
  },
  amznkaWrriorSpeechSuflReadContent: {
    flex: 1,
    position: 'relative',
  },
  amznkaWrriorSpeechSuflReadScroll: {
    flex: 1,
  },
  amznkaWrriorSpeechSuflReadScrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  amznkaWrriorSpeechSuflReadBody: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  amznkaWrriorSpeechSuflReadFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  amznkaWrriorSpeechSuflReadControls: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 32,
    paddingTop: 8,
    zIndex: 2,
  },
  amznkaWrriorSpeechSuflReadSideBtn: {
    width: 47,
    height: 47,
    borderRadius: 28,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderWidth: 1.1,
    borderColor: '#FF990026',
  },
  amznkaWrriorSpeechSuflReadSideBtnIcon: {
    fontSize: 18,
    color: '#F5F0E8',
  },
  amznkaWrriorSpeechSuflReadCheckIcon: {
    color: '#FF9900',
    fontWeight: '700',
  },
  amznkaWrriorSpeechSuflReadCenter: {
    alignItems: 'center',
  },
  amznkaWrriorSpeechSuflReadPlayBtnWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  amznkaWrriorSpeechSuflReadPlayBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  amznkaWrriorSpeechSuflReadPlayIcon: {
    width: 24,
    height: 24,
  },
  amznkaWrriorSpeechSuflReadStatus: {
    marginTop: 8,
    fontSize: 12,
    color: '#9B8E8F',
  },
});
