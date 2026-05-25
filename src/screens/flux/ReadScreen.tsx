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
  FluxNavigation,
  FluxReadRoute,
} from '../../types/flux';
import {
  vaultUnlockedFluxPassagesForRealm,
} from '../../data/vault';
import {vaultLoadUnlockedIds} from '../../data/vaultStorage';
import {
  fluxGetText,
  fluxCadencePx,
  fluxPassageScaleStyle,
  type FluxPassage,
} from '../../data/flux';

type FluxReadScreenProps = {
  fluxNavigation: FluxNavigation;
  fluxRoute: FluxReadRoute;
};

const fluxReadControlsH = 130;

const fluxBtnGradient = [
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

const FluxReadScreen = ({
  fluxNavigation,
  fluxRoute,
}: FluxReadScreenProps) => {
  const fluxInsets = useSafeAreaInsets();
  const fluxScrollRef = useRef<ScrollView>(null);
  const fluxScrollY = useRef(0);
  const fluxMaxScroll = useRef(0);
  const fluxContentH = useRef(0);
  const fluxTickRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const {
    fluxCategoryId,
    fluxPassageId,
    fluxScrollSpeed,
    fluxPassageSize,
  } = fluxRoute.params;

  const [fluxStoreTexts, setFluxStoreTexts] =
    useState<FluxPassage[]>([]);

  useFocusEffect(
    useCallback(() => {
      vaultLoadUnlockedIds().then(
        fluxUnlockedIds =>
          setFluxStoreTexts(
            vaultUnlockedFluxPassagesForRealm(
              fluxUnlockedIds,
              fluxCategoryId,
            ),
          ),
      );
    }, [fluxCategoryId]),
  );

  const fluxPassage = fluxGetText(
    fluxCategoryId,
    fluxPassageId,
    fluxStoreTexts,
  );

  const [fluxIsScrolling, setFluxIsScrolling] =
    useState(true);
  const [fluxViewportH, setFluxViewportH] =
    useState(0);

  const fluxTypography =
    fluxPassageScaleStyle[fluxPassageSize];

  useEffect(() => {
    if (!fluxIsScrolling) {
      if (fluxTickRef.current) {
        clearInterval(fluxTickRef.current);
        fluxTickRef.current = null;
      }
      return;
    }

    const fluxPxPerTick =
      fluxCadencePx[fluxScrollSpeed] /
      20;

    fluxTickRef.current = setInterval(() => {
      const fluxNextY =
        fluxScrollY.current + fluxPxPerTick;
      if (
        fluxNextY >= fluxMaxScroll.current
      ) {
        setFluxIsScrolling(false);
        return;
      }
      fluxScrollY.current = fluxNextY;
      fluxScrollRef.current?.scrollTo({
        y: fluxNextY,
        animated: false,
      });
    }, 50);

    return () => {
      if (fluxTickRef.current) {
        clearInterval(fluxTickRef.current);
      }
    };
  }, [fluxIsScrolling, fluxScrollSpeed]);

  useEffect(() => {
    if (fluxViewportH > 0) {
      fluxMaxScroll.current = Math.max(
        0,
        fluxContentH.current - fluxViewportH,
      );
    }
  }, [fluxViewportH]);

  if (!fluxPassage) {
    return null;
  }

  const fluxResetScroll = () => {
    fluxScrollY.current = 0;
    fluxScrollRef.current?.scrollTo({y: 0, animated: true});
    setFluxIsScrolling(false);
  };

  const fluxFinish = () => {
    setFluxIsScrolling(false);
    fluxNavigation.replace('FluxOutcome', {
      fluxCategoryId,
      fluxPassageId,
    });
  };

  return (
    <View style={styles.fluxReadRoot}>
      <View
        style={[
          styles.fluxReadHeader,
          {paddingTop: fluxInsets.top + 8},
        ]}>
        <Pressable
          onPress={() => fluxNavigation.goBack()}
          style={styles.fluxReadCloseBtn}>
          <Text style={styles.fluxReadCloseIcon}>✕</Text>
        </Pressable>
        <Text
          style={styles.fluxReadHeaderTitle}
          numberOfLines={2}>
          {fluxPassage.fluxPassageTitle.toUpperCase()}
        </Text>
        <View style={styles.fluxReadHeaderSpacer} />
      </View>

      <View
        style={styles.fluxReadContent}
        onLayout={fluxEvent => {
          setFluxViewportH(
            fluxEvent.nativeEvent.layout.height,
          );
        }}>
        <ScrollView
          ref={fluxScrollRef}
          style={styles.fluxReadScroll}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(_, fluxContentHeight) => {
            fluxContentH.current =
              fluxContentHeight;
            fluxMaxScroll.current = Math.max(
              0,
              fluxContentHeight -
                fluxViewportH,
            );
          }}
          onScroll={fluxEvent => {
            fluxScrollY.current =
              fluxEvent.nativeEvent.contentOffset.y;
          }}
          contentContainerStyle={[
            styles.fluxReadScrollContent,
            {
              paddingBottom:
                fluxReadControlsH +
                Math.max(fluxInsets.bottom, 16),
            },
          ]}>
          <Text
            style={[
              styles.fluxReadBody,
              fluxTypography,
            ]}>
            {fluxPassage.fluxPassageBody}
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
            styles.fluxReadFade,
            {
              height:
                fluxReadControlsH +
                Math.max(fluxInsets.bottom, 16) +
                40,
            },
          ]}
          pointerEvents="none"
        />

        <View
          style={[
            styles.fluxReadControls,
            {
              paddingBottom: Math.max(
                fluxInsets.bottom,
                16,
              ),
            },
          ]}>
          <Pressable
            onPress={fluxResetScroll}
            style={styles.fluxReadSideBtn}>
            <Image source={require('../../../elements/images/read-restart.png')} />
          </Pressable>

          <View style={styles.fluxReadCenter}>
            <Pressable
              onPress={() =>
                setFluxIsScrolling(
                  fluxPrev => !fluxPrev,
                )
              }
              style={({pressed}) => [
                styles.fluxReadToggleBtnWrap,
                pressed && {opacity: 0.9},
              ]}>
              <LinearGradient
                colors={fluxBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.fluxReadToggleBtn}>
                <Image
                  source={
                    fluxIsScrolling
                      ? require('../../../elements/images/read-pause.png')
                      : require('../../../elements/images/read-resume.png')
                  }
                  style={styles.fluxReadToggleIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
            </Pressable>
            <Text style={styles.fluxReadStatus}>
              {fluxIsScrolling ? 'Reading...' : 'Paused'}
            </Text>
          </View>

          <Pressable
            onPress={fluxFinish}
            style={styles.fluxReadSideBtn}>
            <Image source={require('../../../elements/images/read-done.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FluxReadScreen;

const styles = StyleSheet.create({
  fluxReadRoot: {
    flex: 1,
    backgroundColor: '#1A1718',
  },
  fluxReadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.1,
    borderBottomColor: '#FF990013',
  },
  fluxReadCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fluxReadCloseIcon: {
    fontSize: 14,
    color: '#F5F0E8',
  },
  fluxReadHeaderTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  fluxReadHeaderSpacer: {
    width: 32,
  },
  fluxReadContent: {
    flex: 1,
    position: 'relative',
  },
  fluxReadScroll: {
    flex: 1,
  },
  fluxReadScrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  fluxReadBody: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  fluxReadFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fluxReadControls: {
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
  fluxReadSideBtn: {
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
  fluxReadSideBtnIcon: {
    fontSize: 18,
    color: '#F5F0E8',
  },
  fluxReadCheckIcon: {
    color: '#FF9900',
    fontWeight: '700',
  },
  fluxReadCenter: {
    alignItems: 'center',
  },
  fluxReadToggleBtnWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  fluxReadToggleBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  fluxReadToggleIcon: {
    width: 24,
    height: 24,
  },
  fluxReadStatus: {
    marginTop: 8,
    fontSize: 12,
    color: '#9B8E8F',
  },
});
