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
  AmzznkWrriorsppeechFluxNavigation,
  AmzznkWrriorsppeechFluxReadRoute,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxTypes';
import {amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultCatalog';
import {amzznkWrriorsppeechVaultLoadUnlockedIds} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultStorage';
import {
  amzznkWrriorsppeechFluxGetText,
  amzznkWrriorsppeechFluxCadencePx,
  amzznkWrriorsppeechFluxPassageScaleStyle,
  type AmzznkWrriorsppeechFluxPassage,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechfluxCatalog';
import Orientation from 'react-native-orientation-locker';

type AmzznkWrriorsppeechFluxReadScreenProps = {
  amzznkWrriorsppeechFluxNavigation: AmzznkWrriorsppeechFluxNavigation;
  amzznkWrriorsppeechFluxRoute: AmzznkWrriorsppeechFluxReadRoute;
};

const amzznkWrriorsppeechFluxReadControlsH = 130;

const amzznkWrriorsppeechFluxBtnGradient = [
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

export function AmzznkWrriorsppeechFluxReadScreen({
  amzznkWrriorsppeechFluxNavigation,
  amzznkWrriorsppeechFluxRoute,
}: AmzznkWrriorsppeechFluxReadScreenProps) {
  const amzznkWrriorsppeechFluxInsets = useSafeAreaInsets();
  const amzznkWrriorsppeechFluxScrollRef = useRef<ScrollView>(null);
  const amzznkWrriorsppeechFluxScrollY = useRef(0);
  const amzznkWrriorsppeechFluxMaxScroll = useRef(0);
  const amzznkWrriorsppeechFluxContentH = useRef(0);
  const amzznkWrriorsppeechFluxTickRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const {
    amzznkWrriorsppeechFluxCategoryId,
    amzznkWrriorsppeechFluxPassageId,
    fluxScrollSpeed,
    fluxPassageSize,
  } = amzznkWrriorsppeechFluxRoute.params;

  const [fluxStoreTexts, setFluxStoreTexts] = useState<
    AmzznkWrriorsppeechFluxPassage[]
  >([]);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechVaultLoadUnlockedIds().then(
        amzznkWrriorsppeechFluxUnlockedIds =>
          setFluxStoreTexts(
            amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm(
              amzznkWrriorsppeechFluxUnlockedIds,
              amzznkWrriorsppeechFluxCategoryId,
            ),
          ),
      );
    }, [amzznkWrriorsppeechFluxCategoryId]),
  );

  const amzznkWrriorsppeechFluxPassage = amzznkWrriorsppeechFluxGetText(
    amzznkWrriorsppeechFluxCategoryId,
    amzznkWrriorsppeechFluxPassageId,
    fluxStoreTexts,
  );

  const [fluxIsScrolling, setFluxIsScrolling] = useState(true);
  const [fluxViewportH, setFluxViewportH] = useState(0);

  const amzznkWrriorsppeechFluxTypography =
    amzznkWrriorsppeechFluxPassageScaleStyle[fluxPassageSize];

  useEffect(() => {
    if (!fluxIsScrolling) {
      if (amzznkWrriorsppeechFluxTickRef.current) {
        clearInterval(amzznkWrriorsppeechFluxTickRef.current);
        amzznkWrriorsppeechFluxTickRef.current = null;
      }
      return;
    }

    const amzznkWrriorsppeechFluxPxPerTick =
      amzznkWrriorsppeechFluxCadencePx[fluxScrollSpeed] / 20;

    amzznkWrriorsppeechFluxTickRef.current = setInterval(() => {
      const amzznkWrriorsppeechFluxNextY =
        amzznkWrriorsppeechFluxScrollY.current +
        amzznkWrriorsppeechFluxPxPerTick;
      if (
        amzznkWrriorsppeechFluxNextY >= amzznkWrriorsppeechFluxMaxScroll.current
      ) {
        setFluxIsScrolling(false);
        return;
      }
      amzznkWrriorsppeechFluxScrollY.current = amzznkWrriorsppeechFluxNextY;
      amzznkWrriorsppeechFluxScrollRef.current?.scrollTo({
        y: amzznkWrriorsppeechFluxNextY,
        animated: false,
      });
    }, 50);

    return () => {
      if (amzznkWrriorsppeechFluxTickRef.current) {
        clearInterval(amzznkWrriorsppeechFluxTickRef.current);
      }
    };
  }, [fluxIsScrolling, fluxScrollSpeed]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  useEffect(() => {
    if (fluxViewportH > 0) {
      amzznkWrriorsppeechFluxMaxScroll.current = Math.max(
        0,
        amzznkWrriorsppeechFluxContentH.current - fluxViewportH,
      );
    }
  }, [fluxViewportH]);

  if (!amzznkWrriorsppeechFluxPassage) {
    return null;
  }

  const amzznkWrriorsppeechFluxResetScroll = () => {
    amzznkWrriorsppeechFluxScrollY.current = 0;
    amzznkWrriorsppeechFluxScrollRef.current?.scrollTo({y: 0, animated: true});
    setFluxIsScrolling(false);
  };

  const amzznkWrriorsppeechFluxFinish = () => {
    setFluxIsScrolling(false);
    amzznkWrriorsppeechFluxNavigation.replace('FluxOutcome', {
      amzznkWrriorsppeechFluxCategoryId,
      amzznkWrriorsppeechFluxPassageId,
    });
  };

  return (
    <View style={styles.amzznkWrriorsppeechFluxReadRoot}>
      <View
        style={[
          styles.amzznkWrriorsppeechFluxReadHeader,
          {paddingTop: amzznkWrriorsppeechFluxInsets.top + 8},
        ]}>
        <Pressable
          onPress={() => amzznkWrriorsppeechFluxNavigation.goBack()}
          style={styles.amzznkWrriorsppeechFluxReadCloseBtn}>
          <Text style={styles.amzznkWrriorsppeechFluxReadCloseIcon}>✕</Text>
        </Pressable>
        <Text
          style={styles.amzznkWrriorsppeechFluxReadHeaderTitle}
          numberOfLines={2}>
          {amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageTitle.toUpperCase()}
        </Text>
        <View style={styles.amzznkWrriorsppeechFluxReadHeaderSpacer} />
      </View>

      <View
        style={styles.amzznkWrriorsppeechFluxReadContent}
        onLayout={amzznkWrriorsppeechFluxEvent => {
          setFluxViewportH(
            amzznkWrriorsppeechFluxEvent.nativeEvent.layout.height,
          );
        }}>
        <ScrollView
          ref={amzznkWrriorsppeechFluxScrollRef}
          style={styles.amzznkWrriorsppeechFluxReadScroll}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(_, amzznkWrriorsppeechFluxContentHeight) => {
            amzznkWrriorsppeechFluxContentH.current =
              amzznkWrriorsppeechFluxContentHeight;
            amzznkWrriorsppeechFluxMaxScroll.current = Math.max(
              0,
              amzznkWrriorsppeechFluxContentHeight - fluxViewportH,
            );
          }}
          onScroll={amzznkWrriorsppeechFluxEvent => {
            amzznkWrriorsppeechFluxScrollY.current =
              amzznkWrriorsppeechFluxEvent.nativeEvent.contentOffset.y;
          }}
          contentContainerStyle={[
            styles.amzznkWrriorsppeechFluxReadScrollContent,
            {
              paddingBottom:
                amzznkWrriorsppeechFluxReadControlsH +
                Math.max(amzznkWrriorsppeechFluxInsets.bottom, 16),
            },
          ]}>
          <Text
            style={[
              styles.amzznkWrriorsppeechFluxReadBody,
              amzznkWrriorsppeechFluxTypography,
            ]}>
            {amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageBody}
          </Text>
        </ScrollView>

        <LinearGradient
          colors={['transparent', 'rgba(26, 23, 24, 0.75)', '#1A1718']}
          locations={[0, 0.55, 1]}
          style={[
            styles.amzznkWrriorsppeechFluxReadFade,
            {
              height:
                amzznkWrriorsppeechFluxReadControlsH +
                Math.max(amzznkWrriorsppeechFluxInsets.bottom, 16) +
                40,
            },
          ]}
          pointerEvents="none"
        />

        <View
          style={[
            styles.amzznkWrriorsppeechFluxReadControls,
            {
              paddingBottom: Math.max(amzznkWrriorsppeechFluxInsets.bottom, 16),
            },
          ]}>
          <Pressable
            onPress={amzznkWrriorsppeechFluxResetScroll}
            style={styles.amzznkWrriorsppeechFluxReadSideBtn}>
            <Image
              source={require('../../assets/images/amzznkWrriorsppeechReadRestart.png')}
            />
          </Pressable>

          <View style={styles.amzznkWrriorsppeechFluxReadCenter}>
            <Pressable
              onPress={() =>
                setFluxIsScrolling(
                  amzznkWrriorsppeechFluxPrev => !amzznkWrriorsppeechFluxPrev,
                )
              }
              style={({pressed}) => [
                styles.amzznkWrriorsppeechFluxReadToggleBtnWrap,
                pressed && {opacity: 0.9},
              ]}>
              <LinearGradient
                colors={amzznkWrriorsppeechFluxBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.amzznkWrriorsppeechFluxReadToggleBtn}>
                <Image
                  source={
                    fluxIsScrolling
                      ? require('../../assets/images/amzznkWrriorsppeechReadPause.png')
                      : require('../../assets/images/amzznkWrriorsppeechReadResume.png')
                  }
                  style={styles.amzznkWrriorsppeechFluxReadToggleIcon}
                  resizeMode="contain"
                />
              </LinearGradient>
            </Pressable>
            <Text style={styles.amzznkWrriorsppeechFluxReadStatus}>
              {fluxIsScrolling ? 'Reading...' : 'Paused'}
            </Text>
          </View>

          <Pressable
            onPress={amzznkWrriorsppeechFluxFinish}
            style={styles.amzznkWrriorsppeechFluxReadSideBtn}>
            <Image
              source={require('../../assets/images/amzznkWrriorsppeechReadDone.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechFluxReadRoot: {
    flex: 1,
    backgroundColor: '#1A1718',
  },
  amzznkWrriorsppeechFluxReadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1.1,
    borderBottomColor: '#FF990013',
  },
  amzznkWrriorsppeechFluxReadCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechFluxReadCloseIcon: {
    fontSize: 14,
    color: '#F5F0E8',
  },
  amzznkWrriorsppeechFluxReadHeaderTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  amzznkWrriorsppeechFluxReadHeaderSpacer: {
    width: 32,
  },
  amzznkWrriorsppeechFluxReadContent: {
    flex: 1,
    position: 'relative',
  },
  amzznkWrriorsppeechFluxReadScroll: {
    flex: 1,
  },
  amzznkWrriorsppeechFluxReadScrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  amzznkWrriorsppeechFluxReadBody: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  amzznkWrriorsppeechFluxReadFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  amzznkWrriorsppeechFluxReadControls: {
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
  amzznkWrriorsppeechFluxReadSideBtn: {
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
  amzznkWrriorsppeechFluxReadSideBtnIcon: {
    fontSize: 18,
    color: '#F5F0E8',
  },
  amzznkWrriorsppeechFluxReadCheckIcon: {
    color: '#FF9900',
    fontWeight: '700',
  },
  amzznkWrriorsppeechFluxReadCenter: {
    alignItems: 'center',
  },
  amzznkWrriorsppeechFluxReadToggleBtnWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  amzznkWrriorsppeechFluxReadToggleBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  amzznkWrriorsppeechFluxReadToggleIcon: {
    width: 24,
    height: 24,
  },
  amzznkWrriorsppeechFluxReadStatus: {
    marginTop: 8,
    fontSize: 12,
    color: '#9B8E8F',
  },
});
