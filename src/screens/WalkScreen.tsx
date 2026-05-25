import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const walkBgDark = '#231F20';
const walkOrange = '#FF9900';
const walkOrangeEnd = '#FF6B35';
const walkFrameBorder = 'rgba(255, 153, 0, 0.3)';
const walkFrameBgColors: [string, string] = [
  'rgba(255, 153, 0, 0.2)',
  'rgba(255, 107, 53, 0.1)',
];

const walkCinzelBold = 'Cinzel-Bold';
const walkCinzelRegular = 'Cinzel-Regular';

type WalkScreenStep = {
  walkTitle: string;
  walkBody: string;
  walkQuote: string;
  walkBgColors: [string, string, string];
  walkImage: ImageSourcePropType;
};

const walkSteps: WalkScreenStep[] = [
  {
    walkTitle: 'I Am Lyra, Amazonka Warrior',
    walkBody:
      'Greetings, seeker. I am Lyra — warrior, orator, keeper of the ancient voice traditions of the Amazonka sisterhood. I have come to guide you on a journey that will transform not just your words, but your entire presence.',
    walkQuote:
      '"Your voice is a weapon. Let us forge it together."',
    walkBgColors: [
      '#3D1A00',
      '#2C2018',
      walkBgDark,
    ],
    walkImage: require('../../elements/images/walk-slide-1.png'),
  },
  {
    walkTitle: 'Master the Teleprompter',
    walkBody:
      'In ancient times, we memorized speeches under the stars. Today, I give you the Flow Reader — a sacred scroll that moves before your eyes. Choose your passage, set your pace, and read with the power of a warrior.',
    walkQuote:
      '"Three categories of warrior wisdom await your voice."',
    walkBgColors: [
      '#1A2A0A',
      '#232A1A',
      walkBgDark,
    ],
    walkImage: require('../../elements/images/walk-slide-2.png'),
  },
  {
    walkTitle: 'Stories of Our Sisterhood',
    walkBody:
      'Every Amazonka carries stories — legends of queens, myths of power, adventures in the deep jungle. Reading these stories aloud will shape your intonation, your emotion, your connection with language.',
    walkQuote: '"Save your favorites. Share the wisdom."',
    walkBgColors: [
      '#1A1A3D',
      '#23232E',
      walkBgDark,
    ],
    walkImage: require('../../elements/images/walk-slide-3.png'),
  },
  {
    walkTitle: 'The Lab & Oracle',
    walkBody:
      'In the Text Lab, craft and collect your own practice scripts. At the Oracle, test your knowledge in timed trials — collect tokens ✦ as you progress, and use them in the Text Vault.',
    walkQuote: '"Every challenge makes you stronger."',
    walkBgColors: [
      '#3D001A',
      '#2E1820',
      walkBgDark,
    ],
    walkImage: require('../../elements/images/walk-slide-4.png'),
  },
  {
    walkTitle: 'Your Voice Journey Begins',
    walkBody:
      'The Amazonka way is not about perfection — it is about practice, consistency, and the courage to speak clearly and powerfully. I will be with you every step of this journey.',
    walkQuote: '"Rise. Breathe. Speak. You are ready."',
    walkBgColors: [
      '#2D1A00',
      '#272320',
      walkBgDark,
    ],
    walkImage: require('../../elements/images/walk-slide-5.png'),
  },
];

const walkBtnGradient = [
  walkOrange,
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
  walkOrangeEnd,
];

const WalkScreenLyraBadge = () => (
  <View style={styles.walkLyraRow}>
    <View style={styles.walkLyraIcon}>
      <Text style={styles.walkLyraIconText}>⚔️</Text>
    </View>
    <Text style={styles.walkLyraName}>Lyra</Text>
  </View>
);

type WalkScreenDotsProps = {
  walkActiveIndex: number;
};

const WalkScreenDots = ({
  walkActiveIndex,
}: WalkScreenDotsProps) => (
  <View style={styles.walkDotsRow}>
    {walkSteps.map((_, walkDotIndex) => {
      const walkIsActive =
        walkDotIndex === walkActiveIndex;
      return (
        <View
          key={walkDotIndex}
          style={[
            styles.walkDot,
            walkIsActive &&
              styles.walkDotActive,
          ]}
        />
      );
    })}
  </View>
);

const WalkScreen = () => {
  const navigation = useNavigation();
  const walkInsets = useSafeAreaInsets();
  const [walkStep, setWalkScreenStep] = useState(0);

  const walkCurrent =
    walkSteps[walkStep];
  const walkIsLast =
    walkStep === walkSteps.length - 1;

  const walkFinish = () => {
    navigation.navigate('MainTabs' as never);
  };

  const walkContinue = () => {
    if (walkIsLast) {
      walkFinish();
      return;
    }
    setWalkScreenStep(
      walkPrev => walkPrev + 1,
    );
  };

  return (
    <View style={styles.walkRoot}>
      <LinearGradient
        colors={walkCurrent.walkBgColors}
        locations={[0, 0.55, 1]}
        style={styles.walkBgFill}>
        <ScrollView
          contentContainerStyle={[
            styles.walkScroll,
            {paddingTop: walkInsets.top + 24},
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <LinearGradient
            colors={walkFrameBgColors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.walkPortraitWrap}>
            <Image
              source={walkCurrent.walkImage}
              style={styles.walkPortrait}
              resizeMode="cover"
            />
          </LinearGradient>

          <WalkScreenLyraBadge />

          <Text style={styles.walkTitle}>
            {walkCurrent.walkTitle}
          </Text>

          <View style={styles.walkDescBox}>
            <Text style={styles.walkDescText}>
              {walkCurrent.walkBody}
            </Text>
          </View>

          <Text style={styles.walkQuote}>
            {walkCurrent.walkQuote}
          </Text>
          <View
            style={[
              styles.walkFooter,
              {paddingBottom: Math.max(walkInsets.bottom, 16)},
            ]}>
            <WalkScreenDots
              walkActiveIndex={walkStep}
            />

            <Pressable
              onPress={walkContinue}
              style={({pressed}) => [
                styles.walkBtnWrap,
                pressed && styles.walkBtnPressed,
              ]}>
              <LinearGradient
                colors={walkBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.walkBtn}>
                <Text style={styles.walkBtnText}>
                  {walkIsLast
                    ? 'Begin My Journey'
                    : 'Continue →'}
                </Text>
              </LinearGradient>
            </Pressable>

            {!walkIsLast && (
              <Pressable
                onPress={walkFinish}
                style={({pressed}) => [
                  styles.walkSkipWrap,
                  pressed && styles.walkSkipPressed,
                ]}>
                <Text style={styles.walkSkipText}>
                  Skip for now
                </Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default WalkScreen;

const styles = StyleSheet.create({
  walkRoot: {
    flex: 1,
    backgroundColor: walkBgDark,
  },
  walkBgFill: {
    flex: 1,
  },
  walkScroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 31,
    paddingBottom: 30,
  },
  walkPortraitWrap: {
    width: 231,
    height: 231,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: walkFrameBorder,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  walkPortrait: {
    marginTop: 2,
  },
  walkLyraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  walkLyraIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.4)',
    backgroundColor: 'rgba(255, 153, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  walkLyraIconText: {
    fontSize: 10,
    color: '#F5F0E8',
  },
  walkLyraName: {
    fontFamily: walkCinzelRegular,
    fontSize: 12,
    letterSpacing: 1.2,
    color: walkOrange,
    textTransform: 'uppercase',
  },
  walkTitle: {
    fontFamily: walkCinzelBold,
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  walkDescBox: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    backgroundColor: 'rgba(35, 31, 32, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
  },
  walkDescText: {
    fontSize: 14,
    lineHeight: 22.75,
    color: 'rgba(245, 240, 232, 0.9)',
    textAlign: 'center',
  },
  walkQuote: {
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'italic',
    fontWeight: '500',
    color: walkOrange,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  walkFooter: {
    width: '100%',
    paddingTop: 16,
    marginTop: 30,
  },
  walkDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
    minHeight: 6,
  },
  walkDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  walkDotActive: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: walkOrange,
  },
  walkBtnWrap: {
    width: '100%',
    marginBottom: 12,
    shadowColor: walkOrange,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 7.5,
    elevation: 8,
  },
  walkBtnPressed: {
    opacity: 0.9,
    transform: [{scale: 0.98}],
  },
  walkBtn: {
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walkBtnText: {
    fontFamily: walkCinzelBold,
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#000000',
  },
  walkSkipWrap: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  walkSkipPressed: {
    opacity: 0.6,
  },
  walkSkipText: {
    fontSize: 12,
    letterSpacing: 0.3,
    fontWeight: '500',
    color: '#9B8E8F',
  },
});
